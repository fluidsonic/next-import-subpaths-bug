import type { ReactNode } from "react"

export default function Layout({ children }: { readonly children: ReactNode }) {
	return (
		<html>
			<body>{children}</body>
		</html>
	)
}
