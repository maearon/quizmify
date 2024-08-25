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
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[32rem] rounded-2xl bg-navbar p-10 shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-2/2">
          <ThemeToggle className="mr-4" />
          <h1 className="text-center text-3xl font-bold">Login to Interview Questions</h1>
          <div className="space-y-5">
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
