import loginImage from "@/assets/login-image.jpg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GoogleSignInButton from "./google/GoogleSignInButton";
import LoginForm from "./LoginForm";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <main className="flex items-center justify-center p-5">
      <div className="flex h-full max-h-[43rem] w-full max-w-[32rem] rounded-2xl bg-navbar p-10 shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-2/2">
          <h1 className="text-center text-3xl font-bold">Login to Quizmify</h1>
          <div className="space-y-5">
            <GoogleSignInButton />
            <LoginForm />
            <Link href="/signup" className="block text-center hover:underline">
              Don&apos;t have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
