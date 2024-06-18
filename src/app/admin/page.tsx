import PlaceItem from "@/components/PlaceItem";
import prisma from "@/lib/primsa";
import Link from "next/link";
export default async function AdminPage() {
  const unapprovedPlaces = await prisma.place.findMany({
    where: { approved: false },
  });
  return (
    <main>
      {" "}
      <h1 className="font-bold">Admin Page</h1>
      <h2 className="font font-semibold">Unapproved Places</h2>
      <section>
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
