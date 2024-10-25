import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import './index.css';

import Root from './Root/Root';
import { Services, ContactUs,  About, Error , Cars , Pricing , Faq} from './Pages';
import App from './App';




const Route =createBrowserRouter([
  {
    path:"",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<App/>
      },
      {
        path:"/contactUs",
        element:<ContactUs/>

      },
      {
        path:"/about",
        element:<About/>
         
      },
       {
        path:"/services",
        element:<Services/>
       },

       {
        path:"/Pricing",
        element:<Pricing/>
       },
       {
        path:"/Cars",
        element:<Cars/>
       },
       {
        path:"/Faqs",
        element:<Faq/>
       },
      
      {
        path:"*",
        element:<Error/>
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

// If you want to start measuring performance in your app, pass a functio
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

