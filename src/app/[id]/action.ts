"use server";

import { prisma } from "@/utils/prisma";
import { redirect } from "next/navigation";

export async function deleteNote(formData: FormData) {
  const noteid = formData.get("noteid") as string;
  // validation with zod

  await prisma.note.delete({
    where: {
      id: noteid,
    },
  });

  redirect("/");
}
