"use client";

import { useEffect } from "react";

export default function ScreeningPage() {
  useEffect(() => {
    // Redirect to the static screening HTML file
    window.location.href = '/screening/index.html';
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white flex items-center justify-center">
      <p>Redirecting to health screening...</p>
    </div>
  );
}
