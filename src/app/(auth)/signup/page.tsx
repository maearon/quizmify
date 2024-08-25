import signupImage from "@/assets/signup-image.jpg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
    <div className="flex h-full max-h-[43rem] w-full max-w-[32rem] rounded-2xl bg-navbar p-10 shadow-2xl">
      <div className="w-full space-y-10 overflow-y-auto p-10 md:w-2/2">
        <ThemeToggle className="mr-4" />
        <h1 className="text-center text-3xl font-bold">Sign up to Interview Questions</h1>
        <div className="space-y-5">
          <SignUpForm />
          <Link href="/login" className="block text-center hover:underline">
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </div>
  </main>
  );
}
