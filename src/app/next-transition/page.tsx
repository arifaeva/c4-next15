import { Item, NextUseTransition } from "@/new-hooks/useTransition";
import React from "react";
import { faker } from "@faker-js/faker";

export default async function Page() {
  const items: Item[] = Array.from({ length: 50000 }, () => {
    return { id: faker.string.nanoid(), name: faker.person.fullName() };
  });

  return <NextUseTransition items={items} />;
}
