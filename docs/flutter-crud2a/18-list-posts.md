## Step18 List Posts
In this step, let's show the posts in `HomePage`.

This is almost same with official example.
https://pub.dev/packages/cloud_firestore#usage

`lib/pages/home_page.dart`
```dart
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
						return ListTile(
							title: Text(document['title'], style: TextStyle(fontWeight: FontWeight.bold),),
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

### Navigate to **PostsShowPage**
When user tap each post, we want to navigate user to **PostsShowPage**.

`lib/pages/home_page.dart`
```dart
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
						// Why you need to make Post class from document? Answer ↓
						// 1. type safety, 2. autocompletion, 3. compile-time exceptions
						// https://flutter.dev/docs/development/data-and-backend/json#serializing-json-inline
						final post = Post.fromFirestore(document);

						return ListTile(
							title: Text(post.title, style: TextStyle(fontWeight: FontWeight.bold),),
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

*Note: "Memo Comment"

```dart
// This is DocumentSnapshot class operator
// https://pub.dev/documentation/cloud_firestore/latest/cloud_firestore/DocumentSnapshot-class.html#operators
// print('document: ${document["title"]}');
```


### Create Post model
`lib/models/post.dart`
```dart
import 'package:cloud_firestore/cloud_firestore.dart';

class Post {
  final String id;
  final String title;
  final String content;
  final Timestamp createdAt;

  Post(this.id, this.title, this.content, this.createdAt);

  // https://dart.dev/guides/language/language-tour#constructors
  // https://codelabs.developers.google.com/codelabs/flutter-firebase/#4
  // 1. Using "Named constructors"
  // 2. Using "Initializer list"
  Post.fromFirestore(DocumentSnapshot document)
    : id = document.documentID,
      title = document['title'],
      content = document['content'],
      createdAt = document['createdAt'];
}
```

