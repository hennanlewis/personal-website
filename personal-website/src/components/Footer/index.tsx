import Link from "next/link"
import { FadeComponent } from "../FadeComponent"
import { socialItems } from "../SocialItems"

import styles from "./footer.module.css"

const links = [
	{ href: "/", label: "Início" },
	{ href: "/projetos-vertigem", label: "Projetos vertigem" },
	{ href: "/diario-nihongo", label: "Diário Nihongo" },
	{ href: "/contato", label: "Contato" },
]

export const Footer = () => {
	return (
		<FadeComponent darkBG>
			<footer className={styles.footerInfo}>
				<div>
					<ul>
						{links.map(({ href, label }) => (
							<li key={href}>
								<Link href={href}>{label}</Link>
							</li>
						))}
					</ul>
					<section className={styles.social}>
						<span>Redes Sociais:</span>
						<ul>
							{socialItems.map(({ href, icon, nick }) => (
								<li key={href}>
									<Link href={href} target="_blank">
										{icon}
										<span aria-hidden="true">{nick}</span>
									</Link>
								</li>
							))}
						</ul>
					</section>
				</div>
				<span className={styles.copyright}>© 2023, Hennan Lewis</span>
			</footer>
		</FadeComponent>
	)
}
