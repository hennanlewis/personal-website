import Link from "next/link"

import { TechIcons } from "../TechIcons"
import style from "./projectscard.module.css"

interface RepositoryCardProps {
	pinnedRepositories: PinnedRepository[]
}

export default function RepositorieCard({
	pinnedRepositories,
}: RepositoryCardProps) {
	return (
		<section id="projects" className={style.projectsPanel}>
			<h2 className={style.projectsTitle}>Projetos</h2>
			<div className={style.projectsSection}>
				{pinnedRepositories.map((repositorie) => (
					<div key={repositorie.id} className={style.projectsCard}>
						<div className={style.imageFrame}>
							{repositorie.imageName.length > 0 &&
								repositorie.imageName.map((image) => (
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
						<div className={style.projectTopics}>
							<span>Tecnologias utilizadas:</span>
							<span>
								{repositorie.repositoryTopics.map((topic) => (
									<h3 key={topic} title={topic}>
										{<TechIcons technology={topic} />}
										<span aria-hidden="true">{topic}</span>
									</h3>
								))}
							</span>
						</div>
						<div className={style.projectLinks}>
							<Link href={repositorie.url} target="_blank">
								Link para o github
							</Link>
							{repositorie.homepageUrl != "" && (
								<Link
									href={repositorie.homepageUrl}
									target="_blank">
									Vizualizar projeto
								</Link>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
