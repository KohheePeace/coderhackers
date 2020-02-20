---
title: Step22 Firestore security rules (Backend authorization)
---

```js
rules_version = '2';

service cloud.firestore {
 match /databases/{database}/documents {
 	match /{path=**}/posts/{post} {
  	allow read: if true;
  }
  
  match /users/{userId} {
    allow read, update, delete: if request.auth.uid == userId;
    allow create: if request.auth.uid != null;
    
    
    // A read rule can be divided into get and list rules
    match /posts/{post} {
      // Applies to single document read requests
      allow get: if request.auth.uid == userId;

      // Applies to queries and collection read requests
      allow list: if request.auth.uid == userId;
    }

      // A write rule can be divided into create, update, and delete rules
    match /posts/{post} {
			// To create post, user must login,
      // Title required
      // Content require
      allow create: if request.auth.uid != null
      							&& request.resource.data.title.size() > 0;

      // Applies to writes to existing documents
      allow update: if request.auth.uid == userId
                    && request.resource.data.title.size() > 0;

      // Applies to delete operations
      allow delete: if request.auth.uid == userId;
    }
  }
 }
}
```