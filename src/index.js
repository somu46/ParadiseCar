import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Root from './Root/Root';
import { AboutUs, ContactUs, Home } from './Pages';



const Route =createBrowserRouter([
  {
    path:"",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/contact",
        element:<ContactUs/>

      },
      {
        path:"/about",
        element:<AboutUs/>
      },
      {
        path:"*",
        element:<div>404 page not Found</div>
      },
    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Route}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

