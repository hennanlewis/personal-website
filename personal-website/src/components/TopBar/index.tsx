"use client"
import Link from "next/link"

import styles from "./topbar.module.css"

export const TopBar = () => {
	return (
		<nav className={styles.navBar}>
			<ul className={styles.menu}>
				<li>
					<Link href="#projects">Projetos</Link>
				</li>
				<li>
					<Link href="#tech">Tecnologias</Link>
				</li>
			</ul>
		</nav>
	)
}
