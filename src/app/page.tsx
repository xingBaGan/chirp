"use client";
import { SignInButton, useUser, SignOutButton } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
          </p>
          {!isSignedIn ? (
            <SignInButton />
          ) : (
            <div>
                login in the page <SignOutButton/>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
