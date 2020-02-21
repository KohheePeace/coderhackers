---
title: Step17 Create Post
---

## Goal of this step
- Create Post in firestore

## Add FloatingActionButton
https://api.flutter.dev/flutter/material/FloatingActionButton-class.html

#### `lib/pages/home_page.dart`
```dart {2-20}
body: (),
floatingActionButton: FloatingActionButton(
  onPressed: () {
    if (isAuthenticated) {
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => PostsNewPage()),
      );
    } else {
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => LoginPage()),
      );
    }
  },
  tooltip: 'New Post',
  child: Icon(Icons.note_add),
),
```

## Edit `lib/pages/posts_new_page.dart`
The all code is...

`lib/pages/posts_new_page.dart`
```dart
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class PostsNewPage extends StatefulWidget {
  @override
  _PostsNewPageState createState() => _PostsNewPageState();
}

class _PostsNewPageState extends State<PostsNewPage> {
  final GlobalKey<FormState> _postNewFormKey = GlobalKey<FormState>();
  final titleInputController = TextEditingController();
  final contentInputController = TextEditingController();
  
  // https://flutter.dev/docs/development/ui/interactive#step-3-subclass-state
  bool _isSubmitting = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("PostsNew Page"),
      ),
      body: Container(
        padding: const EdgeInsets.all(20.0),
        child: SingleChildScrollView(
          child: Form(
            key: _postNewFormKey,
            child: Column(
              children: <Widget>[
                TextFormField(
                  decoration: InputDecoration(
                    labelText: 'Title*', hintText: "Title"
                  ),
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
                    labelText: 'Content', hintText: "Post content here..."
                  ),
                  controller: contentInputController,
                ),
                Padding(
                  padding: EdgeInsets.all(20.0),
                  child: _isSubmitting ? // https://stackoverflow.com/questions/47065098/how-to-work-with-progress-indicator-in-flutter
                  Center(child: CircularProgressIndicator())
                  :
                  RaisedButton(
                    child: Text("Save Post"),
                    color: Theme.of(context).primaryColor,
                    textColor: Colors.white,
                    onPressed: () async {
                      if (_postNewFormKey.currentState.validate()) {
                        try {
                          setState(() {
                            _isSubmitting = true;
                          });
                          
                          final user = Provider.of<FirebaseUser>(context, listen: false);
                        
                          await Firestore.instance
                            .collection('users')
                            .document(user.uid)
                            .collection("posts")
                            .document()
                            .setData({
                              "title": titleInputController.text,
                              "content": contentInputController.text,
                              "createdAt": FieldValue.serverTimestamp(),
                              "updatedAt": FieldValue.serverTimestamp()
                            });
                          
                          // https://stackoverflow.com/a/46713257/6037441
                          // https://stackoverflow.com/a/45889342/6037441
                          Navigator.of(context)
                            .pushNamedAndRemoveUntil('/', (Route<dynamic> route) => false);
                        } catch (e) {
                          print('Error Happened!!!: $e');
                          setState(() {
                            _isSubmitting = false;
                          });
                        }  
                      }
                    },
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
```

## Check code
The important part of code is here.

https://pub.dev/packages/cloud_firestore#usage

```dart
// final user = Provider.of<FirebaseUser>(context, listen: false);
FirebaseUser user = await FirebaseAuth.instance.currentUser();
                   
await Firestore.instance
	.collection('users')
	.document(user.uid)
	.collection("posts")
	.document()
	.setData({
		"title": titleInputController.text,
		"content": contentInputController.text,
		"createdAt": FieldValue.serverTimestamp(),
		"updatedAt": FieldValue.serverTimestamp()
	});
```

I will create "**posts**" as subcollection of "**users**"

https://firebase.google.com/docs/firestore/data-model#subcollections

## Check firestore console
Check how data is created in
https://console.firebase.google.com/