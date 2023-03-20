import styles from "./fulltext.module.css"

interface FullTextProps {
	children: React.ReactNode
}

export default function FullText({ children }: FullTextProps) {
	return (
		<div className={styles.fullTextPanel}>
			<article className={styles.content}>{children}</article>
		</div>
	)
}
