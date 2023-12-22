import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Projects } from './components/myProjects/projects';
import { Contact } from './components/contact/contact';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'

function App() {
  return (
    <>
      <Navbar/>

      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
