import { BiUser } from 'react-icons/bi'
import { MdKeyboardArrowLeft, MdOutlineLogout } from 'react-icons/md'
import { Link } from 'react-router-dom'

import './styles.css'

interface IUserInfoProps {
  profile?: string;
  name?: string;
}

export function SideBarIndex({ profile, name }: IUserInfoProps) {
	return (
		<div className="sidebar">
			<div className="sidebarContent">
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
				<div className="navigation">
					<Link to="">Cadernos de anotações</Link>
					<Link to="">Relatórios</Link>
					<Link to="">Corpo docente</Link>
				</div>
			</div>
			<div className="backButton">
				<MdKeyboardArrowLeft size={50} color="#fff" />
			</div>
		</div>
	)
}
