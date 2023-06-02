import { MdKeyboardArrowLeft } from 'react-icons/md'
import { UserProf } from './User'
import { Link } from 'react-router-dom'

import './styles.css'

/* interface IUserInfoProps {
  profile?: string;
  name?: string;
}
 */
export function SideBarIndex(/* { profile, name }: IUserInfoProps */) {
	return (
		<div className="sidebar">
			<div className="sidebarContent">
				<UserProf />
				<div className="navigation">
					<Link to="/notions">Cadernos de anotações</Link>
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
