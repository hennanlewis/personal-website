import { ImageSlider } from "@/app/components/ProjectCards/ImageSlider"
import Link from "next/link"
import { TechIcons } from "../TechIcons"

import styles from "./projectcard.module.css"

interface ProjectCartProps {
	id: string
	name: string
	description: string
	homepageUrl: string
	url: string
	repositoryTopics: string[]
	imageName: string[]
}

export default function ProjectCard(props: ProjectCartProps) {
	const { id, name, description, homepageUrl, url, repositoryTopics, imageName } = props

	return (
		<div className={styles.projectCard}>
			<div className={styles.imageFrame}>
				<ImageSlider repositoryName={name} imageNames={imageName} />
			</div>

			<h3 className={styles.projectTitle}>{name.replaceAll("-", " ")}</h3>

			<p>{description}</p>
			<div className={styles.projectTopics}>
				<span>Tecnologias utilizadas:</span>
				<span>
					{repositoryTopics.map((topic) => (
						<h4 key={topic} title={topic}>
							{<TechIcons technology={topic} />}
							<span aria-hidden="true">{topic}</span>
						</h4>
					))}
				</span>
			</div>

			<div className={styles.projectLinks}>
				{url != "" ? (
					<Link href={url} target="_blank">
						Link para o github
					</Link>
				) : (
					<Link href="/">????</Link>
				)}

				{homepageUrl != "" && (
					<Link href={homepageUrl} target="_blank">
						Vizualizar projeto
					</Link>
				)}
			</div>
		</div>
	)
}
