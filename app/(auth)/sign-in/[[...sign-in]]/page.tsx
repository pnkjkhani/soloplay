import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-[100vh] w-full justify-center items-center">
      <SignIn />
    </div>
  )
}