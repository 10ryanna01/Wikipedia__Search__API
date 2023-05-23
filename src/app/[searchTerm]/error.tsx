"use client"
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // log errror if we get one
    console.error(error);
  }, [error]);

  return (
    <main>
      <button onClick={() => reset()}> try again</button>
    </main>
  );
}
