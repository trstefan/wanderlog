import NoResults from "@/components/NoResults";
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
      <section className="w-full grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-8">
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
      {unapprovedPlaces.length === 0 && <NoResults />}
    </main>
  );
}
