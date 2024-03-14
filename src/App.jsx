import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Projects } from './components/myProjects/projects'; 
import { Contact } from './components/contact/contact';
import { References } from './components/references/references';
import { Badges } from './components/badges/badges';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useTranslation } from 'react-i18next';
import i18n from './i18n.js';
import './App.css';
import React, { useState } from 'react';

function App() {
  const { t } = useTranslation(['traduction']);
  const [lngCv, setLngCv] = useState(0);

  const changeLanguage = (lng) => {
    (lngCv === 0) ? setLngCv(1) : setLngCv(0)
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <Navbar t={t} changeLanguage={changeLanguage}/>
      <Header t={t} lngCv={lngCv}/>
      <About t={t}/>
      <Badges t={t}/>
      {/*<Projects t={t}/>
      <References t={t}/>
  <Contact t={t}/>*/}
    </>
  )
}

export default App
