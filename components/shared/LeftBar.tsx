'use client'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import { SignOutButton, SignedIn } from '@clerk/nextjs'
const LeftBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="custom-scrollbar sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r border-r-dark-4 bg-dark-2 pb-5 pt-28 max-md:hidden">
      <div className="flex flex-1 flex-col w-full gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
          return (
            <div
              className={`relative flex justify-start gap-2 rounded-lg p-4 ${isActive ? 'bg-primary-500' : 'bg-light-4'} `}
              key={link.id}>
              <Link href={link.route} className='flex gap-2'>
                <Image src={link.imgURL} alt='Home' width={24} height={24} />
                <p className='text-light-1 max-lg:hidden'> {link.label}</p>
              </Link>
            </div>)
        })}
      </div>
      <div className='mt-10 text-light-2 w-full px-6'>
        <SignedIn>
          <SignOutButton signOutCallback={() => {
            router.push("/sign-in")
          }}>
            <div className=' bg-light-4 relative flex justify-start gap-2 rounded-lg p-4 '>
              <Image src='/assets/logout.png' height={24} width={24} alt='Logout' />
              <div className='text-light-1 max-lg:hidden'>Logout</div>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  )
}

export default LeftBar
