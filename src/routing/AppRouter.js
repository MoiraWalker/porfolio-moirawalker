import React from 'react'
import { useRoutes } from 'react-router-dom'
import {
    HomePage, AboutPage, ArtPage, CodePage, DesignPage
} from '../pages/index'

export const AppRouter = () => {
    const routes = useRoutes([
      { path: "/", element: <HomePage/> },
      { path: "/about", element: <AboutPage/> },
      { path: "/design", element: <DesignPage/> },
      { path: "/art", element: <ArtPage/> },
      { path: "/code", element: <CodePage/> },
    ]);
  return routes
};