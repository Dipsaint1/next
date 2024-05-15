"use client";

export default function ErrorBoundary({ error, reset }: {
  error: Error;
  reset: () => void;   // Reset is used to recover from errors re-rendering the segment
}) {
  return (
    <div>
      {error.message} 
      <button onClick={reset}>Try again</button>
    </div>
  )
};
