import { BiUser } from 'react-icons/bi'
import { MdOutlineLogout } from 'react-icons/md'

import './styles.css'

export function UserProf() {
	return (
		<div className="userProf">
			<div className="imageArea">
				<BiUser size={30} color="#00873B" />
			</div>
			<div>
				<p>Nome de usuário</p>
				<button>
					<MdOutlineLogout /> Sair
				</button>
			</div>
		</div>
	)
}
