import {React, ReactDOM} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Student/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard/>
    }
  ])

  return (
    <RouterProvider className="App" router={router}>
        <Dashboard/>
    </RouterProvider>
  );
}

export default App;
