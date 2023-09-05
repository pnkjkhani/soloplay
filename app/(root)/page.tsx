import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div className="bg-gray-800">
      <h1 >heyy</h1>
      Is there
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
