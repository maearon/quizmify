import UserButton from "@/components/UserButton";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/assets/logo-image.svg";
import { ThemeToggle } from "@/components/ThemeToggle";
import SignInButton from "@/components/SignInButton";
import { validateRequest } from "@/auth";

export default async function Navbar() {
  const session = await validateRequest();
  
  return (
    <header className="sticky top-0 z-10 bg-navbar shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-1">
        <Link href="/" className="text-2xl font-bold text-primary mr-6">
          <Image alt='logo' src={logoImage} />
        </Link>
        <ThemeToggle className="mr-4" />
        {session?.user ? (
          <UserButton className="sm:ms-auto" />
        ) : (
          <SignInButton textSignIn={"Sign In"} textSignUp={"Sign Up"} />
        )}
      </div>
    </header>
  );
}
