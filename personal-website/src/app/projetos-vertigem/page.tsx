import { Footer } from "@/components/Footer"
import FullText from "@/components/FullText"
import ProjectCard from "@/components/ProjectCard"
import { TopBar } from "@/components/TopBar"

import styles from "./page.module.css"

const repositorieInfo = {
	id: "string",
	name: "MissigNo ????",
	description: "????",
	homepageUrl: "",
	url: "",
	repositoryTopics: [],
	imageName: []
}

export default async function VertigoProjects() {
	return (
		<>
			<TopBar />
			<main className={styles.main}>
				<FullText>
					<h1 className={styles.initialTitle}>Projetos vertigem</h1>
					<p>
						Olá! O design geral deste site/portifólio tem por
						intuito ser básico e minimalista na medida do possível,
						e a princípio, esse nome "projetos vertigem" pode
						parecer estranho, mas obviamente tem um motivo.
					</p>
					<p>
						Uma vez vi um vídeo de uma pessoa que dizia que sites
						com muitas coisas se mexendo na tela, várias coisas
						brilhando, muitas cores diferentes, várias animações ou
						coisas desse tipo davam um pouco de vertigem, então
						resolvi colocar esse nome, pois essa parte vai ser
						justamente pra apresentar as ideias de projetos que com
						movimentação frenéticas ou muito coloridos.
					</p>
				</FullText>
				<ProjectCard {...repositorieInfo} />
			</main>
			<Footer />
		</>
	)
}
