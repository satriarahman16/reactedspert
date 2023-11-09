import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import ProductPage from "./pages/product";
import CheckoutPage from "./pages/checkout";
import DetailPage from "./pages/detail";
import { Provider } from "react-redux";
import store from "./store";

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

const MateriRedux = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={routes}/>
        </Provider>
    )
}

export default MateriRedux;