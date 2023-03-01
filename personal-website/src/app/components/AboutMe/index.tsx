import { FadeComponent } from "@/components/FadeComponent"
import { socialItems } from "@/components/SocialItems"
import Link from "next/link"
import FullText from "../../../components/FullText"

import style from "./aboutme.module.css"

export default function AboutMe() {
	return (
			<FullText>
				<FadeComponent flexCol darkBG>
					<h1>Sobre mim</h1>
					<p>
						Sempre tive muita curiosidade por computadores e
						tecnologia. Optei por fazer uma escola de tempo integral
						durante meu ensino médio, mais precisamente atrelada ao
						curso de Redes de Computadores, curso que já me fez
						entrar em contato com um pouco de Java, HTML, CSS e
						JavaScript.
					</p>
					<p>
						Sou Engenheiro da Computação pela Universidade Federal
						do Ceará (UFC). Durante a graduação, utilizei várias
						linguagens de programação, como C, C++, PHP, MySQL,
						JavaScript e Java, sendo que nesta última, fui monitor
						durante dois semestres. Inicialmente, minha vertente
						foco era de Telecomunicações, mas nos últimos semestres,
						optei por mudar para Ciência da Computação.
					</p>
					<p>
						Mesmo que frontend seja minha área de maior foco de
						estudo, possuo grande interesse por backend (ainda que
						eu não seja tão proficiente como gostaria). Compreendo
						completamente o valor da área de design para um
						desenvolvedor frontend, por isso procuro constantemente
						sobre tendências de estilos visuais de projetos.
					</p>
					<p>
						Hoje, as tecnologias que mais tenho domínio são Tailwind
						CSS, TypeScript, React.JS, Next.JS e MongoDB. Fora as
						estudar sobre minha área de atuação, nesse começo de
						2023 comecei a estudar um pouco de japonês e criei um
						canal no YouTube pra mostrar meu progresso. Para entrar
						em contato, tem um formulário no fim da página, ou entre
						em contato pelas minhas redes sociais:
					</p>
					<ul className={style.social}>
						{socialItems.map(({ href, icon, label }) => (
							<li key={href}>
								<Link href={href} target="_blank">
									{icon}
									<span aria-hidden="true">{label}</span>
								</Link>
							</li>
						))}
					</ul>
				</FadeComponent>
			</FullText>
	)
}
