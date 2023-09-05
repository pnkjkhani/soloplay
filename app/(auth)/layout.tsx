import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'SoloPlay signIn',
    description: '"Unlock Your Inner Champion: Play Solo, Win Big!"',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en" className={`${inter.className} bg-gray-300`}>
                {children}
            </html>
        </ClerkProvider>

    )
}
