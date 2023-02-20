import Contact from "@/components/Contact"
import RepositorieCard from "@/components/RepositoryCard"
import style from "./page.module.css"

async function getData() {
	return fetch(`${process.env.ENVIRONMENT}/api/graphql`, {
		next: { revalidate: 60 },
	})
		.then((response) => response.json())
		.catch((error) => error)
}

export default async function Home() {
	const pinnedRepositories: PinnedRepository[] = await getData()
	return (
		<main className={style.main}>
			<p>Olá, sou Hennan Lewis e sou desenvolvedor WEB.</p>
			<p>
				Sou baicharel em Engenharia da Computação pela Universidade
				Federal do Ceará - UFC.
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
				illum odit voluptatum adipisci facilis. Obcaecati, quidem.
				Aliquam dignissimos ea aliquid, sit fugiat eos quisquam vel.
				Ratione temporibus quaerat doloribus recusandae!
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
				illum odit voluptatum adipisci facilis. Obcaecati, quidem.
				Aliquam dignissimos ea aliquid, sit fugiat eos quisquam vel.
				Ratione temporibus quaerat doloribus recusandae!
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
				illum odit voluptatum adipisci facilis. Obcaecati, quidem.
				Aliquam dignissimos ea aliquid, sit fugiat eos quisquam vel.
				Ratione temporibus quaerat doloribus recusandae!
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
				illum odit voluptatum adipisci facilis. Obcaecati, quidem.
				Aliquam dignissimos ea aliquid, sit fugiat eos quisquam vel.
				Ratione temporibus quaerat doloribus recusandae!
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
				illum odit voluptatum adipisci facilis. Obcaecati, quidem.
				Aliquam dignissimos ea aliquid, sit fugiat eos quisquam vel.
				Ratione temporibus quaerat doloribus recusandae!
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
				illum odit voluptatum adipisci facilis. Obcaecati, quidem.
				Aliquam dignissimos ea aliquid, sit fugiat eos quisquam vel.
				Ratione temporibus quaerat doloribus recusandae!
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
				illum odit voluptatum adipisci facilis. Obcaecati, quidem.
				Aliquam dignissimos ea aliquid, sit fugiat eos quisquam vel.
				Ratione temporibus quaerat doloribus recusandae!
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
				illum odit voluptatum adipisci facilis. Obcaecati, quidem.
				Aliquam dignissimos ea aliquid, sit fugiat eos quisquam vel.
				Ratione temporibus quaerat doloribus recusandae!
			</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
				illum odit voluptatum adipisci facilis. Obcaecati, quidem.
				Aliquam dignissimos ea aliquid, sit fugiat eos quisquam vel.
				Ratione temporibus quaerat doloribus recusandae!
			</p>
			{pinnedRepositories && pinnedRepositories.length > 0 && (
				<RepositorieCard pinnedRepositories={pinnedRepositories} />
			)}
			<Contact />
		</main>
	)
}
