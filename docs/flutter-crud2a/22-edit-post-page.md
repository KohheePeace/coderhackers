## Step22 Edit Post Page
### Add Navigation to `lib/pages/posts_edit_page.dart`
`lib/pages/my_posts_page.dart`
```dart
case 'edit':
	Navigator.push(
		context,
		MaterialPageRoute(
			builder: (context) => PostsEditPage(post: post),
		),
	);
	break;
```

### Edit `lib/pages/posts_edit_page.dart`

`lib/pages/posts_edit_page.dart`
```dart
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_firebase_firestore_crud2a/models/post.dart';
import 'package:provider/provider.dart';

class PostsEditPage extends StatefulWidget {
  final Post post;

  PostsEditPage({Key key, @required this.post}) : super(key: key);

  @override
  _PostsEditPageState createState() => _PostsEditPageState();
}

class _PostsEditPageState extends State<PostsEditPage> {
  final GlobalKey<FormState> _registerFormKey = GlobalKey<FormState>();
  final titleInputController = TextEditingController();
  final contentInputController = TextEditingController();

  // https://flutter.dev/docs/development/ui/interactive
  bool _isSubmitting = false;

  @override
  initState() {
    // https://github.com/flutter/flutter/issues/9969
    titleInputController.text = widget.post.title;
    contentInputController.text = widget.post.content;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Edit Post"),
        ),
        body: Container(
          padding: const EdgeInsets.all(20.0),
          child: SingleChildScrollView(
              child: Form(
            key: _registerFormKey,
            child: Column(
              children: <Widget>[
                TextFormField(
                  decoration: InputDecoration(
                      labelText: 'Title*', hintText: "Title"),
                  controller: titleInputController,
                  validator: (value) {
                    if (value.isEmpty) {
                      return "Please enter a title.";
                    }
                    return null;
                  },
                ),
                TextFormField(
                  decoration: InputDecoration(
                      labelText: 'Content', hintText: "Post content here..."),
                  controller: contentInputController,
                ),
                SizedBox(height: 20),
                _isSubmitting ? // https://stackoverflow.com/questions/47065098/how-to-work-with-progress-indicator-in-flutter
                Center(child: CircularProgressIndicator())
                :
                RaisedButton(
                  child: Text("Update Post"),
                  color: Theme.of(context).primaryColor,
                  textColor: Colors.white,
                  onPressed: () async {
                    if (_registerFormKey.currentState.validate()) {
                      try {
                        setState(() {
                          _isSubmitting = true;
                        });
                        
                        final user = Provider.of<FirebaseUser>(context, listen: false);
                      
                        await Firestore.instance
                          .collection('users')
                          .document(user.uid)
                          .collection("posts")
                          .document(widget.post.id)
                          .updateData({
                            "title": titleInputController.text,
                            "content": contentInputController.text,
														"updatedAt": FieldValue.serverTimestamp()
                          });
                        
                        Navigator.pop(context);
                      } catch (e) {
                        print('Error Happened!!!: $e');
                        setState(() {
                          _isSubmitting = false;
                        });
                      }  
                    }
                  },
                ),
              ],
            ),
          )
        )
      )
    );
  }
}
```

### Important part of this code

Set initial form value.
```dart
initState() {
	// https://github.com/flutter/flutter/issues/9969
	titleInputController.text = widget.post.title;
	contentInputController.text = widget.post.content;
	super.initState();
}
```

Update firestore request
```dart
await Firestore.instance
	.collection('users')
	.document(user.uid)
	.collection("posts")
	.document(widget.post.id)
	.updateData({
		"title": titleInputController.text,
		"content": contentInputController.text,
		"updatedAt": FieldValue.serverTimestamp()
	});
```


