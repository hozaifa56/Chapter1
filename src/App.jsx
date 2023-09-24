import './App.css'
import Lander from '../src/components/Lander';
import Home from '../src/components/Home';
import Aboutme from '../src/components/Aboutme';
import Services from './components/Services';
import ProjectsContainer from '../src/components/ProjectsContainer';

const projects = [
  { title: 'Project 1', category: 'frontend' },
  { title: 'Project 2', category: 'backend' },
  // Add more project data
];
function App() {


  return (
    <div>
      <Lander/>
      <Home/>
      <Aboutme/>
      <Services/>
      <ProjectsContainer projects={projects} />
    </div>
  )
}

export default App
