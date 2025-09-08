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
import ShareTips from '../pages/ShareTips';
import MyTips from '../pages/MyTips';
import UpdateTip from '../components/UpdateTip';
import PrivateRoute from '../provider/PrivateRoute';


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
    element: 
    <PrivateRoute>
        <TipDetails></TipDetails>
    </PrivateRoute>
    },
    {
    path: "/share-tip",
    element:
     <PrivateRoute>
        <ShareTips></ShareTips>
    </PrivateRoute>
    },
    {
    path: "/my-tips",
    element: 
    <PrivateRoute>
        <MyTips></MyTips>
    </PrivateRoute>
    },
    {
    path: "/update-tip/:id",
    element: 
    <PrivateRoute>
        <UpdateTip></UpdateTip>
    </PrivateRoute>
    },
    {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
    },
])

export default route;