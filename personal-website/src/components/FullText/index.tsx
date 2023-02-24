import style from "./fulltext.module.css"

interface FullTextProps {
	darkBG?: boolean
	children: React.ReactNode
}

export default function FullText({ children, darkBG }: FullTextProps) {
	return (
		<section className={darkBG ? style.fullTextPanelDarkBG : style.fullTextPanel}>
			{children}
		</section>
	)
}
