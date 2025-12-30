"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function createNewNote(_prevState: unknown, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 12000)); // 12s
  const content = formData.get("content") as string;

  await prisma.note.create({
    data: {
      content,
    },
  });

  revalidatePath("/next-optimistic");
  return { result: "success" };
}
