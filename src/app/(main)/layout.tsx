import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer"
import SessionProvider from "./SessionProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/login");

  return (
    <SessionProvider value={session}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="mx-auto flex w-full max-w-7xl grow gap-5 p-5">
          {children}
        </div>
        <Footer />
      </div>
    </SessionProvider>
  );
}
