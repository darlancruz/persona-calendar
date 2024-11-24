import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Calendar from "./components/Calendar"


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import calendarLoader from './loaders/calendarLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/calendar/:gameId",
    loader: calendarLoader,
    element: <Calendar />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
