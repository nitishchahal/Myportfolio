import React from "react";
import { ArrowUp } from "lucide-react"; // clean icon

export default function BackToTop({ isVisible }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-lg hover:scale-110 transition-transform duration-300"
    >
      <ArrowUp size={22} />
    </button>
  );
}
