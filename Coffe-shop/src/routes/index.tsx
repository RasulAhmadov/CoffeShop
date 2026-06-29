import React from 'react';
import { Main } from "../pages/Main/"; // Fiqurlu mötərizə olmadan, böyük hərflə import edirik

export const routes = [
  {
    path: "/",
    element: <Main />, // Burada mütləq böyük hərflə <Main /> yazılmalıdır!
  }
];