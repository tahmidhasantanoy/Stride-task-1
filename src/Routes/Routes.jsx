import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import DashBoard from "../Components/Layouts/DashBoard";
import AllProduct from "../Pages/AllProduct/AllProduct";
import ProductBreif from "../Pages/AllProduct/ProductBreif";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/add-products",
        element: <AddProducts />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "/dashboard/allProduct",
        element: <AllProduct />,
        loader: () => fetch("http://localhost:5000/get-all-product"),
      },
      {
        path: "/dashboard/detailsProduct/:id",
        element: <ProductBreif />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/get-single-product/${params.id}`),
      },
      {
        path: "/dashboard/update-product",
        element: <UpdateProduct />,
        loader: () => fetch("http://localhost:5000/get-all-product"),
      },
    ],
  },
]);

export default router;
