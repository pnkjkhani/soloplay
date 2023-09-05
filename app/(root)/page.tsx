import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div className="bg-gray-800 h-[100vh]">
      <h1 >heyy</h1>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
