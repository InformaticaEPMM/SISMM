import { Link } from 'react-router-dom'
import { AccessibilityHeader } from './Accessibility'
import { LogosHeader } from './Logos'

import { FaCalendarAlt } from 'react-icons/fa'

import './styles.css'

interface IHeaderProps {
  model: 'home' | 'login';
}

export function HeaderIndex({ model }: IHeaderProps) {
	return (
		<div className="header">
			<AccessibilityHeader />
			<LogosHeader />
			<div className="rightContent">
				{model === 'home' ? (
					<>
						<h1 className='homeTitle'>Nome, o segredo do sucesso é a constância no objetivo.</h1>
						<Link to="/">
							<FaCalendarAlt size={50} />
						</Link>
					</>
				) : (
					<h1 className='loginTitle'>Faça seu Login</h1>
				)}
			</div>
		</div>
	)
}
