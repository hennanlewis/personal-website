import styles from "./fulltext.module.css"

interface FullTextProps {
	children: React.ReactNode
}

export default function FullText({ children }: FullTextProps) {
	return (
		<div className={styles.FullText}>
			<article className={styles.DarkFullText}>{children}</article>
		</div>
	)
}
