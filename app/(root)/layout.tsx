import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { dark } from "@clerk/themes";
import TopBar from '@/components/shared/TopBar';
import LeftBar from '@/components/shared/LeftBar';
import BottomBar from '@/components/shared/BottomBar';
import RightBar from '@/components/shared/RightBar';


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
      <html lang="en" className={`${inter.className}`}>
        <body className=' flex flex-col items-center '>
          <div className='w-full h-full max-w-[1800px]'>
            <TopBar />
            <main className='flex flex-row'>
              <LeftBar />
              <section className='flex min-h-screen flex-1 flex-col items-center bg-dark-1 px-6 pb-10 pt-28 max-md:pb-32 sm:px-10'>
                <div className='w-full max-w-4xl'>
                  {children}
                </div>
              </section>
              <RightBar/>
            </main>
            <BottomBar />
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}