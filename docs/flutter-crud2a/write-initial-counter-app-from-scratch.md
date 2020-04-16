---
title: Step4 Write initial counter app from scratch
---

## Goal of this step
- Write initial `lib/main.dart` code from scratch.
- Understand initial code by writing.

## Flutter from web developers
https://flutter.dev/docs/get-started/flutter-for/web-devs

Before we start writing code, let's check this table.

This is a table to compare Web world and Flutter world.

The **purpose** of this table is **to use knowledge you already have to learn new thing.**

| Web                              | Flutter                                | What you need to learn                                                                                                                                                                                                        |
| :------------------------------- | :------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<div>`, `<table>`               | `Container()`,`Table()`                | [Flutter Widgets](https://api.flutter.dev/flutter/widgets/widgets-library.html), [Flutter Widget Livebook](https://flutter-widget.live/basics/introduction)                                                                   |
| `<div style="font-size: 24px;">` | `Text(style: TextStyle(fontSize: 24))` | [Flutter for web developers](https://flutter.dev/docs/get-started/flutter-for/web-devs)                                                                                                                                       |
| Bootstrap                        | package:flutter/material.dart          | [Material Components widgets](https://flutter.dev/docs/development/ui/widgets/material), [Official Gallery](https://flutter.github.io/samples/#/), [Flutter Widget Livebook](https://flutter-widget.live/basics/introduction) |
| javascript                       | dart                                   | [dart language tour](https://dart.dev/guides/language/language-tour)                                                                                                                                                          |

- At first you may feel flutter code is difficult.
- But to see this table you can find the similarity of web and flutter
- I hope this table will reduce the difficulty of learning flutter!
- <mark>You need a time to get used to flutter code as it took time to remember HTML, CSS, Bootstrap and Javascript! </mark>

## Let's get started!

This is initial `lib/main.dart` code.

From now on, we will make this file step by step.

```dart title="lib/main.dart"
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.display1,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
```

## Rename `lib/main.dart` to `lib/initial_main.dart`.
I leave initial file for reference. There are a lot of useful comments.
And make empty `lib/main.dart`.

## Step 1 Hello World

### Step1-1 dart `main()` function
```dart
void main() => runApp(MyApp());
```
> **Every app must have a top-level main() function**, which serves as the entrypoint to the app. **The main() function returns void**

https://dart.dev/guides/language/language-tour#the-main-function

### Step1-2 StatelessWidget
1. Make `MyApp` **StatelessWidget** class by VS code auto complete
2. Add `Text()` (Check Container() has `child` by hovering)

https://flutter.dev/docs/development/ui/widgets-intro#hello-world

```dart title="lib/main.dart"
import 'package:flutter/widgets.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text(
        'Hello, world!',
        textDirection: TextDirection.ltr,
      ),
    );
  }
}
```
> If you are using a material widget component, like Scaffold, Material, you don't need to specify textDirection in your Text widget... 

https://stackoverflow.com/questions/56122888/flutter-no-directionality-widget-found


## Step2 Use `MaterialApp()`

```dart title="lib/main.dart"
<!-- highlight-next-line -->
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    <!-- highlight-start -->
    return  MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text('Hello World!')
        ),
      ),
    );
    <!-- highlight-end -->
  }
}
```

#### `MaterialApp()`:
https://api.flutter.dev/flutter/material/MaterialApp-class.html

As I mentioned at first table, material package is something like Bootstrap.

You can check widgets catalog here
https://flutter.dev/docs/development/ui/widgets/material

#### `theme`:
You can choose your app's primary color like this. 

#### `title`:
I think `title` property is almost **useless** in mobile
https://stackoverflow.com/questions/50615006/flutter-where-is-the-title-of-material-app-used

## Step3 Make StatefulWidget: `MyHomePage`

In this step, let's extract this `Scaffold` part to another class.

```dart
home: Scaffold(
  appBar: AppBar(title: Text('Hello World!')),
  floatingActionButton: FloatingActionButton(
    onPressed: () {
      // Add your onPressed code here!
    },
    child: Icon(Icons.navigation),
    backgroundColor: Colors.green,
  ),
),
```

1. Make **StatefulWidget** by VS code auto completion
2. Pass `MyHomePage()` to `home:`

```dart title="lib/main.dart"
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      <!-- highlight-next-line -->
      home: MyHomePage()
    );
  }
}

<!-- highlight-start -->
class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Hello World!')
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // Add your onPressed code here!
        },
        child: Icon(Icons.navigation),
        backgroundColor: Colors.green,
      ),
    );
  }
}
<!-- highlight-end -->
```

If you want to dive into stateful widget **syntax**, read the below links.

But I think it is ok not to understand perfectly right now. Just following code auto completion is enough.
- https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html
- *[Why are stateful widgets defined as two classes in flutter?](https://stackoverflow.com/questions/50612237/why-are-stateful-widgets-defined-as-two-classes-in-flutter)


## Step4 Pass props to `MyHomePage`
In this step, we are going to learn

- how to pass down props to `MyHomePage`

```dart {13,19,20,31} title="lib/main.dart"
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page')
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title)
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // Add your onPressed code here!
        },
        child: Icon(Icons.navigation),
        backgroundColor: Colors.green,
      ),
    );
  }
}
```

#### `final`

> Once assigned a value, a final variable's value cannot be changed

[What is the difference between the “const” and “final” keywords in Dart?](https://stackoverflow.com/questions/50431055/what-is-the-difference-between-the-const-and-final-keywords-in-dart)


Please focus on the flow now!

**But If you want to dive into these code, check the below links!**

- [What are Keys in the Stateless widgets class?](https://stackoverflow.com/questions/50080860/what-are-keys-in-the-stateless-widgets-class)
- [You can skip to declare keys but...](https://github.com/flutter/flutter/issues/3868#issuecomment-218642695)
- [Stakoverflow question about super](https://stackoverflow.com/questions/52056035/flutter-myhomepagekey-key-this-title-superkey-key-pls-any-one-explain)

## Step5 `setState()` and Layout
In this step, we are going to learn
- How to change state by `setState()`
- How to use `Row` and `Column`

---

1. Declare initial State
2. Edit `floatingActionButton`
3. Learn how to change state by using `setState()`
4. Show state in body
5. `Row` and `Column`

```dart title="lib/main.dart"
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page')
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  <!-- highlight-next-line -->
  int _counter = 0;
  
  <!-- highlight-start -->
  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }
  <!-- highlight-end -->

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title)
      ),
      <!-- highlight-start -->
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text('You have clicked the button this many times:'),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
      <!-- highlight-end -->
    );
  }
}
```

### `_` underscore variable in dart
> It's not just a naming convention. Underscore fields, classes and methods will only be available in the .dart file where they are defined.

[What does Underscore “_” before variable name mean for Flutter](https://stackoverflow.com/questions/53142171/what-does-underscore-before-variable-name-mean-for-flutter)

> Privacy in Dart exists at the library, rather than the class level.

https://stackoverflow.com/questions/17488611/how-to-create-private-variables-in-dart/17488825


### Row and Column
![row-and-column](https://flutter.dev/assets/ui/layout/pavlova-diagram-8b3d410640d9b3575d69c0724203c5dff6814fdd1a57546a5f65f98254077a92.png)
Image from: https://flutter.dev/docs/development/ui/layout#lay-out-multiple-widgets-vertically-and-horizontally

### Align of Row and Column
![Aligning widgets row](https://flutter.dev/assets/ui/layout/row-diagram-ad51795e19e3e1d412815b287c9caa694ad357892e3ab8b3ef1da0c4c6e011db.png)
![Aligning widgets column](https://flutter.dev/assets/ui/layout/column-diagram-4e2ce8e33c32a09d090280fb7b2925baaf58f6de7876a551c207ab904e2fafc6.png)
Image from: https://flutter.dev/docs/development/ui/layout#aligning-widgets

### String interpolation
`$variableName` (or `${expression}`)

For example

```dart
Text('$var');

or

Text('${user.name}');
```

https://dart.dev/guides/language/language-tour#strings


### Theme
You can access theme by using

```dart
Theme.of(context)
```

//https://flutter.dev/docs/cookbook/design/themes#using-a-theme

#### textTheme

https://api.flutter.dev/flutter/material/TextTheme-class.html

## Finish!

Okay, we successfully re-created initial counter app!

I hope you've learned the fundamental of flutter!

## Refs
https://flutterbyexample.com/dissecting-the-counter-app
