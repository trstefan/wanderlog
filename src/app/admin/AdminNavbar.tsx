"use client";

import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminNavbar() {
  const { user, signOut } = useClerk();
  const router = useRouter();

  return (
    <div className="w-full container flex h-16 items-center justify-between  px-4 md:px-6">
      <Link href="/admin" className="font-semibold underline">
        <Button>Admin Dashbord</Button>
      </Link>
      <div className="flex items-center gap-2">
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
