import { Link } from 'react-router-dom'

import LogoEscolaDark from '../../../assets/logo-escola-dark.svg'
import Escola15anosDark from '../../../assets/escola-15anos-dark.svg'

import './styles.css'

export function LogosHeader() {
	return (
		<div>
			<Link to="/" className="navLogoDark">
				<img
					src={LogoEscolaDark}
					alt="Logo da EEEP"
					style={{}}
				/>
				<div className="dividingLineDarkLogos"></div>
				<img
					src={Escola15anosDark}
					alt="Logo do Governo do Estado do Ceará"
				/>
			</Link>
		</div>
	)
}
