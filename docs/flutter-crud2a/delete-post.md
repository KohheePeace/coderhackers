---
title: Step21 Delete Post
---

Just call `delete()` metod.

https://pub.dev/documentation/cloud_firestore/latest/cloud_firestore/DocumentReference-class.html

#### `lib/pages/my_posts_page.dart`
```dart
case 'delete':
	await Firestore.instance
		.collection('users')
		.document(user.uid)
		.collection('posts')
		.document(post.id)
		.delete();
	break;
```

