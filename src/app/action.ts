"use server"; // server!!

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function createNote(formData: FormData) {
  const content = formData.get("content") as string;

  // Best practice -> validation with zod

  await prisma.note.create({
    data: {
      content,
    },
  });

  revalidatePath("/");
}
