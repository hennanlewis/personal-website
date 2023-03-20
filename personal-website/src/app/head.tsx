export default function Head() {
	const description =
		"Meu nome é Hennan Lewis. Sou desenvolvedor Frontend e Engenheiro da Computação pela Universiade Federal do Ceará (UFC) em 2022."
	const title = "Hennan Lewis - Web Developer"
	return (
		<>
			<title>{title}</title>
			<meta
				content="width=device-width, initial-scale=1"
				name="viewport"
			/>
			<link rel="icon" href="/favicon.ico" />
			<meta name="description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:site_name" content={title} />
		</>
	)
}
