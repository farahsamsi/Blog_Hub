"use client";

import SectionTitle from "@/components/SectionTitle";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const LatestSection = () => {
  const [posts, setPosts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // TODO: use RTK query here
  useEffect(() => {
    fetch("/blog_posts_data.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => new Date(b.postDate) - new Date(a.postDate)
        );
        setPosts(sorted);
      })
      .catch((err) => console.error("Failed to load posts:", err));
  }, []);

  const getCategoryColor = (category) => {
    const colorMap = {
      FASHION: "bg-purple-600",
      SPORTS: "bg-purple-600",
      NEWS: "bg-gray-600",
      "LIFE STYLE": "bg-pink-600",
      LIVING: "bg-orange-600",
      ARTS: "bg-yellow-600",
      CITIES: "bg-indigo-600",
    };

    return colorMap[category] || "bg-gray-400"; // fallback
  };

  const visiblePosts = showAll ? posts : posts.slice(0, 5);

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 ">
      {/* Header */}
      <SectionTitle></SectionTitle>

      {/* Posts */}
      <div className="space-y-6">
        {visiblePosts?.map((post, index) => (
          <div
            key={index}
            className="grid grid-cols-12 items-start gap-4 group"
          >
            <div className="col-span-5">
              <div className="relative w-full h-56 overflow-hidden">
                {/* Category Label */}
                <span
                  className={`absolute top-0 left-0 font-semibold text-xs text-white px-2 py-1 group-hover:scale-105 z-40 transition-transform duration-300  ${getCategoryColor(
                    post?.category
                  )}`}
                >
                  {post?.category}
                </span>

                {/* Image */}
                <Image
                  src={post?.image}
                  alt={post?.title}
                  width={120}
                  height={90}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Bookmark Button */}
                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className="absolute top-[45%] left-[45%]  p-2 bg-white rounded-full shadow hover:scale-110  z-40 opacity-0 group-hover:opacity-100 transition ease-in-out"
                >
                  {bookmarked ? (
                    <FaBookmark className="text-black w-5 h-5" />
                  ) : (
                    <FaRegBookmark className="text-black w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="col-span-7">
              <h3 className="font-semibold text-md mt-2">{post?.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{post?.description}</p>
              <div className="text-xs text-gray-500 mt-2 space-x-2">
                <span>{post?.author}</span>
                <span>·</span>
                <span>{moment(post?.postDate).fromNow()}</span>
                <span>·</span>
                <a href="#" className="text-blue-600 hover:underline">
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        {/* More Posts Button */}
        {!showAll && posts.length > 5 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
            >
              More posts
            </button>
          </div>
        )}
        {showAll && posts.length > 5 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
            >
              See Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestSection;
