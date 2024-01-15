"use client";

import React, { useState } from "react";
import ChipInput from "../components/ChipInput";

export default function Home() {
  const [availableItems, setAvailableItems] = useState<string[]>([
    "Laxmi devi",
    "Omparkash Kumar",
    "Promila yadav",
    "Pradeep kumar",
    "Sharmila yadav",
    "Ranbir singh",
    "Shubham yadav",
    "Poonam yadav",
    "Jai",
    "Khushi yadav",
    "Mukul yadav",
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
