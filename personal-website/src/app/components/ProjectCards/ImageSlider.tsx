"use client"
import { useEffect, useState } from "react"
import { generateProjectImageURL } from "./generateProjectImageURL"

import styles from "./projectcards.module.css"

interface ImageSliderProps {
	repositoryName: string
	imageNames: string[]
}

export const ImageSlider = ({repositoryName, imageNames}: ImageSliderProps) => {
	const [activePosition, setActivePosition] = useState(0)
	useEffect(() => {
		const timerId = setInterval(() => {
			setActivePosition((value) => (value + 1) % imageNames.length)
		}, 5000)
		return () => clearInterval(timerId)
	}, [activePosition])

	return (
		<>
			{imageNames.length > 0 &&
				imageNames.map((image, index) => (
					<img
						key={`${repositoryName}-${image}`}
						className={
							activePosition == index
								? `${styles.slider} ${styles.activeSlider}`
								: styles.slider
						}
						src={generateProjectImageURL(repositoryName, image)}
						alt={repositoryName}
					/>
				))}
		</>
	)
}
