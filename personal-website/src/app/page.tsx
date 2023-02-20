import Contact from "@/components/Contact"
import RepositorieCard from "@/components/RepositoryCard"

import { promiseErrorHandler } from "../utils/promiseErrorHandler"
import style from "./page.module.css"

async function getData() {
	const url = `${process.env.ENVIRONMENT}/api/graphql`
	const [response, error] = await promiseErrorHandler(
		fetch(url, {
			next: { revalidate: 10 },
		})
	)
	if (!response) return console.log(error)
	return await response.json()
}

export default async function Home() {
	const pinnedRepositories: PinnedRepository[] = await getData()
	return (
		<main className={style.main}>
			<p>Olá, sou Hennan Lewis e sou desenvolvedor WEB.</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
				illum odit voluptatum adipisci facilis. Obcaecati, quidem.
				Aliquam dignissimos ea aliquid, sit fugiat eos quisquam vel.
				Ratione temporibus quaerat doloribus recusandae!
			</p>

			<RepositorieCard pinnedRepositories={pinnedRepositories} />
			<Contact />
		</main>
	)
}
