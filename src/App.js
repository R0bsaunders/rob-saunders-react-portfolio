import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';


function App() {
  return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
          <Footer />
        </Router>
      </>

  );
}

export default App;
