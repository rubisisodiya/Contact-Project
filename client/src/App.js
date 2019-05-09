import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/layout/Home'
import ContactList from './components/contacts/List'
import ContactNew from './components/contacts/New'
import ContactShow from './components/contacts/Show'
import ContactEdit from './components/contacts/Edit'

import StoriesList from './components/story/storyList'
import StoriesNew from './components/story/Newstory'

import UserRegister from './components/authentication/Register'
import UserLogin from './components/authentication/Login'
import axios from './config/axios'

console.log(axios.defaults)

class App extends Component {
  constructor(props){
    super(props) 
    this.state = {
      isAuthenticated: !!localStorage.getItem('token'),
    }
    this.handleIsAuthenticated = this.handleIsAuthenticated.bind(this)
  }

  handleIsAuthenticated(bool) {
    this.setState(() => ({
      isAuthenticated: bool
    }))
  }

  render() {
    return (
      <BrowserRouter>
      <div>
          <header className="main-header">
    <h1>Model blog ui</h1>
</header>
</div>     
        	<div>
          <nav className="main-nav">
    <ul>
        <li>
      <Link to="/"><i className="fa fa-home"></i> Home </Link> 
      </li>
      <li>
      <Link to="/stories"><i className="fa fa-home">Story</i>  </Link> 
      </li>
      <li>
      <Link to="/contacts"><i className="fa fa-envelope"></i>Contacts</Link>
      </li>
      <li>
      {
            this.state.isAuthenticated && <Link to="/users/logout"><i className="fa fa-envelope"></i>Logout </Link>
            
            
          }</li>
      
      <li>
      {
           ! this.state.isAuthenticated && (
            <div className="container">
            <button className="btn btn-outline-success my-2 my-sm-0" type="register">
            <Link to="/users/register"> Register</Link></button>
            <button className="btn btn-outline-success my-2 my-sm-0" type="login">
            <Link to="/users/login"> Login</Link></button>
            
            </div>

           )
            }
            </li>
        
      </ul>
      
    </nav>
  </div>
  
  

        
       
          
          
          <Switch> 
            <Route path="/" component={Home} exact={true} />
            <Route path="/stories" component={ StoriesList} exact={true} />
            <Route path="/stories/new" component={StoriesNew} exact={true} />
            <Route path="/contacts" component={ContactList} exact={true} />
            <Route path="/contacts/new" component={ContactNew} exact={true} />
            <Route path="/contacts/edit/:id" component={ContactEdit} exact={true} />
            <Route path="/contacts/:id" component={ContactShow} />

            <Route path="/users/register" component={UserRegister} />
            <Route path="/users/login" render={() => <UserLogin  handleIsAuthenticated={this.handleIsAuthenticated}/> } /> 
            <Route path="/users/logout" component={() => {
                localStorage.clear() 
                axios.defaults.headers['x-auth'] = null 
                return (
                  <div>
                    <p> You have successfully logged out</p>
                  </div>
                )
                }} />
          </Switch>
        
      </BrowserRouter>
    );
  }
}

export default App;
