import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import ProductPage from "./pages/product";
import CheckoutPage from "./pages/checkout";
import DetailPage from "./pages/detail";

const routes = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [
        {
           index: true,
           element: <ProductPage/> 
        },
        {
            path: 'detail/:id',
            element: <DetailPage/>
        },
        {
            path: 'checkout',
            element: <CheckoutPage/>
        },
    ]
}])

const MateriRestRouter = () => {
    return (
        <RouterProvider router={routes}/>
    )
}

export default MateriRestRouter;