"use client"
import { ForwardedRef, useEffect, useRef, useState } from "react"

import styles from "./fade-component.module.css"

interface FadeComponentProps {
	children: React.ReactNode
	flexCol?: boolean
	darkBG?: boolean
	delay?: boolean
	log?: string
}

export const FadeComponent = ({
	children,
	flexCol,
	darkBG,
	delay,
	log,
}: FadeComponentProps) => {
	const [isAutoReloading, setIsAutoReloading] = useState(true)
	const watcherObserver = useRef<IntersectionObserver>()
	const watcher = useRef<HTMLDivElement>(null)

	const classCol = flexCol ? styles.watcherCol : styles.watcher
	let watcherStyle = darkBG ? `${styles.darkBG} ${classCol}` : classCol
	watcherStyle = delay ? watcherStyle + " delay" : watcherStyle

	useEffect(() => {
		watcherObserver.current = new IntersectionObserver((options) => {
			const [option] = options

			if (option.boundingClientRect.y < 0) return setIsAutoReloading(true)
			if (option.isIntersecting) return setIsAutoReloading(true)

			setIsAutoReloading(false)
		})

		if (watcher.current && isAutoReloading) {
			watcherObserver.current.observe(watcher.current)
		}
	}, [])

	return (
		<div className={styles.watcherOverflow} ref={watcher}>
			<div
				className={
					isAutoReloading
						? `${watcherStyle} ${styles.active}`
						: watcherStyle
				}>
				{children}
			</div>
		</div>
	)
}
