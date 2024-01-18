
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent  from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ErrorContact from "./components/ErrorContact";
import RestaurantMenu from "./components/RestaurantMenu";



export const AppLayout = () => {
  return (
    <div className="App">
      <HeaderComponent />
      {/*pass the children route*/}
      <Outlet />
    </div>
  );
};

 

const appRouter = createBrowserRouter( [
  {
    path:"/",
    element: <AppLayout />,
    
    children: [
      {
        path:"/",
        element: <BodyComponent />,
        errorElement: <Error />
      },
      {
        path:"/About",
        element:  <About />,
        errorElement: <ErrorContact /> 
        // not working 
      },
      {
        path:"/Contact",
        element:  <Contact />
      },
      {
        path:"/restaurants/:resId",
        // :resId is dynamic route and unique id
        element: <RestaurantMenu />
      }
    ]
  },

] );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router= {appRouter}/>);


