"use client";

interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {
  return (
    <div className="w-full bg-red-900 text-red-300">
      <div>{error.message}</div>
      <button onClick={() => window.location.reload()}>Retry</button>
    </div>
  );
}
