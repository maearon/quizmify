import UserButton from "@/components/UserButton";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import SignInButton from "@/components/SignInButton";
import { validateRequest } from "@/auth";

export default async function Navbar() {
  const session = await validateRequest();

  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-3">
        <Link
          href="/"
          className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white"
        >
          Quizzzy
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle className="mr-4" />
          {session?.user ? (
            <UserButton className="sm:ms-auto" />
          ) : (
            <SignInButton textSignIn="Sign In" textSignUp="Sign Up" />
          )}
        </div>
      </div>
    </header>
  );
}
