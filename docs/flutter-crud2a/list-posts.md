---
title: Step18 List Posts
---

## Goal of this step
- Show list of posts in `HomePage`
  

## Show list of posts in HomePage

This is almost same code with official example.
https://pub.dev/packages/cloud_firestore#usage

But "posts" collection is subcollection of "users" top level collection.

So, we need to use `collectionGroup`.

Ref: https://stackoverflow.com/questions/46573014/firestore-query-subcollections
#### `lib/pages/home_page.dart`
```dart {2}
body: StreamBuilder<QuerySnapshot>(
	stream: Firestore.instance.collectionGroup('posts').snapshots(),
	builder: (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) {
		if (snapshot.hasError) return Text('Error: ${snapshot.error}');
		switch (snapshot.connectionState) {
			case ConnectionState.waiting:
				return Text('Loading...');
			default:
				return ListView(
					children: snapshot.data.documents.map((DocumentSnapshot document) {
						return ListTile(
							title: Text(
								document['title'],
								style: TextStyle(fontWeight: FontWeight.bold),
							),
							subtitle: Text(document['content']),
						);
					}).toList(),
				);
		}
	},
),
```

### Add post again to check how **`StreamBuilder`** works
By using **`StreamBuilder`**, new post automatically added to HomePage.

### OrderBy `createdAt`
```dart
Firestore.instance.collectionGroup('posts').orderBy('createdAt', descending: true).snapshots(),
```
https://pub.dev/documentation/cloud_firestore/latest/cloud_firestore/Query/orderBy.html

## Refactor code to use Post Model

### Why ?
Data which is returned by Firestore is `DocumentSnapshot` type data.

But it is good practice to define `Post` model and what type of fields `Post` model should have in our application side.

> With this approach, the calling code can have type safety, autocompletion for the name and email fields, and compile-time exceptions. If you make typos or treat the fields as ints instead of Strings, the app won’t compile, instead of crashing at runtime.

https://flutter.dev/docs/development/data-and-backend/json#serializing-json-inside-model-classes

### Create Post model
#### `lib/models/post.dart`
```dart
import 'package:cloud_firestore/cloud_firestore.dart';

class Post {
  final String id;
  final String title;
  final String content;
  final Timestamp createdAt;

  // https://dart.dev/guides/language/language-tour#constructors
  Post(this.id, this.title, this.content, this.createdAt);

  // https://codelabs.developers.google.com/codelabs/flutter-firebase/index.html#4
  // 1. Using "Named constructors"
  // 2. Using "Initializer list"
  Post.fromFirestore(DocumentSnapshot document)
    : id = document.documentID,
      title = document['title'],
      content = document['content'],
      createdAt = document['createdAt'];
}
```
### Refactor StreamBuilder

#### `lib/pages/home_page.dart`
```dart {12,16,19}
body: StreamBuilder<QuerySnapshot>(
	stream: Firestore.instance.collectionGroup('posts').snapshots(),
	builder: (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) {
		if (snapshot.hasError)
			return Text('Error: ${snapshot.error}');
		switch (snapshot.connectionState) {
			case ConnectionState.waiting: return Text('Loading...');
			default:
				return ListView(
					children: snapshot.data.documents.map((DocumentSnapshot document) {
						
						final post = Post.fromFirestore(document);
						
						return ListTile(
							title: Text(
								post.title,
								style: TextStyle(fontWeight: FontWeight.bold),
							),
							subtitle: Text(post.content),
						);
					}).toList(),
				);
		}
	},
),
```

## Navigate to **PostsShowPage**
When user tap each post, we want to navigate user to **PostsShowPage**.

`lib/pages/home_page.dart`
```dart {19-27}
body: StreamBuilder<QuerySnapshot>(
	stream: Firestore.instance.collectionGroup('posts').snapshots(),
	builder: (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) {
		if (snapshot.hasError)
			return Text('Error: ${snapshot.error}');
		switch (snapshot.connectionState) {
			case ConnectionState.waiting: return Text('Loading...');
			default:
				return ListView(
					children: snapshot.data.documents.map((DocumentSnapshot document) {
						final post = Post.fromFirestore(document);

						return ListTile(
							title: Text(
								post.title,
								style: TextStyle(fontWeight: FontWeight.bold),
							),
							subtitle: Text(post.content),
							onTap: () {
								// https://flutter.dev/docs/cookbook/navigation/passing-data#4-navigate-and-pass-data-to-the-detail-screen
								Navigator.push(
									context,
									MaterialPageRoute(
										builder: (context) => PostsShowPage(post: post),
									),
								);
							},
						);
					}).toList(),
				);
		}
	},
),
```

#### *Just a memo

```dart
print('document: ${document["title"]}');
```
This is DocumentSnapshot class operator
https://pub.dev/documentation/cloud_firestore/latest/cloud_firestore/DocumentSnapshot-class.html#operators

