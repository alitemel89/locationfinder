import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import SigninPage from './pages/SigninPage';

function App() {


  return (
    <AuthProvider>
    <div>
      <Header currentUser />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/signin" component={SigninPage} />
      </Switch>
    </div>
    </AuthProvider>
  );
}

export default App;
