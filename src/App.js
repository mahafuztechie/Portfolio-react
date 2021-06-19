import './App.css';
import About from './components/About';
import Homescreen from './components/Homescreen';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App overflow-hidden">
     <Homescreen/>
     <About/>
     <Resume/>
     <Projects/>
   
    </div>
  );
}

export default App;
