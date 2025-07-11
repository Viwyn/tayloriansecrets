'use client'

import { ThemeProvider, ThemeProviderProps} from "next-themes"

export function Providers({ children, ...props}: ThemeProviderProps) {
	return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem {...props}>
            {children}
        </ThemeProvider>
    )
}
