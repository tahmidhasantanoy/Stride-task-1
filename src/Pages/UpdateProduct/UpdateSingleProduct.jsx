import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSingleProduct = () => {
  const updateData = useLoaderData();

  const { _id,productTitle, price, imageUrl, description, date } = updateData;

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const productTitle = form.productTitle.value;
    const imageUrl = form.imageUrl.value;
    const price = parseInt(form.price.value);
    const description = form.description.value;
    const date = form.date.value;


    const updateProductInfo = {
      productTitle,
      price,
      imageUrl,
      description,
      date,
    };

    //add a toy data to db
    fetch(`http://localhost:5000/update-single-product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProductInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Your product information is Updated");
      })
      .catch((err) => console.log(err.message));
  };


  return (
    <div className="px-40 py-20">
      <h3 className="text-5xl text-center font-semibold text-slate-300 mb-12">
        Enter your product details information{" "}
      </h3>
      <form onSubmit={handleUpdateProduct}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Product Title
            </label>
            <input
              defaultValue={productTitle}
              type="text"
              name="productTitle"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter product Title"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Production date
            </label>
            <input
              defaultValue={date}
              type="date"
              name="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter production date"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Price
            </label>
            <input
              defaultValue={price}
              type="number"
              name="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter the product price"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Product image Url
            </label>
            <input
              defaultValue={imageUrl}
              type="text"
              name="imageUrl"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product image Url"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description
          </label>
          <input
            defaultValue={description}
            type="text"
            name="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Deatils about the product"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            I agree with the{" "}
            <a href="#" className="text-info hover:underline dark:text-info">
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button className="btn btn-active btn-info text-white">Submit</button>
      </form>
    </div>
  );
};

export default UpdateSingleProduct;
