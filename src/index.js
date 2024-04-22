import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import { Provider } from 'react-redux';
import { store } from './store';
import Creators from './Components/Creators/Creators';
import Blogs from './Components/Blogs/Blogs';
import Faq from './Components/Faq/Faq';
import User from './Components/User/User';
import Blog from './Components/Blog/Blog';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/creators",
        element: <Creators />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/user/:id",
        element: <User />
      },
      {
        path: "/blogs/:id",
        element: <Blog />
      },
      {
        path: "/faq",
        element: <Faq />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
