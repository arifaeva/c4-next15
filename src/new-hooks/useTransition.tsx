// WITH useTransition----------------------------------------------------------------------------------------------------------------------------------------

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
    // Marked as Urgent
    // set Sidebar Visible
    setSidebarVisible((prev) => !prev); // cheap

    // Marked as non-urgent
    startTransition(() => {
      // set item yang di-render
      if (!sidebarVisible) {
        setRenderedItems(items); // if sidebar is opening, load the items
        // expensive, 50.000 item in array
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

// WITHOUT useTransition----------------------------------------------------------------------------------------------------------------------------------------

// "use client";

// import React from "react";

// export interface Item {
//   id: string;
//   name: string;
// }

// export const NextUseTransition = ({ items }: { items: Item[] }) => {
//   const [sidebarVisible, setSidebarVisible] = React.useState(false);
//   const [renderedItems, setRenderedItems] = React.useState<Item[]>([]);
//   const handleToggleSidebar = () => {
//     setSidebarVisible((prev) => !prev);

//     if (!sidebarVisible) {
//       setRenderedItems(items); // if sidebar is opening, load the items
//     } else {
//       setRenderedItems([]); // if closing, remove the items
//     }
//   };

//   return (
//     <div className="max-w-lg m-auto py-12">
//       <button onClick={handleToggleSidebar}>
//         {sidebarVisible ? "Hide Users" : "Show Users"}
//       </button>

//       {sidebarVisible && (
//         <div className="sidebar">
//           <ul>
//             {renderedItems.map((item) => (
//               <li key={item.id}>{item.name}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };
