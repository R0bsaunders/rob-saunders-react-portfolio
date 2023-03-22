import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import { HashRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';


function App() {
  return (
        <HashRouter>
          <NavBar />
          <Routes>
            <Route path="/rob-saunders-react-portfolio/" element={<HomePage />} />
            <Route path="/rob-saunders-react-portfolio/projects" element={<ProjectsPage />} />
            <Route path="/rob-saunders-react-portfolio/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </HashRouter>

  );
}

export default App;
