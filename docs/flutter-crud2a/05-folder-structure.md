---
title: Step5 Folder Structure
---

## Goal of this step
- Prepare pages for following steps.

## Prepare skelton folders and files
Make `pages` folder. (some other developers may name `screens` but I prefer `pages`).

1. `pages/home_page.dart`
2. `pages/login_page.dart`
3. `pages/register_page.dart`
4. `pages/posts_new_page.dart`
5. `pages/posts_edit_page.dart`
6. `pages/posts_show_page.dart`
7. `pages/my_posts_page.dart`

---

1.`pages/home_page.dart`
```dart
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

  @override
  Widget build(BuildContext context) {
	return Scaffold(
	  appBar: AppBar(
		title: Text("Home Page"),
	  ),
	  body: Center(
		child: Text('This is home page')
	  ),
	);
  }
}
```
2.`pages/login_page.dart`
```dart
import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {

  @override
  Widget build(BuildContext context) {
	return Scaffold(
	  appBar: AppBar(
		title: Text("Login Page"),
	  ),
	  body: Center(
		child: Text('This is login page')
	  ),
	);
  }
}
```
3.`pages/register_page.dart`

```dart
import 'package:flutter/material.dart';

class RegisterPage extends StatefulWidget {

  @override
  _RegisterPageState createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {

  @override
  Widget build(BuildContext context) {
	return Scaffold(
	  appBar: AppBar(
		title: Text("Register Page"),
	  ),
	  body: Center(
		child: Text('This is register page')
	  ),
	);
  }
}
```
4.`pages/posts_new_page.dart`
```dart
import 'package:flutter/material.dart';

class PostsNewPage extends StatefulWidget {

  @override
  _PostsNewPageState createState() => _PostsNewPageState();
}

class _PostsNewPageState extends State<PostsNewPage> {

  @override
  Widget build(BuildContext context) {
	return Scaffold(
	  appBar: AppBar(
		title: Text("PostsNew Page"),
	  ),
	  body: Center(
		child: Text('This is posts new page')
	  ),
	);
  }
}
```
5.`pages/posts_edit_page.dart`
```dart
import 'package:flutter/material.dart';

class PostsEditPage extends StatefulWidget {

  @override
  _PostsEditPageState createState() => _PostsEditPageState();
}

class _PostsEditPageState extends State<PostsEditPage> {

  @override
  Widget build(BuildContext context) {
	return Scaffold(
	  appBar: AppBar(
		title: Text("PostsEdit Page"),
	  ),
	  body: Center(
		child: Text('This is posts edit page')
	  ),
	);
  }
}
```
6.`pages/posts_show_page.dart`
```dart
import 'package:flutter/material.dart';

class PostsShowPage extends StatefulWidget {

  @override
  _PostsShowPageState createState() => _PostsShowPageState();
}

class _PostsShowPageState extends State<PostsShowPage> {

  @override
  Widget build(BuildContext context) {
	return Scaffold(
	  appBar: AppBar(
		title: Text("PostsShow Page"),
	  ),
	  body: Center(
		child: Text('This is posts show page')
	  ),
	);
  }
}
```
7.`pages/my_posts_page.dart`
```dart
import 'package:flutter/material.dart';

class MyPostsPage extends StatefulWidget {

  @override
  _MyPostsPageState createState() => _MyPostsPageState();
}

class _MyPostsPageState extends State<MyPostsPage> {

  @override
  Widget build(BuildContext context) {
	return Scaffold(
	  appBar: AppBar(
		title: Text("MyPosts Page"),
	  ),
	  body: Center(
		child: Text('This is myposts page')
	  ),
	);
  }
}
```

## Edit `lib/main.dart`

```dart
import 'package:flutter/material.dart';
import 'package:flutter_firebase_firestore_crud2a/pages/home_page.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
	return MaterialApp(
	  title: 'Flutter Demo',
	  theme: ThemeData(
		primarySwatch: Colors.blue,
	  ),
	  home: HomePage(),
	);
  }
}
```

## *Note about **"import"**:
There is two types of import
- 

Dart and I also prefer relative path
https://dart.dev/guides/language/effective-dart/usage#prefer-relative-paths-when-importing-libraries-within-your-own-packages-lib-directory

**But...**

### Quick fix of VS code not working well...
https://stackoverflow.com/questions/54121559/import-from-parent-directory-in-flutter