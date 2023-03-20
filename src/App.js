import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';


function App() {
  return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </Router>
      </>

  );
}

export default App;
