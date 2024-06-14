import { Metadata } from "next";
import NewPlaceForm from "./NewPlaceForm";

export const metadata: Metadata = {
  title: "Add a new Place",
};

export default function Page() {
  return <NewPlaceForm />;
}
