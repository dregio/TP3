import React from 'react'
import "../public/css/index.css"
import Header from './components/layout/Header';
import logo from "../public/img/logo.png";
import ButtonCards from './components/ButtonCards';

const navLinks = [
  {name: "Inicio",      url: "index.html#inicio",     className: "fa-solid fa-house"},
  {name: "Servicios",   url: "index.html#servicios",  className: "fa-solid fa-people-arrows"},
  {name: "Contacto",    url: "index.html#contacto",   className: "fa-solid fa-phone"},
  {name: "Tareas web",  url: "tareas.html",           className: "fa-solid fa-bars-progress"},
  {name: "Acerca de",   url: "index.html#acerca",     className: "fa-solid fa-circle-info"},
];

const MAS_INFO = "Más información";

const servicios = [
	{ 	cardImgSrc	: "img/serv-soft.png", 
		cardImgAlt	: "Software de gestión de tareas", 
		cardTitle 	: "Software de gestión de tareas", 
		cardText 	: 'Con RegioTasks para la web, para el celular y para Windows, libere el máximo potencial de su talento.', 
		btnLink 	: "#", 
		btnText 	: MAS_INFO,
	},
	{	cardImgSrc	: "img/serv-tareas.png", 
		cardImgAlt	: "Capacitaciones en gestión de tareas", 
		cardTitle 	: "Capacitaciones en gestión de tareas", 
		cardText 	: 'Obtenga para su equipo las mejores prácticas para el manejo de tiempos, tareas y proyectos.', 
		btnLink 	: "#", 
		btnText 	: MAS_INFO,
	},
	{	cardImgSrc	: "img/serv-tiempos.png",
		cardImgAlt	: "Consultoría en gestión de tiempos",
		cardTitle 	: "Consultoría en gestión de tiempos",
		cardText 	: '¿Cree que su equipo podría rendir mejor? Le daremos pautas para maximizar su desempeño.',
		btnLink 	: "#",
		btnText		: MAS_INFO,
	},
	{	cardImgSrc	: "img/serv-proyectos.png",
		cardImgAlt	: "Gestión de proyectos (outsourcing)",
		cardTitle	: "Gestión de proyectos (outsourcing)",
		cardText	: 'Le brindaremos los mejores profesionales para planificar y desarrollar su proyecto con éxito.',
		btnLink		: "#",
		btnText		: MAS_INFO,
	},
];

function App() {

	return (
		<>
			<Header
				imageURL={logo}
				imageWidth={50}
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
	            <h2>Servicios</h2>
				<ButtonCards
					cardsData= {servicios}
				/>
			</section>
		</>
	);
}

export default App
