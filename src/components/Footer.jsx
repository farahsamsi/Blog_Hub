const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-gray-200">
      {/* Column 1: Logo and Address */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Blog Hub</h2>
        <div className="text-sm text-gray-600">
          <p>+34 9879456</p>
          <p>ABC lane, West Europe</p>
        </div>
      </div>

      {/* Column 2: Popular Posts */}
      {/* TODO: Make this section dynamic */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Popular</h3>
          <a href="#" className="text-sm text-gray-400 hover:underline">
            View all
          </a>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-xl font-bold text-gray-300">01</span>
            <div>
              <p className="font-semibold">
                Style Tips Every Woman Should Know
              </p>
              <p className="text-xs text-gray-400">4 years ago</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl font-bold text-gray-300">02</span>
            <div>
              <p className="font-semibold">
                How lovely yellow is! It stands for the sun
              </p>
              <p className="text-xs text-gray-400">4 years ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Column 3: Labels */}
      {/* TODO: make this labels dynamic with proper routes */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Labels</h3>
        <div className="flex flex-wrap gap-3 text-sm text-gray-700">
          {[
            "Cars",
            "Fashion",
            "Food",
            "Life",
            "Sports",
            "Tech",
            "Technology",
            "Travel",
            "Video",
          ].map((label, idx) => (
            <span key={idx} className="cursor-pointer hover:underline">
              {label}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
