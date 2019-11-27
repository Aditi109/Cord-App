import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Add from './components/add.component';
import Edit from './components/edit.component';
import Show from './components/show.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Show</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/add'} className="nav-link">Add</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/edit/:id'} className="nav-link">Edit</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <Switch>
              <Route exact path='/add' component={ Add } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/' component={ Show } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;