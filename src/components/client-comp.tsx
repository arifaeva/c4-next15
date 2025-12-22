"use client";

export const ClientComp = ({ data }: { data: any[] }) => {
  return (
    <div>
      <div>
        {data.map((todo) => {
          return <pre key={todo.id}>{JSON.stringify(todo, null, 2)}</pre>;
        })}
      </div>
    </div>
  );
};
