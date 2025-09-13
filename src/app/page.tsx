"use client";
import { learningCards } from "@/lib/mock/api/cards";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const numbers = learningCards.map((item) => parseInt(item.number, 10));
  function findMissingNumbers(nums: number[], total: number) {
    const missing: number[] = [];
    for (let i = 1; i <= total; i++) {
      if (!nums.includes(i)) {
        missing.push(i);
      }
    }
    return missing;
  }

  useEffect(() => {
    const missing = findMissingNumbers(numbers, 227);
    console.log("Faltan los números:", missing);
  }, []);

  return <div>hello world</div>;
}
