"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function doSomethingExpensive(
  _prevState: unknown,
  formData: FormData
) {
  // await new Promise((resolve) => setTimeout(resolve, 2000))

  const content = formData.get("content") as string;

  await prisma.note.create({
    data: {
      content,
    },
  });

  revalidatePath("/next-optimistic");

  return { result: "Good!" };
}
