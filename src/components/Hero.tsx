import Link from "next/link";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto gap-8 p-6 md:p-12">
      <div className="flex flex-col items-start justify-center flex-1 space-y-4">
        <h2 className="text-3xl font-bold">Don't know what place to visit?</h2>
        <p className="text-muted-foreground">
          With a simple click you can find exciting new places to visit.
        </p>
        <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Get a new destination
        </Button>
      </div>
      <div className="flex-1 bg-[#EDF1FA] dark:bg-[#1D2333]">
        <div className="h-full">
          <img
            src="https://placehold.co/600x400"
            alt="Product Image"
            className="rounded-t-md object-cover w-full aspect-[4/3]"
          />
          <div className="p-6 space-y-2">
            <h3 className="text-xl font-semibold">Our Flagship Product</h3>
            <p className="text-muted-foreground">
              Revolutionize your workflow with our cutting-edge solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
