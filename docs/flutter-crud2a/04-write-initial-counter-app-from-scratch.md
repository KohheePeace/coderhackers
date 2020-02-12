---
title: Step4 Write initial counter app from scratch
---

## Goal of this step
- Write initial `lib/main.dart` code from scratch.
- Understand code by writing.

Refs: https://flutterbyexample.com/dissecting-the-counter-app

## Flutter from web developers
https://flutter.dev/docs/get-started/flutter-for/web-devs

This is a table to compare Web world and Flutter world.

| Web                              | Flutter                                | What you need to learn                                                                                                                                      |
| :------------------------------- | :------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<div>`, `<table>`               | `Text()`,`Table()`                     | [Flutter Widgets](https://api.flutter.dev/flutter/widgets/widgets-library.html), [Flutter Widget Livebook](https://flutter-widget.live/basics/introduction) |
| `<div style="font-size: 24px;">` | `Text(style: TextStyle(fontSize: 24))` | [Flutter for web developers](https://flutter.dev/docs/get-started/flutter-for/web-devs)                                                                      |
| Bootstrap                        | package:flutter/material.dart          | [Material Components widgets](https://flutter.dev/docs/development/ui/widgets/material), [Official Gallery](https://flutter.github.io/samples/#/), [Flutter Widget Livebook](https://flutter-widget.live/basics/introduction) |
| javascript                       | dart                                   | [dart language tour](https://dart.dev/guides/language/language-tour)|

- At first you will feel flutter code is difficult.
- But to see this table you can find the similarity of web and flutter
- I hope this table will reduce the difficulty of flutter!
- After that what you need to do is just writing a lot of flutter code!

## Let's get started!

This is initial `lib/main.dart` code.
#### `lib/main.dart`
```dart
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

### Rename `lib/main.dart` to `lib/initial_main.dart`.
And make empty `lib/main.dart`.

### Step 1 Write minimal flutter app
1. Make **StatelessWidget** by VS code auto complete
2. Add `Text()` (Check Container() has `child` by hovering)

#### `lib/main.dart`
```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text('hello!!!'),
    );
  }
}
```

### Step2 Use `MaterialApp()`
1. Use `MaterialApp()`
https://api.flutter.dev/flutter/material/MaterialApp-class.html

#### `lib/main.dart`
```dart
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
      home: Scaffold(
        appBar: AppBar(
          title: Text('Hello!')
        ),
      ),
    );
  }
}
```

### Step3 Make StatefulWidget: `MyHomePage`
1. Make **StatefulWidget** by VS code auto complete
2. Pass `MyHomePage()` to `home:`

#### `lib/main.dart`
```dart
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
      home: MyHomePage()
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Hello!')
      ),
    );
  }
}
```

### Step4 Pass props to `MyHomePage`
1. Pass props to `MyHomePage`
2. Check dart constructor syntax

- [What are Keys in the Stateless widgets class?](https://stackoverflow.com/questions/50080860/what-are-keys-in-the-stateless-widgets-class)
- [You can skip to declare keys but...](https://github.com/flutter/flutter/issues/3868#issuecomment-218642695)
- [Stakoverflow question about super](https://stackoverflow.com/questions/52056035/flutter-myhomepagekey-key-this-title-superkey-key-pls-any-one-explain)


#### `lib/main.dart`
```dart {13,19,20,31}
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
    );
  }
}
```

### Step5 Initial state and setState
1. Declare initial State
2. Add `floatingActionButton`
3. Learn how to change state by using `setState()`

#### `lib/main.dart`
```dart {27,29-34,42-46}
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
  // https://stackoverflow.com/questions/53142171/what-does-underscore-before-variable-name-mean-for-flutter/53142242
  int _counter = 0;
  
  void _incrementCounter() {
    setState(() {
      _counter++;
      print(_counter);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title)
      ),
      floatingActionButton: FloatingActionButton( // https://api.flutter.dev/flutter/material/FloatingActionButton-class.html
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}
```

### Step6 Show state in screen
#### `lib/main.dart`
```dart
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
  int _counter = 0;
  
  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title)
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text('You have clicked the button this many times:'),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.display1, //https://flutter.dev/docs/cookbook/design/themes#using-a-theme
            )
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}
```