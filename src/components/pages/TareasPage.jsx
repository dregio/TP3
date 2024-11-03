import React from 'react'
import Page from '../layout/Page';

function TareasPage() {

	return (
		<>
			<Page>
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
					{/* <TitledImage 
							title= 'Mejore el rendimiento de su equipo con <span class="fuente-rt">RegioTasks</span>'
							imageURL= "img/portada-ejemplo.png"
							imageAlt="Captura de pantalla del software RegioTasks"
					/> */}
				</section>
		    </Page>
		</>
	);
}

export default TareasPage;
