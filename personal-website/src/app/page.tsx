import About from "@/components/About"
import Contact from "@/components/Contact"
import Intro from "@/components/Intro"
import RepositorieCard from "@/components/ProjectCards"

import style from "./page.module.css"

async function getData() {
	const url = `${process.env.DOMAIN_URL}/api/graphql`
	const response = await fetch(url, { next: { revalidate: 60 * 60 } })
	return response?.json() ?? []
}

export default async function Home() {
	const pinnedRepositories: PinnedRepository[] = await getData()
	return (
		<main className={style.main}>
			<Intro />
			<About />
			{pinnedRepositories.length > 0 && (
				<RepositorieCard pinnedRepositories={pinnedRepositories} />
			)}
			<Contact />
		</main>
	)
}
