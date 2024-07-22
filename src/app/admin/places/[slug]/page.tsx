import prisma from "@/lib/primsa";
import { notFound } from "next/navigation";
import AdminSidebar from "./AdminSidebar";
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
    <main className="flex justify-center items-center h-screen w-full">
      <div className="flex justify-center w-[90%] py-12 px-4 gap-8  bg-[#EDF1FA] dark:bg-[#1D2333] rounded-lg">
        <AdminPlacePage place={place} />
        <AdminSidebar place={place} />
      </div>
    </main>
  );
}
