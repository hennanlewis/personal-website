import About from "@/components/About"
import Contact from "@/components/Contact"
import Intro from "@/components/Intro"
import RepositorieCard from "@/components/ProjectCards"
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
				<About />
				{pinnedRepositories.length > 0 && (
					<RepositorieCard pinnedRepositories={pinnedRepositories} />
				)}
				<Contact />
			</main>
			<Footer />
		</>
	)
}
