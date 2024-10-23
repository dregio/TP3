import React from "react";

function ButtonCards() {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src="img/serv-soft.png"
				alt="Software de gestión de tareas"
			/>
			<div className="card-body">
				<h5 className="card-title">Software de gestión de tareas</h5>
				<p className="card-text">
					Con <span className="fuente-rt">RegioTasks</span> para la web, para el
					celular y para Windows, libere el máximo potencial de su talento.
				</p>
				<a href="#" className="btn btn-primary">
					Más información
				</a>
			</div>
		</div>
	);
}

export default ButtonCards;
