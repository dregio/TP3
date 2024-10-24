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
				imageURL={logo}
				imageWidth="50"
				imageAlt="Logo de RegioTasks"
				title="RegioTasks"
				link="index.html"
				navLinks={navLinks}
			/>
			<section id="inicio">
				<div>
					<h2>
						Mejore el rendimiento de su equipo con{" "} <span className="fuente-rt">RegioTasks</span>
					</h2>
					<img
						id="img-portada"
						alt="Captura de pantalla del software RegioTasks"
						src="img/portada-ejemplo.png"
					></img>
				</div>
				{/* <TitledImage title= 'Mejore el rendimiento de su equipo con <span class="fuente-rt">RegioTasks</span>'
      	imageURL= "img/portada-ejemplo.png"
        imageAlt="Captura de pantalla del software RegioTasks"
        /> */}
			</section>
			<section id="servicios">
			</section>
		</>
	);
}

export default App
