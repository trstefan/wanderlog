"use server";

import { isAdmin } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs";
import prisma from "@/lib/primsa";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { del } from "@vercel/blob";

type FormState = { error?: string } | undefined;

export async function approvePlace(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const placeId = parseInt(formData.get("placeId") as string);

    const user = await currentUser();

    if (!user || !isAdmin(user)) {
      throw new Error("error");
    }

    await prisma.place.update({
      where: { id: placeId },
      data: { approved: true },
    });

    revalidatePath("/");
  } catch (error) {
    let message = "Error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }
}

export async function deletePlace(prevState: FormState, formData: FormData) {
  try {
    const placeId = parseInt(formData.get("placeId") as string);

    const user = await currentUser();

    if (!user || !isAdmin(user)) {
      throw new Error("error");
    }

    const place = await prisma.place.findUnique({ where: { id: placeId } });

    if (place?.picture) {
      await del(place.picture);
    }

    await prisma.place.delete({ where: { id: placeId } });

    revalidatePath("/");
  } catch (error) {
    let message = "Error";
    if (error instanceof Error) {
      message = error.message;
    }
    return { error: message };
  }

  redirect("/admin");
}
