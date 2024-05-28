import { useLoaderData } from "react-router-dom";
import CustomizeProduct from "./CustomizeProduct";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const { data, setData } = useState([]);
  const { X, setX } = useState([]);

  const allProductUpdateData = useLoaderData();
  console.log(X);

  // eslint-disable-next-line no-unused-vars
  const { _id, productTitle, price, imageUrl, description, date } =
    allProductUpdateData;

  const handleDelete = (deleteProductId) => {
    Swal.fire({
      title: "Do you want to delete this?",
      confirmButtonText: "ok",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Delete successfully!", "", "success");
        console.log(deleteProductId);

        fetch(`http://localhost:5000/delete-product/${deleteProductId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = allProductUpdateData.filter(
              (item) => item._id !== deleteProductId
            );
            setData(remaining);
          })
          .catch((err) => console.log(err.message));
      }
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
              deleteId={setX}
            ></CustomizeProduct>
          ))}
        </table>
      </div>
    </>
  );
};

export default UpdateProduct;
