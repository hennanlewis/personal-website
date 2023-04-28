import styles from "./fulltext.module.css"

interface CommomPanelProps {
	children: React.ReactNode
}

export default function CommomPanel({ children }: CommomPanelProps) {
	return <article className={styles.CommomPanel}>{children}</article>
}
