---
title: Step23 Firestore security rules (Backend authorization)
---

- Document about **security rules** start here: https://firebase.google.com/docs/firestore/security/overview

```js
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    /* Anyone can read post */
    // https://firebase.google.com/docs/firestore/security/rules-structure#basic_readwrite_rules
    match /{path=**}/posts/{post} {
      allow read: if true;
    }
  
    match /users/{userId} {
      // https://firebase.google.com/docs/firestore/security/rules-conditions#authentication
      /* User can be created only if they are authenticated. */
      allow create: if request.auth.uid != null;

      /* We don't user these request... this is just a demo... */
      allow read, update, delete: if request.auth.uid == userId;  

      // A read rule can be divided into get and list rules
      // https://firebase.google.com/docs/firestore/security/rules-structure#granular_operations
      // And this is Hierarchical data rules.
      // https://firebase.google.com/docs/firestore/security/rules-structure#hierarchical_data
      match /posts/{post} {
        // Applies to single document read requests
        /* We dont' request this from flutter. */
        allow get: if request.auth.uid == userId;

        // Applies to queries and collection read requests
        allow list: if request.auth.uid == userId;
      }

      // A write rule can be divided into create, update, and delete rules
      // https://firebase.google.com/docs/firestore/security/rules-structure#granular_operations
      match /posts/{post} {
        // To create post, user must login,
        // Title required
        // https://firebase.google.com/docs/firestore/security/rules-conditions#data_validation
        // "" empty string is not null. So we need to write like this.
        // https://firebase.google.com/docs/reference/rules/rules.String?authuser=0#size
        allow create: if request.auth.uid != null
                      && request.resource.data.title.size() > 0;

        // Applies to writes to existing documents
        // User must login && title requied to update.
        allow update: if request.auth.uid == userId
                      && request.resource.data.title.size() > 0;

        // Applies to delete operations
        allow delete: if request.auth.uid == userId;
      }
    }
  }
}
```