"use server";

import { toSlug } from "@/lib/utils";
import { createPlaceSchema } from "@/lib/validation";
import { nanoid } from "nanoid";
import prisma from "@/lib/primsa";
import { redirect } from "next/navigation";

export async function createPlacePosting(formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const { name, temperatureType, locationType, status, description } =
    createPlaceSchema.parse(values);

  const slug = `${toSlug(name)}-${nanoid(10)}`;

  await prisma.place.create({
    data: {
      slug,
      name: name.trim(),
      locationType,
      temperatureType,
      status,
      description: description?.trim(),
    },
  });

  redirect("/place-submitted");
}
