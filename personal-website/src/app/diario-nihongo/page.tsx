import { Footer } from "@/components/Footer"
import FullText from "@/components/FullText"
import ProjectCard from "@/components/ProjectCard"
import { TopBar } from "@/components/TopBar"
import Link from "next/link"
import { BsCloudDownloadFill } from "react-icons/bs"

import styles from "./page.module.css"

const repositorieInfo = {
	id: "string",
	name: "MissigNo ????",
	description: "????",
	homepageUrl: "",
	url: "",
	repositoryTopics: [],
	imageName: [],
}

export default async function NihongoJournal() {
	return (
		<>
			<TopBar />
			<main className={styles.main}>
				<FullText>
					<h1 className={styles.initialTitle}>Diário Nihongo</h1>
					<p>
						Olá! Esta parte do site é dedicada ao Diário Nihongo, um
						projeto pessoal que se trata de um canal no YouTube para
						registrar meu progresso de estudo no idioma japonês
						durante o ano de 2023.
					</p>
					<p>
						Aqui terão projetos web que envolvam as atividades
						elaboradas no canal e também o Guia de Gramática Diário
						Nihongo, uma apostila atualizada de acordo com o
						conteúdo estudado e repassado no canal.
					</p>

					<Link
						className={styles.link}
						target="_blank"
						href="https://www.dropbox.com/s/cxaf548fqnnk6wv/Guia-de-Gram%C3%A1tica-Di%C3%A1rio-Nihongo.pdf?dl=0">
						<BsCloudDownloadFill /> |
						<span>Baixar apostila em PDF</span>
					</Link>
				</FullText>
				<ProjectCard {...repositorieInfo} />
			</main>
			<Footer />
		</>
	)
}
