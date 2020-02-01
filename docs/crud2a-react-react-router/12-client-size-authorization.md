---
title: Step12 Client Side Authorization
---

1. If **current_user** visit other user's **PostsEditPage**
2. Redirect to **HomePage**
3. Use Context of react
- https://reactjs.org/docs/context.html
- https://alligator.io/react/manage-user-login-react-context/

### Step12-1 Make User context
Make `src/utils/userContext.js`:
```js
import React from "react";

const userContext = React.createContext({
  currentUser: {}
}); // Create a context object

export {
  userContext // Export it so it can be used by other Components
};
```

### Step12-2 Fetch current_user and Provide it

`src/App.js`
```js
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from 'axios';

import { getAccessToken, isAuthenticated } from "./utils/auth";
import { userContext } from './utils/userContext';
import PrivateRoute from './utils/PrivateRoute';

import Navbar from "./components/Navbar";

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PostsNewPage from './pages/PostsNewPage';
import PostsEditPage from './pages/PostsEditPage';
import PostsShowPage from './pages/PostsShowPage';
import MyPostsPage from './pages/MyPostsPage';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentUser: {}
    };
  }

  componentDidMount() {
    // Fetch current_user if user logged in.
    if (isAuthenticated) {
      // https://stackoverflow.com/questions/44245588/how-to-send-authorization-header-with-axios
      axios.get(`http://localhost:3000/me`, { 
        headers: {
          'Authorization': `Bearer ${getAccessToken()}`
        },
      })
        .then((res) => {
          const currentUser = res.data;
          this.setState({
            currentUser
          });
        })
    }
  }

  render() {
    const { currentUser } = this.state;

    return (
      /* Wrap Router by Context Provider */
      /* By doing this, you can access currentUser by using Consumer */
      <userContext.Provider value={currentUser}>
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
      </userContext.Provider>
    );
  }
}
```

### Step12-3 Consume(use) currentUser in PostsEditPage
```js
<userContext.Consumer>
  {(currentUser) => {
    if (currentUser.id !== post.user_id) {
      return (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
    return(
      <>
        <h1>Posts#Edit</h1>
        <div>{error && error.message}</div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input name="title" type="text" value={title} onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Content:
          <input name="content" type="text" value={content} onChange={this.handleInputChange} />
        </label>
        <br/>
        <input type="submit" value="Submit" disabled={isSubmitting} />
      </form>
      </>
    )
  }}
</userContext.Consumer>
```


`src/pages/PostsEditPage.js`:
```js
import React from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";

import { userContext } from '../utils/userContext';
import { getAccessToken } from "../utils/auth";

class PostsEditPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post: null,
      title: "",
      content: "",
      isSubmitting: false,
      isLoaded: false
    };
  }

  componentDidMount() {
    // https://reacttraining.com/react-router/web/api/Route/component
    const { id } = this.props.match.params

    axios.get(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        const post = res.data;
        const { title, content } = post;
        this.setState({
          isLoaded: true,
          post,
          title,
          content
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error
        });
      })
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      isSubmitting: true
    })

    const { id } = this.props.match.params
    const { title, content } = this.state;


    axios.put(`http://localhost:3000/posts/${id}/`, {
      title,
      content
    }, {
      headers: {
        'Authorization': `Bearer ${getAccessToken()}`
      },
    })
      .then((res) => {
        const post = res.data;
        // https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
        this.props.history.push(`/posts/${post.id}`);
      })
      .catch((error) => {
        this.setState({
          isSubmitting: false,
          error
        });
      })
  }

  render(){
    const { post, title, content, error, isSubmitting, isLoaded } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <userContext.Consumer>
          {(currentUser) => {
            if (currentUser.id !== post.user_id) {
              return (
                <Redirect
                  to={{
                    pathname: "/"
                  }}
                />
              )
            }
            return(
              <>
                <h1>Posts#Edit</h1>
                <div>{error && error.message}</div>
                <form onSubmit={this.handleSubmit}>
                <label>
                  Title:
                  <input name="title" type="text" value={title} onChange={this.handleInputChange} />
                </label>
                <br/>
                <label>
                  Content:
                  <input name="content" type="text" value={content} onChange={this.handleInputChange} />
                </label>
                <br/>
                <input type="submit" value="Submit" disabled={isSubmitting} />
              </form>
              </>
            )
          }}
        </userContext.Consumer>
      )
    }    
  }
}

export default PostsEditPage;
```