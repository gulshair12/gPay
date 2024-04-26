import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ConfirmOrderPage from "./Pages/ConfirmOrderPage";
import SuccesPage from "./Pages/SuccesPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ConfirmOrderPage />,
    },
    {
      path: "/success",
      element: <SuccesPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
