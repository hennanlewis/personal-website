import { FadeComponent } from "@/components/FadeComponent"
import ProjectCard from "@/components/ProjectCard"

import styles from "./projectcards.module.css"

interface RepositoryCardProps {
	pinnedRepositories: PinnedRepository[]
}

export default function RepositoriesInfo({
	pinnedRepositories,
}: RepositoryCardProps) {
	return (
		<section className={styles.projectsPanel}>
			<FadeComponent flexCol delay>
				<h2 className={styles.projectsPanelTitle}>Projetos</h2>
				<div className={styles.projectsSection}>
					{pinnedRepositories.map((repository) => (
						<ProjectCard key={repository.id} {...repository} />
					))}
				</div>
			</FadeComponent>
		</section>
	)
}
