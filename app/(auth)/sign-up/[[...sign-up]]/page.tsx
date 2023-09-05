import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex h-full w-full justify-center">
      <SignUp />
    </div>

  )
}