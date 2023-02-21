import { Footer } from "@/components/Footer"
import { TopBar } from "@/components/TopBar"

import "./globals.css"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body>
				{children}
				<Footer />
			</body>
		</html>
	)
}
