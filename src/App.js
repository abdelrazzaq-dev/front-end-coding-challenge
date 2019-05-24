import React from 'react';
import { RepositoryProvider } from "./Contexts/RepositoryContext";
import RepositoryList from './Components/RepositoryList/RepositoryList'


function App() {
  return (
    <RepositoryProvider>
        <RepositoryList/>
    </RepositoryProvider>
  );
}

export default App;
