"use client";

import React from "react";

export interface Item {
  id: string;
  name: string;
}

export const NextUseTransition = ({ items }: { items: Item[] }) => {
  const [sidebarVisible, setSidebarVisible] = React.useState(false);
  const [renderedItems, setRenderedItems] = React.useState<Item[]>([]);
  const [isPending, startTransition] = React.useTransition();
  const handleToggleSidebar = () => {
    setSidebarVisible((prev) => !prev);

    startTransition(() => {
      if (!sidebarVisible) {
        setRenderedItems(items); // if sidebar is opening, load the items
      } else {
        setRenderedItems([]); // if closing, remove the items
      }
    });
  };

  return (
    <div className="max-w-lg m-auto py-12">
      <button onClick={handleToggleSidebar}>
        {sidebarVisible ? "Hide Users" : "Show Users"}
      </button>

      {sidebarVisible && (
        <div className="sidebar">
          {isPending ? (
            <p className="text-gray-500 text-sm">Loading item...</p> // Show loading indicator while rendering large list
          ) : (
            <ul>
              {renderedItems.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
