"use client";

import { createNewNote } from "@/app/next-optimistic/action";
import { Note } from "@prisma/client";
import { useActionState, useId, useOptimistic } from "react";

export const NextOptimistic = ({ notes }: { notes: Note[] }) => {
  const [, formAction, isPending] = useActionState(createNewNote, null);
  const [optimisticState, setOptimisticState] = useOptimistic(
    notes,
    (currentState, newNote: Note) => {
      return [...currentState, newNote];
    }
  );
  const id = useId(); // useId is a custom hook that returns a unique id
  // temporary id, not for generating id like uuid, cuid, nanoid
  // Example: r1, r2

  async function submit(formData: FormData) {
    const newNote = {
      id,
      content: formData.get("content") as string,
    };

    setOptimisticState(newNote);
    formAction(formData);
  }

  return (
    <div className="max-w-xl m-auto py-12 space-y-8">
      <h3>useOptimistic</h3>
      <section className="space-y-4">
        <div>
          <h3>Notes</h3>
          <p>UseOptimistic is for Adding Fast User Experiences Feeling</p>
        </div>
        <ul>
          {optimisticState.map((note, index) => {
            return (
              <li key={note.id}>
                <div>
                  {note.content}
                  {index === optimisticState.length - 1 && isPending && (
                    <span> (saving) </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <form action={(formData) => submit(formData)} className="space-y-4">
          <input name="content" placeholder="Note ..." />
          <button disabled={isPending}>Save</button>
        </form>
      </section>
    </div>
  );
};
