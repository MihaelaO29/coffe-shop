import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Menu from './pages/menu/Menu';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/footer';
import img3 from './images/img3.webp';


function App() {

  return (
    <Router>
      <div className='app'
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
