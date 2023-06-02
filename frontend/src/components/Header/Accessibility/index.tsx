import { RiContrastFill } from 'react-icons/ri'

import './styles.css'
import { useState, useEffect } from 'react'

export function AccessibilityHeader() {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

	// Verificar se há uma preferência de tema salva na localStorage
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme) {
			setIsDarkTheme(savedTheme === 'dark')
			document.querySelector('body')?.setAttribute('data-theme', savedTheme)
		}
	}, [])

	const setDarkMode = () => {
		document.querySelector('body')?.setAttribute('data-theme', 'dark')
		setIsDarkTheme(true)
		localStorage.setItem('theme', 'dark') // Salvar a preferência de tema na localStorage
	}

	const setLightMode = () => {
		document.querySelector('body')?.setAttribute('data-theme', 'light')
		setIsDarkTheme(false)
		localStorage.setItem('theme', 'light') // Salvar a preferência de tema na localStorage
	}

	const toggleTheme = () => {
		if (isDarkTheme) setLightMode()
		else setDarkMode()
	}

	return (
		<div className="bgAccessibilityField">
			<div className="accessibilityField">
				<div className="identity">
					<span>EEEP MANOEL MANO - CRATEÚS</span>
				</div>

				<div className="iconsAccessibility">
					<span>A</span>
					<span>A-</span>
					<span>A+</span>
					<RiContrastFill
						style={{ transform: 'rotate(30deg)' }}
						onClick={toggleTheme}
					/>
				</div>
			</div>
		</div>
	)
}
