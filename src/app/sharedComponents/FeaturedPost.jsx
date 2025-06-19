"use client";

import Image from "next/image";
import { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

export default function FeaturedPost() {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <div className="relative w-full h-72 overflow-hidden group">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1444084316824-dc26d6657664?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Alaska travel advice"
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70"></div>

      {/* Bookmark Button */}
      <button
        onClick={() => setBookmarked(!bookmarked)}
        className="absolute top-3 left-3 z-20 p-2 rounded-full bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100  shadow-md transition"
        aria-label="Bookmark post"
      >
        {bookmarked ? (
          <FaBookmark className="w-5 h-5 " />
        ) : (
          <FaRegBookmark className="w-5 h-5 " />
        )}
      </button>

      {/* Content */}
      <div className="absolute bottom-5 left-5 right-5 text-white z-10">
        <span className="bg-purple-600 text-xs px-3 py-1  font-medium">
          Travel
        </span>

        <h2 className="text-xl font-semibold mt-3">
          All our Alaska travel advice in one place
        </h2>

        <p className="text-sm mt-1 opacity-80">IW STUDIO · 4 years ago</p>
      </div>
    </div>
  );
}
