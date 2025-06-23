import Navbar from './Components/Navbar';
import ScrollProgress from './Components/ScrollProgress';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contacts';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
