"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Redirect to the static HTML file
    window.location.href = '/index.html';
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white flex items-center justify-center">
      <p>Redirecting to screening tool...</p>
    </div>
  );
}