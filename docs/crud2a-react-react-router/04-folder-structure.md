---
# id: doc1
title: Step4 folder structure
sidebar_label: Step4 folder structure
---

Refs:
- https://reactjs.org/docs/faq-structure.html#grouping-by-file-type
- https://developer.okta.com/blog/2018/07/10/build-a-basic-crud-app-with-node-and-react
- https://medium.com/p/ac9a754df5eb/responses/show

Make folders:
1. `pages`
2. `components`
3. `utils`

### pages
Create pages in advance.
1. `HomePage.js`
2. `LoginPage.js`
3. `SignUpPage.js`
4. `PostsNewPage.js`
5. `PostsEditPage.js`
6. `PostsShowPage.js`
7. `MyPostsPage.js`

#### `HomePage.js`
```js
import React from "react";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>HomePage</h1>
      </div>
    )
  }
}
```

#### `LoginPage.js`
```js
import React from "react";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>LoginPage</h1>
      </div>
    )
  }
}
```

#### `SignUpPage.js`
```js
import React from "react";

export default class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>SignUpPage</h1>
      </div>
    )
  }
}
```

#### `PostsNewPage.js`
```js
import React from "react";

export default class PostsNewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>PostsNewPage</h1>
      </div>
    )
  }
}
```

#### `PostsEditPage.js`
```js
import React from "react";

export default class PostsEditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>PostsEditPage</h1>
      </div>
    )
  }
}
```

#### `PostsShowPage.js`
```js
import React from "react";

export default class PostsShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>PostsShowPage</h1>
      </div>
    )
  }
}
```

#### `MyPostsPage.js`
```js
import React from "react";

export default class MyPostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>MyPostsPage</h1>
      </div>
    )
  }
}
```

### components
#### `Navbar.js`:
```js
import React from "react";
import { isAuthenticated, logout } from "../utils/auth";
import { Link } from "react-router-dom";

// https://reactjs.org/docs/components-and-props.html
export default function Navbar() {
  // https://reactjs.org/docs/handling-events.html
  function onClickLogout(){
    logout();
    window.location.href = '/';
  }

  // https://reactjs.org/docs/conditional-rendering.html
  if (isAuthenticated) {
    return(
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts/new">Post New</Link>
          </li>
          <li>
            <Link to="/my-posts">My Posts</Link>
          </li>
          <li>
            <button onClick={onClickLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    )
  } else {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign_up">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
```

### utils
Create `auth.js` and `PrivateRoute.js`

#### `auth.js`:
```js
// https://stackoverflow.com/questions/44133536/is-it-safe-to-store-a-jwt-in-localstorage-with-reactjs
import Cookies from 'js-cookie'

export const getAccessToken = () => Cookies.get('accessToken');
export const isAuthenticated = !!Cookies.get('accessToken');

export const logout = () => {
  Cookies.remove('accessToken');
}

export const setToken = (accessToken) => {
  Cookies.set('accessToken', accessToken);
}
```

#### `PrivateRoute.js`:
- Almost same code with example.
- Use custom `isAuthenticated`


```js
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./auth"; 

export default function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
```

### Edit `App.js`

`src/App.js`
```js
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/sign_up">
              <SignUpPage />
            </Route>

            <Route path="/login">
              <LoginPage />
            </Route>

            {/* https://stackoverflow.com/questions/46621334/react-react-router-dom-two-route-conflict */}
            {/* Order is important */}
            <PrivateRoute path="/posts/new">
              <PostsNewPage />
            </PrivateRoute>

            <Route exact path="/posts/:id">
              <PostsShowPage />
            </Route>

            <PrivateRoute path="/my-posts">
              <MyPostsPage />
            </PrivateRoute>

            <PrivateRoute path="/posts/:id/edit">
              <PostsEditPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
}
```

### Yarn start with 3001 port
We want to use 3000 for api.
https://github.com/facebook/create-react-app/issues/3513
```bash
PORT=3001 yarn start
```