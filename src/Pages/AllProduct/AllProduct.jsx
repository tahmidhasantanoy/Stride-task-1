import { useLoaderData } from "react-router-dom";
import Details from "./Details";

const AllProduct = () => {
  const allProductData = useLoaderData();

  return (
    <div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Product image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th></th>
                <th></th>
                <th>Action</th>
              </tr>
            </thead>
            {allProductData.map((item) => (
              <Details key={item._id} product={item}></Details>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
