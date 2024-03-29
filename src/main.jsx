import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import PrivateRoute from './Layout/PrivateRoute';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import ProductPage from './Components/ProductPage';
import Checkout from './Pages/Checkout';
import Profile from './Pages/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        index: true,
        element: <Products />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: 'product-page',
        element: <ProductPage />
      },
      {
        path: "home",
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: 'checkout',
            element: <Checkout />
          },
          {
            path: 'profile',
            element: <Profile />
          }
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

