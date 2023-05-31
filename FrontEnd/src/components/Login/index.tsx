import { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

import institutionalWaves from '../../assets/waves.svg'
import LogoEscola from '../../assets/logo-escola-light.svg'
import './styles.css'

export function LoginIndex() {
	const [isOpen, setIsOpen] = useState('close')

	return (
		<>
			<div className="loginMain">
				<div className="content">
					<div className="headerLogin">
						<img src={LogoEscola} alt="Logo da Escola EEEP" />
					</div>
					<div className="fieldsLogin">
						<div className="inputsField">
							<label>Email *</label>
							<div className="textArea">
								<input type="text" placeholder="Digite o Email" />
							</div>
						</div>

						<div className="inputsField">
							<label>Senha *</label>
							<div className="textArea">
								<input
									type={isOpen == 'open' ? 'text' : 'password'}
									placeholder="Digite a Senha"
								/>
								{isOpen == 'open' ? (
									<BsEye size={25} onClick={() => setIsOpen('close')} />
								) : (
									<BsEyeSlash size={25} onClick={() => setIsOpen('open')} />
								)}
								
							</div>
						</div>
					</div>
					<div className="btn">
						<button>Entrar</button>
					</div>
				</div>
				<div className="waves">
					<img src={institutionalWaves} alt="Ondas Intitucionais" />
				</div>
			</div>
		</>
	)
}
