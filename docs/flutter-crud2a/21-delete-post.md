## Step20 Delete Post
`lib/pages/my_posts_page.dart`
```dart
case 'delete':
	// https://stackoverflow.com/questions/48708640/delete-a-document-from-subcollection-in-firestore-with-node-js
	await Firestore.instance
		.collection('users')
		.document(user.uid)
		.collection('posts')
		.document(post.id)
		.delete();
	break;
```

