import AboutMe from "@/app/components/AboutMe"
import Contact from "@/app/components/ContactForm"
import Intro from "@/app/components/Intro"
import RepositoriesInfo from "@/app/components/ProjectCards"
import { Footer } from "@/components/Footer"

import style from "./page.module.css"
import { promiseErrorHandler } from "@/utils/promiseErrorHandler"

async function getData() {
	const url = `${process.env.DOMAIN_URL}/api/graphql`
	const [response] = await promiseErrorHandler(fetch(url, { next: { revalidate: 60 * 60 } }))
	return (await response?.json()) ?? []
}

export default async function Home() {
	const pinnedRepositories: PinnedRepository[] = await getData()
	return (
		<>
			<main className={style.main}>
				<Intro />
				<AboutMe />
				{pinnedRepositories.length > 0 && (
					<RepositoriesInfo pinnedRepositories={pinnedRepositories} />
				)}
				<Contact />
			</main>
			<Footer />
		</>
	)
}
