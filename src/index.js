import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import TripsList from './components/TripsList';
import TripDetail from './components/TripDetail';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './components/Nav';

const router = createBrowserRouter([

  {
    path: "/",
    element: <>
      <App />
    </>,
    children: [
    {
      path: "trips",
      element: <TripsList />,
    },
    {
      path: "trips/:id",
      element: <TripDetail />,
    },]
  },
  
  
])
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
