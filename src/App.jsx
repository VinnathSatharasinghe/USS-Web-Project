import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/pages/Home/Home"




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
