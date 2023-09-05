import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div className=" h-full">
      <h1 >heyy</h1>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
