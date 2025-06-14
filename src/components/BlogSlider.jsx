"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const BlogSlider = () => {
  // TODO: make this dynamic from server data
  const topics = [
    {
      category: "Food",
      description: "The most popular fast food of China",
      color: "bg-red-500",
    },
    {
      category: "Sports",
      description: "Most searched sports in the world",
      color: "bg-blue-500",
    },
    {
      category: "Health",
      description: "Benefits of jogging to stay healthy",
      color: "bg-green-500",
    },
    {
      category: "Technology",
      description: "The incredible thing about Virtual Reality",
      color: "bg-purple-500",
    },
    {
      category: "Fashion",
      description: "The trend of women's clothing",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="w-full py-6">
      <div className="bg-purple-200">
        <Swiper
          //   slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          //   making the slides per view responsive
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          {topics?.map((topic, index) => (
            <SwiperSlide>
              <div
                key={index}
                className={`p-4 rounded-lg grid grid-cols-12  gap-4 items-center justify-items-center`}
              >
                <div className="col-span-4 w-16 h-16 bg-purple-700 rounded-full mb-3 grow mt-4"></div>{" "}
                {/* Placeholder for image/icon */}
                <div className="col-span-8">
                  <h3 className="text-lg font-bold">{topic?.category}</h3>
                  <p className="text-sm">{topic?.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogSlider;
