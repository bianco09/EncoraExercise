import logo from './logo.svg';
import './App.css';


import Home from './Home';
import Login from './Login';
import { useState } from 'react';

function App() {

  const [isAutheticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      {!isAutheticated ? (
        <Login setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
