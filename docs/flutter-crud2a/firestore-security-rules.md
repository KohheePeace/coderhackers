---
title: Step23 Firestore security rules
---

## Goal of this step
- Learn how to write Firestore security rules.

## Overview
https://firebase.google.com/docs/firestore/security/overview

=> Flutter is "**mobile**" app so, we are using **"Firestore Security Rules"**.


## Get started
In this section, let's check "Get Started" Page.

https://firebase.google.com/docs/firestore/security/get-started

### Writing rules
https://firebase.google.com/docs/firestore/security/get-started#writing_rules

### Testing rules
https://firebase.google.com/docs/firestore/security/get-started#testing_rules

### Deploying rules
https://firebase.google.com/docs/firestore/security/get-started#deploying_rules


## Security Rules Basic
In this section, let's take a look at how to write basic security rules.

### Basic read/write rules
https://firebase.google.com/docs/firestore/security/rules-structure#basic_readwrite_rules

:::caution ***NOTE!**
You **cannot** write rules like rest api(below).
```js
match /cities {
  allow list: if <condition>;
}
```
:::

### Granular operations
https://firebase.google.com/docs/firestore/security/rules-structure#granular_operations



### Hierarchical data
https://firebase.google.com/docs/firestore/security/rules-structure#hierarchical_data

## Rules for our Flutter application
```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    /* Anyone can read post */
    // We use "collectionGroup()" to query posts, so you need to be a little bit careful.
    // https://firebase.google.com/docs/firestore/security/rules-query#collection_group_queries_and_security_rules
    match /{path=**}/posts/{post} {
      allow read: if true;
    }

    match /users/{userId} {
      // https://firebase.google.com/docs/firestore/security/rules-conditions#authentication
      /* User can be created only if they are authenticated. */
      allow create: if request.auth.uid != null;

      // A "read" rule can be divided into "get" and "list" rules
      // https://firebase.google.com/docs/firestore/security/rules-structure#granular_operations
      // And this is Hierarchical data rules.
      // https://firebase.google.com/docs/firestore/security/rules-structure#hierarchical_data
      // *NOTE!: This rule is no meaning because of subcollection post rule.
      match /posts/{post} {
        // Applies to single document read requests
        /* We dont' request this from Flutter App. Just a example */
        allow get: if request.auth.uid == userId;

        // Applies to queries and collection read requests
        allow list: if request.auth.uid == userId;
      }


      // A "write" rule can be divided into "create", "update", and "delete" rules
      // https://firebase.google.com/docs/firestore/security/rules-structure#granular_operations
      match /posts/{post} {
        // To create post, user must login,
        // Title required
        // https://firebase.google.com/docs/firestore/security/rules-conditions#data_validation
        // ""(empty string) is not null. So we need to write like this.
        // https://firebase.google.com/docs/reference/rules/rules.String?authuser=0#size
        allow create: if request.auth.uid != null
                      && request.resource.data.title.size() > 0;

        // Applies to writes to existing documents
        // User must be author && title requied to update.
        allow update: if request.auth.uid == userId
                      && request.resource.data.title.size() > 0;

        // Applies to delete operations
        allow delete: if request.auth.uid == userId;
      }
    }
  }
}
```

## Real world posts "read" security rules
Let's fix meaningless collectionGroup posts rules.
```js {9}
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    /* Anyone can read post published post */
    // We use "collectionGroup()" to query posts, so you need to be a little bit careful.
    // https://firebase.google.com/docs/firestore/security/rules-query#collection_group_queries_and_security_rules
    match /{path=**}/posts/{post} {
      allow read: if resource.data.published == true;
    }
  ...
}
```
*This is just a demo for security rules.

We are not going to implement publish and draft feature in Flutter side.

## Refs and Memo Links
https://firebase.google.com/docs/firestore/security/rules-query#secure_collection_group_queries_based_on_a_fiel

https://stackoverflow.com/questions/56149601/firestore-collection-group-query-on-documentid

https://stackoverflow.com/questions/56219469/firestore-get-the-parent-document-of-a-subcollection