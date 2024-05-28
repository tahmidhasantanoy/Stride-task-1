/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CustomizeProduct = ({ product, handleDelete }) => {
  const { _id, productTitle, price, imageUrl } = product;

  //   const handleDelete = (deleteProductId) => {
  //     console.log(deleteProductId);

  //     fetch(`http://localhost:5000/delete-product/${deleteProductId}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   };

  return (
    <>
      <tbody className="shadow-xl rounded-2xl">
        <tr>
          <th className="">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-circle btn-outline "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className=".avatar">
                <div className="mask mask-squircle w-24 h-24">
                  <img src={imageUrl} alt="Product image here" />
                </div>
              </div>
            </div>
          </td>
          <td>
            <div>
              <div className="font-bold">{productTitle}</div>
            </div>
          </td>
          <td className="" style={{ marginLeft: "100px" }}>
            ${price}
            <br />
          </td>
          <th>
            <Link to={`/dashboard/update-single-product/${_id}`}>
              <button className="btn btn-sm btn-info hover:text-white">
                Update
              </button>
            </Link>
          </th>
        </tr>
      </tbody>
    </>
  );
};

export default CustomizeProduct;
