import { prisma } from "@/utils/prisma";

export default async function Page() {
  const notes = await prisma.note.findMany();

  return (
    <div>
      <h3>Notes</h3>
      <div>
        {notes.map((note) => (
          <div key={note.id}>{note.content}</div>
        ))}
      </div>
    </div>
  );
}
