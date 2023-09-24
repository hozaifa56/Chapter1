import './App.css'
import Lander from '../src/components/Lander';
import Home from '../src/components/Home';
import Aboutme from '../src/components/Aboutme';
import Services from './components/Services';
import ProjectsContainer from '../src/components/ProjectsContainer';
import Testimonials from './components/Testimonials';
import { ContactUs } from '../src/components/ContactUs';
import Footer from './components/Footer';


const projects = [
  { title: 'UPAAC Website', category: 'Frontend', description:' Website crafted during my internship at India Gandhi Planetarium.Integrated a user-friendly registration form via Jotform for efficient user engagement.', img:"/upaac.jpg", links:"https://upaac.netlify.app/" },
  { title: 'Todo List(ReactJS)', category: 'Frontend',description:'Developed a Todo List web application using React. Implemented Reacts capabilities for dynamic task handling and enhanced user experience.',img:'/todo.jpeg',links:'https://todolisthozaifa.netlify.app/' },
  { title: 'NewsMonkey', category: 'Frontend',description:'Developed a dynamic news website using HTML, CSS, JavaScript , ReactJS and NEWSAPI. Real-time news feed for staying updated with the latest breaking news.',img:'/newsmonkey.jpeg',links:'https://github.com/hozaifa56/react-cwh-hozaifa-newsapp' },
  { title: 'Lifestyle Gym', category: 'Frontend',description:'Developed a gym website using HTML, CSS, bootstrap and JavaScript. User-friendly design ensures easy navigation while providing features like secure logins and BMI assessment.',img:'/gym.jpeg',links:'https://gymhozaifa.netlify.app/' },
  { title: 'Diabetes Prediction Model', category: 'Data Science',description:'Developed a gym website using HTML, CSS, bootstrap and JavaScript. User-friendly design ensures easy navigation while providing features like secure logins and BMI assessment.',img:'/dp.png',links:'https://github.com/hozaifa56/diabetespredictionDSModel' },
  { title: 'Login Page', category: 'UI Design',description:'Designed a visually appealing login page.',img:'/mickeyloginpractice1.png',links:'https://www.figma.com/file/nqRNuLtw9BetSH547HCkkn/mickeylogin?type=design&node-id=0%3A1&mode=design&t=tDwFkRfNTyUf2cOn-1' },
  { title: 'Apple Wesbite', category: 'UI Design',description:'Redesigned Apple website that changes page when clicked on different tabs.',img:'/apple.png',links:'https://www.figma.com/file/tRz7snEjMlqaSE0cSzXaYd/Untitled?type=design&node-id=0%3A1&mode=design&t=kQbuVqBSdFscB94v-1' },
  
];
function App() {


  return (
    <div>
      <Lander/>
      <Home/>
      <Aboutme/>
      <Services/>
      <ProjectsContainer projects={projects} />
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App
