---
title: Step24 Firestore Security Rules Testing
---

## Goal of this step
- Learn how to write test for Firestore Security Rules

## Refs
- https://firebase.google.com/docs/firestore/security/test-rules-emulator
- https://medium.com/@adityadroid/60-days-of-flutter-building-a-messenger-day-55-56-deploying-firestore-security-rules-using-d8d78fd1eeea


## Setup
### Install java

If you haven't installed java...
- https://chocolatey.org/packages/openjdk#individual
- https://firebase.google.com/docs/rules/emulator-setup

*You may need to restart your pc after install!

### Install firebase cli
https://firebase.google.com/docs/cli/

#### `terminal`
```bash
npm install -g firebase-tools
```

```bash
firebase login
```

Check it works correctly
```bash
firebase projects:list
```
### Make `server` folder

#### `terminal`
```bash
mkdir server
cd server
firebase init
```

## Imitate Quickstart
https://firebase.google.com/docs/firestore/security/test-rules-emulator#quickstart

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

### Copy quickstart rules.
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

### Run Test
Let's run example test.

#### `terminal`
```bash
firebase emulators:exec --only firestore 'npm test'
```

## Test case for our Flutter app
So, let's write test for out security rules by imitating quickstart example.
#### `test/test.js`
```js
...
describe("My app", () => {
  it("require users to log in before creating a user", async () => {
    const db = authedApp(null);
    const user = db.collection("users").doc("alice");
    await firebase.assertFails(user.set({ name: "Alice" }));
  });

  it("should let anyone read any published posts", async () => {  
    const db = authedApp(null);
    const queryPublished = db.collectionGroup('posts').where("published", "==", true).get();
    const queryDrafts = db.collectionGroup('posts').where("published", "==", false).get();
    await firebase.assertSucceeds(queryPublished);
    await firebase.assertFails(queryDrafts);
  });

  it("should only let users to query their own post", async () => {
    const db = authedApp({ uid: "alice" });
    await firebase.assertSucceeds(
      db
        .collection("users")
        .doc("alice")
        .collection("posts")
        .get()
    );
    await firebase.assertFails(
      db
        .collection("users")
        .doc("bob")
        .collection("posts")
        .get()
    );
  });

  it("should not allow to read other's draft post", async () => {
    const alice = authedApp({ uid: "alice" });
    const bob = authedApp({ uid: "bob" });

    // Make alice's draft post
    const aliceDraftPost = alice.collection("users").doc("alice").collection("posts").doc("alice-post1");
    await aliceDraftPost.set({title: "title", published: false});

    // Make alice's published post
    const alicePublicPost = alice.collection("users").doc("alice").collection("posts").doc("alice-post2");
    await alicePublicPost.set({title: "title", published: true});

    // Bob access alice's draft post
    const bobQuery1 = bob.collection("users").doc("alice").collection("posts").doc("alice-post1").get();

    // Bob access alice's published post
    const bobQuery2 = bob.collection("users").doc("alice").collection("posts").doc("alice-post2").get();

    // Alice access alice's draft post
    const aliceQuery = aliceDraftPost.get();

    await firebase.assertFails(bobQuery1);
    await firebase.assertSucceeds(bobQuery2);
    await firebase.assertSucceeds(aliceQuery);
  });


  it("require users to log in before creating a post", async () => {
    const db = authedApp(null);
    const query = db.collection("users").doc("alice")
                    .collection("posts").doc()
                    .set({
                      title: "alice",
                      content: "All Things Firebase"
                    })
    await firebase.assertFails(query);
  });

  it("requires title field to create a post", async () => {
    const db = authedApp({ uid: "alice" });
    const postDocRef = db.collection("users").doc("alice").collection("posts").doc()
                  
    await firebase.assertFails(postDocRef.set({title: ""}));
    await firebase.assertSucceeds(postDocRef.set({title: "title 1"}));
  });


  it("should not allow to update other's post", async () => {
    const alice = authedApp({ uid: "alice" });
    const bob = authedApp({ uid: "bob" });

    // Make bob's post
    await bob.collection("users").doc("bob")
      .collection("posts").doc("bobPost1")
      .set({title: "hogehoge"});

    // alice query to update bob's post
    aliceQuery = alice.collection("users").doc("bob")
                  .collection("posts").doc("bobPost1")
                  .update({title: "hoge"});
                  
    await firebase.assertFails(aliceQuery);
  });

  it("requires title field to update a post", async () => {
    const db = authedApp({ uid: "alice" });
    const postDocRef = db.collection("users").doc("alice").collection("posts").doc("post1");
    await postDocRef.set({title: "hogehgoe"});
                  
    await firebase.assertFails(postDocRef.update({title: ""}));
    await firebase.assertSucceeds(postDocRef.update({title: "title 1"}));
  });

  it("should not allow to delete other's post", async () => {
    const alice = authedApp({ uid: "alice" });

    // alice query to update bob's post
    aliceQuery = alice.collection("users").doc("bob")
                  .collection("posts").doc("bobPost1")
                  .delete();
                  
    await firebase.assertFails(aliceQuery);
  });
});
```

## Check test reports

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

### Test Coverage
https://firebase.google.com/docs/rules/emulator-reports

If test is not applied to the rules, it shows message like this.
![ss-of-coverage](https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/Screen%20Shot%202020-02-27%20at%205.31.13.png)

## Deploy Rules
#### `terminal`
```bash
# inside server dir
firebase deploy --only firestore:rules
```

## Seed data
This is just a memo links.

https://github.com/firebase/firebase-tools/issues/1167#issuecomment-545641337
https://stackoverflow.com/questions/56268092/how-to-setup-test-data-when-testing-firestore-rules-with-emulator
https://github.com/sgr-ksmt/firestore-emulator-rules-test/blob/master/test/test.ts
https://techlife.cookpad.com/entry/2018/11/05/143000