import React from "react";

interface LayoutProps {
  compA: React.ReactNode;
  compB: React.ReactNode;
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <main>
      <section className="grid grid-cols-2">
        <React.Suspense fallback={<div>Loading Comp A...</div>}>
          <div>{props.compA}</div>
        </React.Suspense>
        <React.Suspense fallback={<div>Loading Comp B...</div>}>
          <div>{props.compB}</div>
        </React.Suspense>
      </section>
      <section>
        <React.Suspense fallback={<div>Loading Children...</div>}>
          <div>{props.children}</div>
        </React.Suspense>
      </section>
    </main>
  );
}
