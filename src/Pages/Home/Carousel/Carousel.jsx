import Slider from "react-slick";

const FeaturedDestinations = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const destinations = [
    {
      name: "Paris, France",
      image: "./../../../public/images/pink-car.png",
      description: "The city of light.",
      link: "/destinations/paris",
    },
    {
      name: "Tokyo, Japan",
      image: "./../../../../public/images/4043.png",
      description: "A city of contrasts.",
      link: "/destinations/tokyo",
    },
    {
      name: "New York, USA",
      image: "../../../../public/images/0abca295badd4_image.webp",
      description: "The city that never sleeps.",
      link: "/destinations/new-york",
    },
    {
      name: "Sydney, Australia",
      image: "../../../../public/images/00ea58560_112222.jpg",
      description: "Home of the Sydney Opera House.",
      link: "/destinations/sydney",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Featured Destinations
      </h2>
      <Slider {...settings}>
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white"
          >
            <img
              className="w-full h-48 object-cover"
              src={destination.image}
              alt="Product"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Product Title</div>
              <p className="text-gray-700 text-base">
                Here is a brief description of the product. It can be a couple
                of sentences long.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between items-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Edit
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedDestinations;
