import { NextOptimistic } from "@/new-hooks/useOptimistic";
import { prisma } from "@/utils/prisma";
import React from "react";

export default async function Page() {
  const notes = await prisma.note.findMany(); // fetching data

  return <NextOptimistic notes={notes} />;
}
