import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { dark } from "@clerk/themes";


export const metadata: Metadata = {
  title: 'SoloPlay signIn',
  description: '"Unlock Your Inner Champion: Play Solo, Win Big!"',
}
const inter = Inter({ subsets: ['latin'] })

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
    >
      <html lang="en"  className={`${inter.className}`}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}