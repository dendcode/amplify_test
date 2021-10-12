import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <p style={{fontSize: 66, padding: 0, margin: 0}}>
          DendCode 네트워크에
        </p>
        <p style={{fontSize: 66, padding: 0, margin: 0, marginBottom: 50}}>
        접속하신 걸 환영합니다
        </p>
        <AmplifySignOut />
      </header>      
    </div>
  );
}

export default withAuthenticator(App);
