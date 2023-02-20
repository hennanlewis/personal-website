import Link from "next/link"
import {
	SiCss3,
	SiExpress,
	SiHtml5,
	SiMongodb,
	SiNodedotjs,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiVite,
} from "react-icons/si"

interface ObjectIcon {
	[key: string]: JSX.Element
}

interface TechIconsProps {
	technology: string
}

export const TechIcons = ({ technology }: TechIconsProps) => {
	const options: ObjectIcon = {
		css3: (
			<Link href="https://www.w3.org/Style/CSS/">
				<SiCss3 />
			</Link>
		),
		expressjs: (
			<Link href="https://expressjs.com/">
				<SiExpress />
			</Link>
		),
		html5: (
			<Link href="https://www.w3.org/html/logo/">
				<SiHtml5 />
			</Link>
		),
		mongodb: (
			<Link href="https://www.mongodb.com/">
				<SiMongodb />
			</Link>
		),
		nodejs: (
			<Link href="https://nodejs.org/en/">
				<SiNodedotjs />
			</Link>
		),
		reactjs: (
			<Link href="https://reactjs.org/">
				<SiReact />
			</Link>
		),
		typescript: (
			<Link href="https://www.typescriptlang.org/">
				<SiTypescript />
			</Link>
		),
		tailwindcss: (
			<Link href="https://tailwindcss.com/">
				<SiTailwindcss />
			</Link>
		),
		vite: (
			<Link href="https://vitejs.dev/">
				<SiVite />
			</Link>
		),
	}

	return options[technology]
}
