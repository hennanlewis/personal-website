import ProjectCard from "@/components/ProjectCard"
import Link from "next/link"

import { TechIcons } from "../../../components/TechIcons"
import { ImageSlider } from "./ImageSlider"
import style from "./projectcards.module.css"

interface RepositoryCardProps {
	pinnedRepositories: PinnedRepository[]
}

export default function RepositoriesInfo({
	pinnedRepositories,
}: RepositoryCardProps) {
	return (
		<section id="projects" className={style.projectsPanel}>
			<h2 className={style.projectsPanelTitle}>Projetos</h2>
			<div className={style.projectsSection}>
				{pinnedRepositories.map((repository) => (
					<ProjectCard key={repository.id} {...repository} />
				))}
			</div>
		</section>
	)
}
