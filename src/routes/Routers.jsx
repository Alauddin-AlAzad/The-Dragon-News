import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layoutes/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";


const Routers = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:'',
                element:<Navigate to={'/category/01'}></Navigate>
            },
            {
                path:'/category/:id',
                element:<CategoryNews></CategoryNews>,
                loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
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