---
title: Step17 Create Post
---

## Add FloatingActionButton
https://api.flutter.dev/flutter/material/FloatingActionButton-class.html

`lib/pages/home_page.dart`
```dart hl_lines="17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33"
class _HomePageState extends State<HomePage> {

  @override
  Widget build(BuildContext context) {
    final user = Provider.of<FirebaseUser>(context);
    final bool _isAuthenticated = user != null;
 
    return Scaffold(
      appBar: AppBar(
        title: Text("Home Page"),
      ),
      drawer: HomeDrawer(),
      body: Center(
        // https://stackoverflow.com/questions/49713189/how-to-use-conditional-statement-within-child-attribute-of-a-flutter-widget-cen
        child: _isAuthenticated ? Text('Home Page after login') : Text('This is home page')
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          if (_isAuthenticated) {
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
    );
  }
}
```

## Edit `lib/pages/posts_new_page.dart`
The all code is...

`lib/pages/posts_new_page.dart`
```dart
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:provider/provider.dart';

class PostsNewPage extends StatefulWidget {
  PostsNewPage({Key key}) : super(key: key);

  @override
  _PostsNewPageState createState() => _PostsNewPageState();
}

class _PostsNewPageState extends State<PostsNewPage> {
  final GlobalKey<FormState> _registerFormKey = GlobalKey<FormState>();
  final titleInputController = TextEditingController();
  final contentInputController = TextEditingController();

  // https://flutter.dev/docs/development/ui/interactive
  bool _isSubmitting = false;

  @override
  initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("New Post"),
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
                  child: Text("Save Post"),
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
              ],
            ),
          )
        )
      )
    );
  }
}
```

The important part of code is here.

https://pub.dev/packages/cloud_firestore#usage

```dart
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
```

