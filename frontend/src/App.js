import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import ListCategories from './components/ListCategories';
import PostsList from './components/PostsList';
import PostDetails from './components/PostDetails';
import EditPost from './components/EditPost';
import PostNew from './components/PostNew';

class App extends Component {

  render() {
    return (
      <div className="App">
          <div className="row nav-wrapper"><Nav /></div>
        <div className="container">
          <div className="row">
              <div className="col-md-12">
                <div className="row banner">
                  <Link to="/posts/new" className="btn btn-primary">Add Post</Link>
                  <span className="summary-links pull-right">
                    <Link to="/">
                    <span><i className="fa fa-user-plus" aria-hidden="true"></i> Sign Up</span>
                    </Link>
                    <Link to="/">
                    <span><i className="fa fa-sign-in" aria-hidden="true"></i> Log In</span>
                    </Link>
                  </span>
                <hr />
              </div>
              <div className="col-md-2 categories-bar">
                  <Route component={ListCategories} />
              </div>

              <div className="col-xs-12 col-md-9"> 
                    <Switch>
                      <Route exact path="/" component={PostsList}/>
                      <Route exact path="/posts" component={PostsList}/>
                      <Route exact path="/posts/new" component={PostNew} />
                      <Route exact path="/posts/:id" component={PostDetails} />
                      <Route exact path="/posts/edit/:id" component={EditPost} />   
                    </Switch>
                </div>
              </div>
            </div>
        </div>
    </div>//App
    );
  }
}

export default App;
