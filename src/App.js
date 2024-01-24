import React, { lazy, Suspense , useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ErrorContact from "./components/ErrorContact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

//import Grocery from "./components/Grocery";

// // Code splitting /chunking
// import is function takes the path of Grocery Component
// lazy and Suspense
const Grocery = lazy(() => {
  import("./components/Grocery");
});

export const AppLayout = () => {

  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Akshay Saini",
    };
    setUserName(data.name);
  }, []);


  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
    <div className="App">
      <HeaderComponent />
      {/*pass the children route*/}
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <BodyComponent />,
        errorElement: <Error />,
      },
      {
        path: "/About",
        element: <About />,
        errorElement: <ErrorContact />,
        // not working
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1> Loading.. </h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        // :resId is dynamic route and unique id
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
