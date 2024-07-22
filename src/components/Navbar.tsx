import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./toggle";

export default function Navbar() {
  return (
    <header className="w-full bg-[#EDF1FA] dark:bg-[#1D2333]">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            WonderLog
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button asChild>
            <Link href="/places/new">Add place</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
