import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddPost from "./components/UserList";
import FetchPost from "./components/FetchPost";
import Homepage from "./container/HomePage";
import Counter from "./components/Counter";

function App() {
  const router = createBrowserRouter([
    {
      element: <Homepage />,

      children: [
        {
          path: "/",
          element: <AddPost />,
        },
        // {
        //   path: "/fetchpost",
        //   element: <FetchPost />,
        // },
        {
          path: "/counter",
          element: <Counter />,
        },
        {
          path: "*",
          element: "Page not Found",
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
