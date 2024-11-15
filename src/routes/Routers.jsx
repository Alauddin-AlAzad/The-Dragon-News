import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layoutes/HomeLayout";


const Routers = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>
    },
    {
        path:'/news',
        element: <h1>News Layout</h1>
    },
    {
        path:'/auth',
        element: <h1>login</h1>
    },
    {
        path:'*',
        element: <h1>Error</h1>
    }
])
   

export default Routers;