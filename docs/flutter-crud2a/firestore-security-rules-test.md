---
title: Step24 Firestore Security Rules Testing
---

## Goal of this step
- Learn how to write test of Firestore Security Rules

## Setup
https://firebase.google.com/docs/firestore/security/test-rules-emulator

### Install firebase cli
https://firebase.google.com/docs/cli/

#### `terminal`
```bash
npm install -g firebase-tools
```

```bash
firebase login
```

### Make `server` folder

#### `terminal`
```bash
cd server
firebase init
```

### Make `package.json`
#### `server/package.json`
```json
{
  "name": "cloud-firestore-emulator-javascript-quickstart",
  "version": "1.0.2",
  "description": "Cloud Firestore emulator testing",
  "scripts": {
    "format": "prettier --write **/*.js",
    "test": "mocha --timeout=10000"
  },
  "devDependencies": {
    "@firebase/testing": "^0.16.11",
    "mocha": "5.2.0",
    "prettier": "1.15.2"
  }
}
```

### npm install
run `npm install` in sever directory.

### Make `test/test.js`
#### `test/test.js`
```js {10}
const firebase = require("@firebase/testing");
const fs = require("fs");

/*
 * ============
 *    Setup
 * ============
 */
const projectId = "firestore-emulator-example";
const port = 8080;
const coverageUrl = `http://localhost:${port}/emulator/v1/projects/${projectId}:ruleCoverage.html`;

const rules = fs.readFileSync("firestore.rules", "utf8");

/**
 * Creates a new app with authentication data matching the input.
 *
 * @param {object} auth the object to use for authentication (typically {uid: some-uid})
 * @return {object} the app.
 */
function authedApp(auth) {
  return firebase.initializeTestApp({ projectId, auth }).firestore();
}

/*
 * ============
 *  Test Cases
 * ============
 */
beforeEach(async () => {
  // Clear the database between tests
  await firebase.clearFirestoreData({ projectId });
});

before(async () => {
  await firebase.loadFirestoreRules({ projectId, rules });
});

after(async () => {
  await Promise.all(firebase.apps().map(app => app.delete()));
  console.log(`View rule coverage information at ${coverageUrl}\n`);
});

describe("My app", () => {
  it("require users to log in before creating a profile", async () => {
    const db = authedApp(null);
    const profile = db.collection("users").doc("alice");
    await firebase.assertFails(profile.set({ birthday: "January 1" }));
  });

  it("should enforce the createdAt date in user profiles", async () => {
    const db = authedApp({ uid: "alice" });
    const profile = db.collection("users").doc("alice");
    await firebase.assertFails(profile.set({ birthday: "January 1" }));
    await firebase.assertSucceeds(
      profile.set({
        birthday: "January 1",
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
    );
  });

  it("should only let users create their own profile", async () => {
    const db = authedApp({ uid: "alice" });
    await firebase.assertSucceeds(
      db
        .collection("users")
        .doc("alice")
        .set({
          birthday: "January 1",
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
    );
    await firebase.assertFails(
      db
        .collection("users")
        .doc("bob")
        .set({
          birthday: "January 1",
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
    );
  });

  it("should let anyone read any profile", async () => {
    const db = authedApp(null);
    const profile = db.collection("users").doc("alice");
    await firebase.assertSucceeds(profile.get());
  });

  it("should let anyone create a room", async () => {
    const db = authedApp({ uid: "alice" });
    const room = db.collection("rooms").doc("firebase");
    await firebase.assertSucceeds(
      room.set({
        owner: "alice",
        topic: "All Things Firebase"
      })
    );
  });

  it("should force people to name themselves as room owner when creating a room", async () => {
    const db = authedApp({ uid: "alice" });
    const room = db.collection("rooms").doc("firebase");
    await firebase.assertFails(
      room.set({
        owner: "scott",
        topic: "Firebase Rocks!"
      })
    );
  });

  it("should not let one user steal a room from another user", async () => {
    const alice = authedApp({ uid: "alice" });
    const bob = authedApp({ uid: "bob" });

    await firebase.assertSucceeds(
      bob
        .collection("rooms")
        .doc("snow")
        .set({
          owner: "bob",
          topic: "All Things Snowboarding"
        })
    );

    await firebase.assertFails(
      alice
        .collection("rooms")
        .doc("snow")
        .set({
          owner: "alice",
          topic: "skiing > snowboarding"
        })
    );
  });
});
```

## Run Test
Let's run example test.
#### `firestore.rules`
```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read;
      allow create: if request.auth.uid == userId && request.resource.data.createdAt == request.time;
    }
    match /rooms/{roomId} {
      allow read;
      // If you create a room, you must set yourself as the owner.
      allow create: if request.resource.data.owner == request.auth.uid;
      // Only the room owner is allowed to modify it.
      allow update: if resource.data.owner == request.auth.uid;
    }
  }
}
```

#### `terminal`
```bash
firebase emulators:exec --only firestore 'npm test'
```

## Generate test reports

https://firebase.google.com/docs/rules/emulator-reports

### Start emulator

#### `terminal`
```bash
firebase emulators:start --only firestore
```

Then, in another terminal tab

#### `terminal`
```bash
npm run test
```

And visit generated url