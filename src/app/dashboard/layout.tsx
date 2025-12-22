import React from "react";
import ChartOrderSkeleton from "./@chartOrder/chartOrderSkeleton";

interface LayoutProps {
  chartOrder: React.ReactNode;
  compA: React.ReactNode;
  compB: React.ReactNode;
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <main>
      <section>
        <React.Suspense fallback={<ChartOrderSkeleton />}>
          <div>{props.chartOrder}</div>
        </React.Suspense>
      </section>

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
