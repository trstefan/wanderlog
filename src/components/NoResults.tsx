import Link from "next/link";
import { Button } from "./ui/button";

export default function NoResults() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4">
      <img src="/noplace.svg" alt="Example Image" width={250} height={250} />
      <h1 className="font-bold text-xl">No result founds</h1>
      <h2 className="font-semibold text-lg">
        {" "}
        Adjust the filters or add a new location
      </h2>
      <Button asChild>
        <Link href="/places/new">Add place</Link>
      </Button>
    </div>
  );
}
