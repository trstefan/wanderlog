import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./toggle";

export default function Navbar() {
  return (
    <header>
      <nav className="bg-background dark:bg-gray-900 w-full z-20 shadow-sm top-0 start-0 border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://pixabay.com/get/g284a3d19cbd0374281c72e0ece8d4ba8c45f990253b8f9f905e751c5d24aa0e189126cf83283a1432e4231c129434cd3.svg"
              className="h-10"
              alt="logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              WonderLog
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 gap-4">
            <ModeToggle />
            <Button asChild>
              <Link href="/places/new">Add place</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
