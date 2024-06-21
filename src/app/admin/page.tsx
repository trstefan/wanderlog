import PlaceItem from "@/components/PlaceItem";
import prisma from "@/lib/primsa";
import Link from "next/link";
export default async function AdminPage() {
  const unapprovedPlaces = await prisma.place.findMany({
    where: { approved: false },
  });
  return (
    <main className="py-4">
      <h2 className="font font-semibold text-3xl pl-8">
        Places waiting to be approved
      </h2>
      <section className="my-4 p-4 flex flex-wrap gap-4 items-center justify-center">
        {unapprovedPlaces.map((place) => (
          <Link
            key={place.id}
            href={`/admin/places/${place.slug}`}
            className="block"
          >
            <PlaceItem place={place}></PlaceItem>
          </Link>
        ))}
      </section>
    </main>
  );
}
