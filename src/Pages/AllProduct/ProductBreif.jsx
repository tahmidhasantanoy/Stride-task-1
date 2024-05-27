import { useLoaderData } from "react-router-dom";

const ProductBreif = () => {
  const singleProduct = useLoaderData();

  const { productTitle, price, imageUrl, description, date } = singleProduct;

  console.log(singleProduct);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full">
        <img
          className="w-full h-56 object-cover"
          src={imageUrl}
          alt="Destination"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {productTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-2">${price}</p>
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="text-gray-500 text-sm">Date : {date}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductBreif;
