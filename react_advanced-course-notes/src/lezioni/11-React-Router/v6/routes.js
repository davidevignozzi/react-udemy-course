import React from 'react';
import About from './screen/About';
import Home from './screen/Home';
import Profile from './screen/Profile';
import ErrorPage from './screen/ErrorPage';
import SingleProfile from './screen/SingleProfile';
import MyProfile from './screen/MyProfile';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/profile',
    element: <Profile />,
    children: [
      {
        path: 'me',
        element: <MyProfile />,
      },
      {
        path: ':id',
        element: <SingleProfile />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];
