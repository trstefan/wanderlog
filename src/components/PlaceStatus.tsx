import { Place } from "@prisma/client";
import FormSubmitButton from "./FormSubmitButton";
import { useFormState } from "react-dom";
import { markAsVisited } from "@/app/places/actions";

interface PageStatusProps {
  place: Place;
}

export default function PageStatus({ place }: PageStatusProps) {
  return (
    <div>
      {place.status === "Not Visited" && (
        <MarkAsVisitedButton placeId={place.id} />
      )}
    </div>
  );
}

interface PlaceStatusButtonProps {
  placeId: number;
}

function MarkAsVisitedButton({ placeId }: PlaceStatusButtonProps) {
  const [formState, formAction] = useFormState(markAsVisited, undefined);

  return (
    <form action={formAction} className="space-y-1">
      <input hidden name="placeId" value={placeId} />
      <FormSubmitButton className="w-full bg-green-500 hover:bg-green-600">
        Mark as Seen
      </FormSubmitButton>
    </form>
  );
}
