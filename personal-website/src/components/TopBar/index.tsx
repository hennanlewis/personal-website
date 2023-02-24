import Link from "next/link"

import styles from "./topbar.module.css"

export const TopBar = () => {
	return (
		<nav className={styles.topBar}>
			<ul className={styles.menu}>
				<li>
					<Link href="/">HL</Link>
				</li>
				<li>
					<Link href="/projetos-vertigem">Vertigem</Link>
				</li>
				<li>
					<Link href="/diario-nihongo">Nihongo</Link>
				</li>
			</ul>
		</nav>
	)
}
