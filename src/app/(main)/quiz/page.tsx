import React from "react";

// import { useAuth } from '@/libs/services';
// import { redirect } from "next/navigation";
import QuizCreation from "@/components/forms/QuizCreation";

export const metadata = {
  title: "Quiz",
  description: "Quiz yourself on anything!",
};

interface Props {
  searchParams: {
    topic?: string;
  };
}

const Quiz = async ({ searchParams }: Props) => {
  // const { user } = await useAuth();
  // if (!user) {
  //   redirect("/");
  // }
  return <QuizCreation topic={searchParams.topic ?? ""} />;
};

export default Quiz;
