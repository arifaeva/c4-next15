"use client";

import { useEffect, useState } from "react";

export const ClientComp2 = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count === 10) {
      setMessage("Done!");
    }
  }, [count]);

  return (
    <div>
      <div>
        {count} {message}
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
