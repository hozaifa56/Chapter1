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
  { title: 'Student Data Analysis Dashboard (PowerBI)', category: 'Data Visualization', description:' I recently analyzed a student dataset with 300 records using Power BI. I cleaned and transformed the data, created new DAX-based columns and measures, and built a comprehensive dashboard.', img:"/std.jpg", links:"https://www.linkedin.com/posts/hozaifa-shakeel56_powerbi-excel-dataanalysis-activity-7215889777877770240-mmrQ?utm_source=share&utm_medium=member_desktop" },
  { title: 'Movie Analysis Dashboard (PowerBI)', category: 'Data Visualization', description:' Imported the Excel file Bollywood Movies dataset into Power BI. Removed Unwanted Columns. Created new columns like Profit using DAX. Cleaned the data to handle missing values and outliers. Built a dashboard with Cards, Charts, Slicers, and Filters.', img:"/pbi1.jpg", links:"https://www.linkedin.com/feed/update/urn:li:activity:7211301040359403520/" },
  { title: 'Mental Health QnA Chatbot', category: 'Data Science', description:' Developed an interactive mental health Q&A system using advanced prompt engineering to create a comprehensive JSON knowledge base, and implemented a rule-based Python chatbot with an intuitive Tkinter interface for enhanced user experience.', img:"/cb.jpg", links:"https://github.com/hozaifa56/Mentalhealth-chatbot" },
  { title: 'UPAAC Website', category: 'Frontend', description:' Website crafted during my internship at India Gandhi Planetarium.Integrated a user-friendly registration form via Jotform for efficient user engagement.', img:"/upaac.jpg", links:"https://upaac.netlify.app/" },
  { title: 'Arduino based Star Tracker', category: 'Robotics',description:'Made a star tracker using arduino,RTC, Stepper motors and Gyroscope sensor.Amalgamated robotics with astronomy to develop a cost-effective prototype for a computerized mount.Achieved tracking accuracy upto 1degree error.',img:'/st.jpg',links:'/' },
  { title: 'Todo List(ReactJS)', category: 'Frontend',description:'Developed a Todo List web application using React. Implemented Reacts capabilities for dynamic task handling and enhanced user experience.',img:'/todo.jpeg',links:'https://todolisthozaifa.netlify.app/' },
  { title: 'NewsMonkey', category: 'Frontend',description:'Developed a dynamic news website using HTML, CSS, JavaScript , ReactJS and NEWSAPI. Real-time news feed for staying updated with the latest breaking news.',img:'/newsmonkey.jpeg',links:'https://github.com/hozaifa56/react-cwh-hozaifa-newsapp' },
  { title: 'Lifestyle Gym', category: 'Frontend',description:'Developed a gym website using HTML, CSS, bootstrap and JavaScript. User-friendly design ensures easy navigation while providing features like secure logins and BMI assessment.',img:'/gym.jpeg',links:'https://gymhozaifa.netlify.app/' },
  { title: 'Diabetes Prediction Model', category: 'Data Science',description:'Developed a gym website using HTML, CSS, bootstrap and JavaScript. User-friendly design ensures easy navigation while providing features like secure logins and BMI assessment.',img:'/dp.png',links:'https://github.com/hozaifa56/diabetespredictionDSModel' },
  { title: 'Login Page', category: 'UI Design',description:'Designed a visually appealing login page.',img:'/mickeyloginpractice1.png',links:'https://www.figma.com/file/nqRNuLtw9BetSH547HCkkn/mickeylogin?type=design&node-id=0%3A1&mode=design&t=tDwFkRfNTyUf2cOn-1' },
  { title: 'Apple Wesbite', category: 'UI Design',description:'Redesigned Apple website that changes page when clicked on different tabs.',img:'/apple.png',links:'https://www.figma.com/file/tRz7snEjMlqaSE0cSzXaYd/Untitled?type=design&node-id=0%3A1&mode=design&t=kQbuVqBSdFscB94v-1' },
  { title: 'Know Weather With Hozaifa', category: 'Frontend',description:'Experience weather forecasts like never before with our intuitive weather app. Stay ahead of the elements with real-time updates and insightful weather data.',img:'/weather.jpeg',links:'https://knowweatherwithhozaifa.netlify.app/' }
  
  
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
