import { FadeComponent } from "@/components/FadeComponent"
import ProjectCard from "@/components/ProjectCard"

import style from "./projectcards.module.css"

interface RepositoryCardProps {
	pinnedRepositories: PinnedRepository[]
}

export default function RepositoriesInfo({
	pinnedRepositories,
}: RepositoryCardProps) {
	return (
		<section className={style.projectsPanel}>
			<FadeComponent flexCol delay>
				<h2 className={style.projectsPanelTitle}>Projetos</h2>
				<div className={style.projectsSection}>
					{pinnedRepositories.map((repository) => (
						<ProjectCard key={repository.id} {...repository} />
					))}
				</div>
			</FadeComponent>
		</section>
	)
}
