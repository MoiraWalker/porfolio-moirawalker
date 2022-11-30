import React from 'react'
import { useRoutes } from 'react-router-dom'
import {
    HomePage, AboutPage
} from '../pages/index'

export const AppRouter = () => {
    const routes = useRoutes([
      { path: "/", element: <HomePage/> },
      { path: "/about", element: <AboutPage/> },
    ]);
  return routes
};

