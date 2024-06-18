import PlacePage from "@/components/PlacePage";
import prisma from "@/lib/primsa";
import { notFound } from "next/navigation";
import AdminSidebar from "./AdminSidebar";
interface PageProps {
  params: { slug: string };
}

export default async function Page({ params: { slug } }: PageProps) {
  const place = await prisma.place.findUnique({
    where: { slug },
  });

  if (!place) notFound();

  return (
    <main className="flex m-auto my-10 max-w-5xl flex-col items-start gap-5 px-3 md:flex-row md:items-start">
      <PlacePage place={place} />
      <AdminSidebar place={place} />
    </main>
  );
}
