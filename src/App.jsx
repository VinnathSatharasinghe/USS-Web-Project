import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/pages/Home/Home"
import Nav from "./components/Navbar/Navbar"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/nav",
    element: <Nav />,
  },

  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
