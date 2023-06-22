import React from 'react';
import './App.css';
import HomeScreen from "./Component/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';


function App() {

  const user =null;
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
    
          <Routes>

            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Routes>
        
          
        )}
      </Router>
    </div>
  );
}

export default App;
