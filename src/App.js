import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import './App.css';
import { auth } from './components/Firebase/FirebaseUtils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const unsubscribeFromAuth = () => null;

  useEffect(() => {
    auth.onAuthStateChanged(user => setCurrentUser(user))

    return () => unsubscribeFromAuth();
  },[currentUser])

  

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
