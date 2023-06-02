import './styles.css'

interface NotebookProps {
	text: string | undefined,
}

export const NotebookNotionsProps= ({text}:NotebookProps) => {
	return (
		<div><p>{text}</p></div>
	)
}
