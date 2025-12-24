import { prisma } from "@/utils/prisma";
import { createNote } from "./action";
import Link from "next/link";

export default async function Page() {
  const notes = await prisma.note.findMany();

  return (
    <div>
      <h3>Notes</h3>
      <div>
        {notes.map((note) => (
          <Link href={`/${note.id}`} key={note.id} className="block">
            {note.content}
          </Link>
        ))}
      </div>
      <div>
        <form action={createNote}>
          <input name="content" placeholder="Note..." />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}
