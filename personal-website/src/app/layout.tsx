import { Footer } from "@/components/Footer"
import { TopBar } from "@/components/TopBar"
import { Signika } from "@next/font/google"

import "./globals.css"

const signika = Signika({ subsets: ["latin"], variable: "--font-signika" })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body className={signika.variable}>
				{children}
				<Footer />
			</body>
		</html>
	)
}
