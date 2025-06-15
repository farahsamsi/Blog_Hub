import BlogSlider from "@/components/BlogSlider";

import FeaturedPost from "./sharedComponents/FeaturedPost";
import LatestSection from "./sharedComponents/LatestSection";

export default function Home() {
  return (
    <div>
      <BlogSlider></BlogSlider>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 pb-10 px-1">
        {/* left side content  */}
        <div className="lg:col-span-3"></div>

        {/* center hero content  */}
        <div className="lg:col-span-6">
          <FeaturedPost></FeaturedPost>
          <LatestSection></LatestSection>
        </div>

        {/* right side content  */}
        <div className="lg:col-span-3"></div>
      </div>
    </div>
  );
}
