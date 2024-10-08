"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type Props = { textSignIn: string; textSignUp: string };

const SignInButton = ({ textSignIn, textSignUp }: Props) => {
  const router = useRouter();

  return (
    <div className="space-x-2 flex-none rounded-full sm:ms-auto">
      <Button
        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={() => router.push("/login")}
      >
        {textSignIn}
      </Button>
    </div>
  );
};

export default SignInButton;
