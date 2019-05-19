import React from 'react';
import './App.scss';
import { RepositoryProvider } from "./Contexts/RepositoryContext";

function App() {
  return (
    <RepositoryProvider>
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    </RepositoryProvider>
  );
}

export default App;
