import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../components/Home';
import ErrorPage from '../pages/ErrorPage';
import ExploreGardeners from '../pages/ExploreGardeners';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import BrowseTips from '../pages/BrowseTips';
import TipDetails from '../pages/TipDetails';


const route = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element:<Home></Home>,
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ]
    },
    {
    path: "/explore-gardeners",
    element: <ExploreGardeners></ExploreGardeners>,
    },
    {
    path: "/browse-tips",
    element: <BrowseTips></BrowseTips>,
    },
    {
    path: "/browse-tips/:id",
    element: <TipDetails></TipDetails>,
    },
    {
    path: "/share-tip",
    element: <h2>share-tip</h2>,
    },
    {
    path: "/my-tips",
    element: <h2>my-tips</h2>,
    },
    {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
    },
])

export default route;