'use client'
import { useRouter, usePathname } from 'next/navigation'
import { sidebarLinks } from "@/constants"
import Image from "next/image";
import Link from "next/link"

const BottomBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="fixed bottom-0 z-10 w-full rounded-t-3xl bg-glassmorphism p-4 backdrop-blur-lg xs:px-7 md:hidden">
      <div className="flex items-center justify-between gap-3 xs:gap-5">
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

    </section>
  )
}

export default BottomBar
