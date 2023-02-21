import style from "./intro.module.css"

export default function Intro() {
	return (
		<section className={style.mainPanel}>
			<div className={style.highlight}>
				<h2>
					<span>Olá, sou</span> <strong>Hennan Lewis</strong>
				</h2>
				<h3>Desenvolvedor Frontend</h3>
			</div>
		</section>
	)
}
