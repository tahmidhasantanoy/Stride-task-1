const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center py-96"
      style={{ backgroundImage: "url('images/scenic-destination.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative .z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg md:text-2xl mb-6 md:w-[700PX] text-center">
          Explore top destinations, book exclusive experiences, and share your
          travel stories.
        </p>

        <div className="mt-6 space-x-4">
          <a
            href="/learn-more"
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded"
          >
            Learn More
          </a>
          <a
            href="/sign-up"
            className="bg-orange-500 hover:bg-orange-400 px-4 py-2 rounded"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
