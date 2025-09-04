import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../components/Home';
import ErrorPage from '../pages/ErrorPage';

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
    path: "/explore-gardeners",
    element: <h2>explore-gardeners</h2>,
    },
    {
    path: "/browse-tips",
    element: <h2>browse-tips</h2>,
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