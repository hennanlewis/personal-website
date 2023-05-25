import { FadeComponent } from "@/components/FadeComponent"
import { socialItems } from "@/components/SocialItems"
import Link from "next/link"
import FullText from "../../../components/FullText/DarkPanel"

import styles from "./aboutme.module.css"

export default function AboutMe() {
	return (
		<FullText>
			<FadeComponent flexCol darkBG>
				<h1>Sobre mim</h1>
				<p>
					Sou Engenheiro da Computação pela Universidade Federal
					do Ceará (UFC) e durante a graduação estudei algumas
					linguagens, tais como <strong><em>C++</em></strong>
					, <strong><em>PHP</em></strong>
					, <strong><em>MySQL</em></strong>
					e <strong><em>Java</em></strong>
					, sendo que nesta última, fui monitor durante dois
					semestres.
				</p>
				<p>
					Mesmo que <strong><em>frontend</em></strong> seja minha
					área de maior foco de estudo, possuo grande interesse
					por <strong><em>backend</em></strong> (mesmo que eu ainda
					não seja tão proficiente como gostaria).
				</p>
				<p>
					As tecnologias que mais tenho domínio atualmente
					são <strong><em>Tailwind CSS</em></strong>
					, <strong><em>TypeScript</em></strong>
					, <strong><em>React.JS</em></strong>
					, <strong><em>Next.JS</em></strong>
					e <strong><em>MongoDB</em></strong>. Para entrar em
					contato, preencha o formulário no fim da página, ou entre
					em contato pelas minhas redes sociais:
				</p>
				<ul className={styles.social}>
					{socialItems
						.filter(({ nick }) => nick != "/@diarionihongo")
						.map(({ href, icon, nick }) => (
							<li key={href}>
								<Link href={href} target="_blank">
									{icon}
									<span aria-hidden="true">{nick}</span>
								</Link>
							</li>
						))}
				</ul>
			</FadeComponent>
		</FullText>
	)
}
