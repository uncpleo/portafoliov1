import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Technologies from './components/Technologies.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Semana from './pages/Semana.jsx';
import Weeks from './components/Weeks.jsx';
import Text from './pages/Text.jsx';
import Projects from './components/proyectos_semana/Projects.jsx';

const App = () => {
  return (
    <Router>
      <div className='overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-300 seleccion:text-cyan-900'>
        <div className="fixed top-0 -z-10 h-full w-full"></div>
        <div className="relative h-full w-full bg-slate-950">
          <div className="relative bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className='container mx-auto px-8'>
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Technologies />
                  <Experience />
                  <Weeks />
                  <Contact />
                </>
              } />
              <Route path="/semana/:id" element={
                  <>
                  <Semana />
                  <Text />
                  <Projects />
                  <Contact />
                </>
              } />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;






