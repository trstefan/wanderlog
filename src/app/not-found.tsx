import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="m-auto my-10 max-w-5xl space-y-5 px-3 text-center">
      <img src="/404.svg" alt="Example Image" className="w-1/2 mx-auto" />
      <h1 className="font-semibold text-xl">
        Sorry, the page you are looking for does not exist.
      </h1>
      <Link href="/" className="block">
        <Button>Home</Button>
      </Link>
    </main>
  );
}
