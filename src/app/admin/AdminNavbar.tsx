"use client";

import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminNavbar() {
  const { user, signOut } = useClerk();
  const router = useRouter();

  return (
    <div className="bg-red-500 max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
      <Link href="/admin" className="font-semibold underline">
        <Button>Admin Dashbord</Button>
      </Link>
      <div className="space-x-2 flex items-center sm:flex-row flex-col">
        <span className="font-semibold italic">
          {user?.primaryEmailAddress?.emailAddress}
        </span>
        <Button
          onClick={async () => {
            await signOut();
            router.push("/");
          }}
        >
          Log out
        </Button>
      </div>
    </div>
  );
}
