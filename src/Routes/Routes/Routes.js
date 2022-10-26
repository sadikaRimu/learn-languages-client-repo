import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../components/Blog/Blog';
import Category from '../../components/Category/Category';
import CourseCategory from '../../components/CourseCategory/CourseCategory';
import Courses from '../../components/Courses/Courses';
import CoursesCard from '../../components/CoursesCard/CoursesCard';
import FAQ from '../../components/FAQ/FAQ';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login/Login';
import Register from '../../components/Login/Register/Register';
import Premium from '../../components/Premium/Premium';
import Main from '../../layout/Main';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/course-categories')
            },
            {
                //path: '/courseCategory/:id',
                path: '/courseCategory',
                element: <CourseCategory></CourseCategory>,
                loader: () => fetch('http://localhost:5000/courses')
                // loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },
            {
                path: '/category/:id',
                element: <CourseCategory></CourseCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/premium',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>
            },
            // {
            //     path: '/profile',
            //     element: <PrivateRoute><Profile></Profile></PrivateRoute>
            // }
        ]
    }
]) 