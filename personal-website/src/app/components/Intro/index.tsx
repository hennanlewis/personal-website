import styles from "./intro.module.css"

export default function Intro() {
	return (
		<section className={styles.mainPanel}>
			<div className={styles.highlight}>
				<h2>
					<span>Olá, sou</span> <strong>Hennan Lewis</strong>
				</h2>
				<h3>&lt;Desenvolvedor Frontend/&gt;</h3>
			</div>
		</section>
	)
}
