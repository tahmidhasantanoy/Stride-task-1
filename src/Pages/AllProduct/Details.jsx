/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Details = ({ product }) => {
  const { _id,productTitle, date, price, imageUrl } = product;

  return (
    <tbody className="sm:shadow-lg md:shadow-xl">
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div
                className="mask 
          mask-squircle w-24 h-24"
              >
                <img src={imageUrl} alt="Product image here" />
              </div>
            </div>
          </div>
        </td>
        <td className="font-bold">{productTitle}</td>
        <td> ${price}</td>
        <td></td>
        <td></td>
        <th>
          <button className="btn btn-info btn-sm hover:text-white">
            <Link to={`/dashboard/detailsProduct/${_id}`}>details</Link>
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default Details;
