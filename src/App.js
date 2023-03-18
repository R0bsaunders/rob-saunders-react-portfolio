import NavBar from './components/NavBar/NavBar';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Router, Routes } from 'react-router-dom';


function App() {
  return (
      <>
        <NavBar />
        <HomePage />
      </>

  );
}

export default App;
