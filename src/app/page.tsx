"use client";

import React, { useState } from "react";
import ChipInput from "../components/ChipInput";

export default function Home() {
  const [availableItems, setAvailableItems] = useState<string[]>([
    "Item1",
    "Item2",
    "Item3",
    "Item4",
    "Item5",
    "Item6",
    "Item7",
    "Item8",
    "Item9",
  ]);
  return (
    <div className="App">
      <h1>Chip Input Component</h1>
      <ChipInput
        availableItems={availableItems}
        setAvailableItems={setAvailableItems}
      />
    </div>
  );
}
