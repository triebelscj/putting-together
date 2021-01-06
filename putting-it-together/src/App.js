import React from 'react'
import './App.css';
import PersonCard from "./components/PersonCard"

function App() {
  return (
    <div className="App">
      <PersonCard firstName='Jane' lastName='Smith' age="" hairColor="yellow" />
      <PersonCard firstName='John' lastName='Doe' age="" hairColor="yellow" />
    </div>
  );
}

export default App;
