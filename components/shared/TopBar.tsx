import {SignedIn, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
const TopBar = () => {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between max-w-[1800px] bg-dark-2 px-6 py-3">
      <Link href='/' className="flex items-center gap-1 ">
        <Image src={"/logo-white.png"} width={30} height={30} alt="logo" />
        <span className="text-light-1">SoloPlay</span>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block">
          <SignedIn>
              <div className="flex cursor-pointer rounded-[50%] bg-light-2">
                <UserButton />
              </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}

export default TopBar
