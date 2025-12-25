import { NextActionState } from "@/new-hooks/useActionState";
import { prisma } from "@/utils/prisma";
import React from "react";

export default async function Page() {
  const notes = await prisma.note.findMany();

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[320px]">
        <section className="space-y-4">
          <h3>Notes</h3>
          <ul>
            {notes.map((note) => {
              return (
                <li key={note.id}>
                  <div>{note.content}</div>
                </li>
              );
            })}
          </ul>
        </section>
        <NextActionState />
      </div>
    </main>
  );
}
