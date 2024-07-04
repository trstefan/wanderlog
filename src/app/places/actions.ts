"use server";

import prisma from "@/lib/primsa";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type FormState = { error?: string } | undefined;

export async function markAsVisited(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const placeId = parseInt(formData.get("placeId") as string);

    await prisma.place.update({
      where: { id: placeId },
      data: { status: "Visited" },
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
