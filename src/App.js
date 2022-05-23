import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Project from './components/Project';
import Team from './components/Team';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (    
    <Router>
      <div>
          <Navbar />
        <div>
          <Routes>
            <Route path="/" exact element={ <Home /> } />
            <Route path="/services" exact element={ <Services /> } />
            <Route path="/teams" exact element={ <Team /> } />
            <Route path="/projects" exact element={ <Project /> } />
            <Route path="/contact-us" exact element={ <ContactUs /> } />
            <Route path="/about-us" exact element={ <AboutUs /> } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
