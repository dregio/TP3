import React from 'react'
import "../public/css/index.css"
import Header from './components/layout/Header';
import logo from "../public/img/logo.png";

const navLinks = [
  {name: "Inicio",      url: "index.html#inicio",     className: "fa-solid fa-house"},
  {name: "Servicios",   url: "index.html#servicios",  className: "fa-solid fa-people-arrows"},
  {name: "Contacto",    url: "index.html#contacto",   className: "fa-solid fa-phone"},
  {name: "Tareas web",  url: "tareas.html",           className: "fa-solid fa-bars-progress"},
  {name: "Acerca de",   url: "index.html#acerca",     className: "fa-solid fa-circle-info"},
];

function App() {

  return (
    <>
      <Header 
      	imageURL= {logo}
        imageWidth="50"
        imageAlt= "Logo de RegioTasks"
        title= "RegioTasks"
        link="index.html"
        navLinks={navLinks}
      />
    </>
  )
}

export default App
