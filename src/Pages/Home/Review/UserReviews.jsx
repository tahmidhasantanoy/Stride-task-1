import Slider from "react-slick";

const UserReviewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const reviews = [
    {
      name: "Jane Doe",
      rating: 5,
      review:
        "Amazing experience! The destination was beautiful and the service was excellent.",
      title: "Travel Enthusiast",
    },
    {
      name: "John Smith",
      rating: 4,
      review: "Great trip overall, but the hotel could have been better.",
      title: "Adventure Seeker",
    },
    {
      name: "Alice Johnson",
      rating: 5,
      review: "Best vacation ever! Highly recommend this travel agency.",
      title: "Globetrotter",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-4 text-center">
        A word from our customers
      </h2>
      <p className="text-center text-gray-600 mb-8">
        We’ve been helping businesses do their best since 2018.
      </p>
      <div className="max-w-2xl mx-auto">
        <Slider {...settings} className="transition">
          {reviews.map((review, index) => (
            <div key={index} className="bg-black px-4 flex flex-col rounded-xl">
              <div className="flex flex-col .justify-between items-center mb-4">
                <div className=" text-white rounded-lg overflow-hidden shadow-lg p-6">
                  <p className="text-lg mb-2 text-center">"{review.review}"</p>
                </div>
                <div className="flex items-center">
                  <div className="flex text-center">
                    {[...Array(5)].map((star, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 fill-current ${
                          i < review.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09L5.178 12 1 8.545l5.904-.545L10 2l3.096 6L19 8.545 14.822 12l1.056 6.09z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">{review.name}</h3>
                  <p className="text-sm">{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default UserReviewsCarousel;
