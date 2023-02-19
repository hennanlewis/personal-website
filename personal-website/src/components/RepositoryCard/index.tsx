import Image from "next/image"
import { Techs } from "../Techs"

import style from "./repositorycard.module.css"

interface RepositoryCardProps {
	pinnedRepositories: PinnedRepository[]
}

export default function RepositorieCard({
	pinnedRepositories,
}: RepositoryCardProps) {
	return (
		<section id="projects" className={style.repositorySection}>
			{pinnedRepositories.map((repositorie) => (
				<div key={repositorie.id} className={style.repositoryCard}>
					<div className={style.imageFrame}>
						{repositorie.imageName.map((image) => (
							<img
								key={`${repositorie.name}-${image}`}
								src={`https://raw.githubusercontent.com/hennanlewis/${repositorie.name}/main/doc/${image}`}
								alt={repositorie.name}
							/>
						))}
					</div>
					<h2 className={style.title}>
						{repositorie.name.replaceAll("-", " ")}
					</h2>
					<p>{repositorie.description}</p>
					<div className={style.topics}>
						<span>Tecnologias utilizadas:</span>
						<span>
							{repositorie.repositoryTopics.map((topic) => (
								<h3 key={topic}>
									{<Techs technology={topic} />}
									<span aria-hidden="true">{topic}</span>
								</h3>
							))}
						</span>
					</div>
				</div>
			))}
		</section>
	)
}
