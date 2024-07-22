"use client";

import FormSubmitButton from "@/components/FormSubmitButton";
import { Place } from "@prisma/client";
import { useFormState } from "react-dom";
import { approvePlace, deletePlace } from "../../actions";

interface AdminSidebarProps {
  place: Place;
}

export default function AdminSidebar({ place }: AdminSidebarProps) {
  return (
    <aside className="flex w-[200px] flex-none flex-row items-center gap-2 md:flex-col md:items-stretch ">
      {place.approved ? (
        <span className="text-center font-semibold text-green-500">
          Approved
        </span>
      ) : (
        <ApprovePlaceSubmissionButton placeId={place.id} />
      )}
      <DeletePlaceButton placeId={place.id} />
    </aside>
  );
}

interface AdminButtonProps {
  placeId: number;
}

function ApprovePlaceSubmissionButton({ placeId }: AdminButtonProps) {
  const [formState, formAction] = useFormState(approvePlace, undefined);

  return (
    <form action={formAction} className="space-y-1">
      <input hidden name="placeId" value={placeId} />
      <FormSubmitButton className="w-full bg-green-500 hover:bg-green-600">
        Approve
      </FormSubmitButton>
      {formState?.error && <p className="text-red-500">{formState.error}</p>}
    </form>
  );
}

function DeletePlaceButton({ placeId }: AdminButtonProps) {
  const [formState, formAction] = useFormState(deletePlace, undefined);

  return (
    <form action={formAction} className="space-y-1">
      <input hidden name="placeId" value={placeId} />
      <FormSubmitButton className="w-full bg-red-500 hover:bg-red-600">
        Delete
      </FormSubmitButton>
      {formState?.error && <p className="text-red-500">{formState.error}</p>}
    </form>
  );
}
