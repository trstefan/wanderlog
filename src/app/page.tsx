import { ModeToggle } from "@/components/toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>Hello world!</p>
        <ModeToggle />
      </div>
    </main>
  );
}
