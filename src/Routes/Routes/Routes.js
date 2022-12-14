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
import PageNotFound from '../../components/Shared/Others/PageNotFound';
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
                loader: () => fetch('https://sadika-assignment10-server.vercel.app/course-categories')
            },
            {

                path: '/courseCategory',
                element: <CourseCategory></CourseCategory>,
                loader: () => fetch('https://sadika-assignment10-server.vercel.app/courses')


            },
            {
                path: '/category/:id',
                element: <CourseCategory></CourseCategory>,
                loader: ({ params }) => fetch(`https://sadika-assignment10-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`https://sadika-assignment10-server.vercel.app/courses/${params.id}`)
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
                path: '/premium/:id',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>,
                loader: ({ params }) => fetch(`https://sadika-assignment10-server.vercel.app/courses/${params.id}`)
            }

        ]

    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
]) 