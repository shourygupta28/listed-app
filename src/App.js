import React from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import SignIn from './SignIn';
import Landing from './Landing';

function App() {
  return (
    < BrowserRouter >
      <div>
        <main>
        <Routes>
         <Route path="/" element={<SignIn/>} />
         <Route path="/dashboard" element={<Landing/>} />
        </Routes>
        </main>
      </div>
   </ BrowserRouter >
 );
}

export default App;
