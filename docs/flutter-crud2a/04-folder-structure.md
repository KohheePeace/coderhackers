---
title: Step4 Folder Structure
---

Rename `lib/main.dart` to `lib/main_initial.dart`.

This file and comment is useful to understand code so I keep this.

And create `lib/main.dart`

## Create `lib/main.dart`
This is super basic flutter file.

1. html tag
2. styling
3. dart language
4. bootstrap (=> package:flutter/material.dart)

```dart
import 'package:flutter/material.dart';

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

/* HomePage StatefulWidget */
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

1. `pages/home_page.dart`
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
1. `pages/login_page.dart`
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
1. `pages/register_page.dart`

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
4. `pages/posts_new_page.dart`
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
5. `pages/posts_edit_page.dart`
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
6. `pages/posts_show_page.dart`
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
7. `pages/my_posts_page.dart`
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

