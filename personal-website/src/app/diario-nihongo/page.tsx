import { Footer } from "@/components/Footer"
import DarkFullText from "@/components/FullText/DarkPanel"
import CommomFullText from "@/components/FullText/CommomPanel"
import { TopBar } from "@/components/TopBar"
import Link from "next/link"
import { BsCloudDownloadFill } from "react-icons/bs"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

import styles from "./page.module.css"
import { promiseErrorHandler } from "@/utils/promiseErrorHandler"

async function getData() {
	const url = `${process.env.DOMAIN_URL}/diario-nihongo.md`
	const [response] = await promiseErrorHandler(fetch(url, { next: { revalidate: 60 * 60 } }))
	return (await response?.text()) ?? ""
}

export default async function NihongoJournal() {
	const text = await getData()

	return (
		<>
			<TopBar />
			<main className={styles.main}>
				<DarkFullText>
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
				</DarkFullText>

				<CommomFullText>
					<h1>Capítulos</h1>
					<ReactMarkdown>{text}</ReactMarkdown>
				</CommomFullText>
			</main>
			<Footer />
		</>
	)
}
