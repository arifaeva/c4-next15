"use client";

import { doSomethingExpensive } from "@/app/next-actionstate/action";
import { useActionState } from "react";

export const NextActionState = () => {
  const [state, formAction, isPending] = useActionState(
    doSomethingExpensive,
    null
  );
  // state = initialState
  // formAction = (formData: FormData) => void
  // isPending = boolean
  // useActionState(action: (prevState: unknown, formData: FormData), initialState: any)

  return (
    <div>
      <form action={formAction} className="space-y-4">
        <h3>useActionState</h3>
        <p className="text-gray-500">
          Use Action State is the way we can abstract the submisssion status and
          handling return
        </p>
        <input name="content" placeholder="Note..." className="block" />
        <button disabled={isPending}>Save</button>

        {state?.status === "error" && (
          <div className="text-red-500">{state.message}</div>
        )}
      </form>
    </div>
  );
};
