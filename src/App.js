import './App.css';
import About from './components/About';
import Homescreen from './components/Homescreen';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
   
    <div className="App overflow-hidden bg-gray-100">
     <Homescreen/>
     <About/>
     <Resume/>
     <Projects/>
     <Contact/>
     <Footer/>
   
    </div>
  
  );
}

export default App;
