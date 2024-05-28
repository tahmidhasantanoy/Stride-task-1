import { useLoaderData } from "react-router-dom";
import CustomizeProduct from "./CustomizeProduct";

const UpdateProduct = () => {
  const allProductUpdateData = useLoaderData();

  const { _id, productTitle, price, imageUrl, description, date } =
    allProductUpdateData;

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
          {allProductUpdateData.map((item, index) => (
            <CustomizeProduct key={index} product={item}></CustomizeProduct>
          ))}
        </table>
      </div>
    </>
  );
};

export default UpdateProduct;
