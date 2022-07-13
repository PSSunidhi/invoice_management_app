import './App.css';
import Header from './components/Header';
import TextButtons from './components/page';
import DataTable from './components/Datatable';
import React from 'react'
function App() {
  return (
    <div className="App">
      <Header/>
      <TextButtons/>
      <DataTable/>
      </div>
      )
  }
export default App;
