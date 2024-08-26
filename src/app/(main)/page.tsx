import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DetailsDialog from "@/components/DetailsDialog";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import HistoryCard from "@/components/dashboard/HistoryCard";
import HotTopicsCard from "@/components/dashboard/HotTopicsCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import { Metadata } from "next";
import GoogleSignInButton from "../(auth)/login/google/GoogleSignInButton";
import { validateRequest } from "@/auth";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Home() {
  const session = await validateRequest();

  return (
    <>
      {!session?.user ? (
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>Welcome to Quizzzy 🔥!</CardTitle>
              <CardDescription>
                Quizzzy is a platform for creating quizzes using AI! Get started by
                logging in below!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <GoogleSignInButton />
            </CardContent>
          </Card>
        </div>
      ) : (
        <main className="p-8 mx-auto max-w-7xl">
          <div className="flex items-center">
            <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
            <DetailsDialog />
          </div>

          <div className="grid gap-4 mt-4 md:grid-cols-2">
            <QuizMeCard />
            <HistoryCard />
          </div>
          <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
            <HotTopicsCard />
            <RecentActivityCard />
          </div>
        </main>
      )}
    </>
  );
}
