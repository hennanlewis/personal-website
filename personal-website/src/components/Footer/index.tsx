import Link from "next/link"
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"

import styles from "./footer.module.css"

const links = [
	{ href: "/", label: "Início" },
	{ href: "/projetos-vertigem", label: "Projetos vertigem" },
	{ href: "/diario-nihongo", label: "Diário Nihongo" },
	{ href: "/contato", label: "Contato" },
]

const socialLinks = [
	{ href: "https://github.com/hennanlewis", icon: <BsGithub />, label: "/hennanlewis" },
	{ href: "https://linkedin.com/in/hennanlewis", icon: <BsLinkedin />, label: "/hennanlewis" },
	{ href: "https://instagram.com/hennanlewis", icon: <BsInstagram />, label: "/hennanlewis" },
	{ href: "https://twitter.com/hennanlewis", icon: <BsTwitter />, label: "/hennanlewis" },
]

export const Footer = () => {
	return (
		<section className={styles.footerInfo}>
			<footer>
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
						{socialLinks.map(({ href, icon, label }) => (
							<li key={href}>
								<Link href={href} target="_blank">
									{icon}
									<span aria-hidden="true">{label}</span>
								</Link>
							</li>
						))}
					</ul>
				</section>
			</footer>
		</section>
	)
}
