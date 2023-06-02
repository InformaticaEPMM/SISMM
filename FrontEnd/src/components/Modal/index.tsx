import './styles.css'

export const Modal = () => {
	return (
		<div className="modal">
			<div className="modalText">
				<h2>Reunião com grupo gestor</h2>
				<ul>
					<li>
						<p>Data:dd/mm/aa</p>
					</li>
					<li>
						<p>Local: Biblioteca MM</p>
					</li>
				</ul>
				<div className="modalInput">
					<p>Anotações</p>
					<input type="text" />
					<button>Salvar</button>
				</div>
			</div>
		</div>
	)
}
