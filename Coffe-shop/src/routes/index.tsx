import React from 'react';
import { Main } from "../pages/Main";
import { MainLayout } from '../layout/MainLayout';
 

export const routes = [
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      {
        path: "/", 
        element: <Main />,
      },
      
    ]
  }
];