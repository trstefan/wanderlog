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
      <div className="flex flex-col md:flex-row justify-center w-[90%] py-12 px-4 gap-8 bg-[#EDF1FA] dark:bg-[#1D2333] rounded-lg">
        <div className="order-2 md:order-1 w-full md:w-auto">
          <AdminPlacePage place={place} />
        </div>
        <div className="order-1 md:order-2 w-full md:w-auto">
          <AdminSidebar place={place} />
        </div>
      </div>
    </main>
  );
}
