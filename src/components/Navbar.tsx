import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./toggle";

export default function Navbar() {
  return (
    <header>
      <nav className="bg-white dark:bg-gray-900 w-full z-20 shadow-sm top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://t4.ftcdn.net/jpg/01/24/65/29/360_F_124652912_5GVrQIEnVBQNQPwLI6YeXfoG0B3W2YNx.jpg"
              className="h-8"
              alt="logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              WonderLog
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
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
