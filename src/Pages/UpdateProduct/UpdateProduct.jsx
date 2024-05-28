import { useLoaderData } from "react-router-dom";
import CustomizeProduct from "./CustomizeProduct";
import { useState } from "react";

const UpdateProduct = () => {
  const { data, setData } = useState([]);
  const allProductUpdateData = useLoaderData();

  // console.log(allProductUpdateData);

  // eslint-disable-next-line no-unused-vars
  const { _id, productTitle, price, imageUrl, description, date } =
    allProductUpdateData;

  const handleDelete = (deleteProductId) => {
    console.log(deleteProductId);

    fetch(`http://localhost:5000/delete-product/${deleteProductId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const remain = allProductUpdateData.filter(
          (item) => item._id != deleteProductId
        );

        console.log(remain);
        console.log(typeof data === Array);

        setData(remain);
      });
  };

  return (
    <>
      <div className="overflow-x-auto w-full px-16">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Action</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {allProductUpdateData?.map((item, index) => (
            <CustomizeProduct
              key={index}
              product={item}
              handleDelete={handleDelete}
            ></CustomizeProduct>
          ))}
        </table>
      </div>
    </>
  );
};

export default UpdateProduct;
