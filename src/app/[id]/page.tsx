import { prisma } from "@/utils/prisma";
import { deleteNote } from "./action";

interface PageProps {
  params: Promise<{ id: string }>;
}

// ISR => SSR + Incremental build => VERCEL !
// ISR in VPS => super painful !

export const revalidate = 60;

export async function generateStaticParams() {
  const notes = await prisma.note.findMany();

  return notes.map((note) => ({
    id: note.id,
  }));
}

export default async function SingleNotePage({ params }: PageProps) {
  const { id } = await params;
  const note = await prisma.note.findUnique({ where: { id } });

  return (
    <div>
      <div>{note?.content}</div>
      <form action={deleteNote}>
        <input name="noteid" defaultValue={id} hidden />
        <button>Delete</button>
      </form>
    </div>
  );
}
