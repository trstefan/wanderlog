import prisma from "@/lib/primsa";
import { notFound } from "next/navigation";
import AdminPlacePage from "./AdminPlacePage";
interface PageProps {
  params: { slug: string };
}

export default async function Page({ params: { slug } }: PageProps) {
  const place = await prisma.place.findUnique({
    where: { slug },
  });

  if (!place) notFound();

  return (
    <main>
      <AdminPlacePage place={place} />
    </main>
  );
}
