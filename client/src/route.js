import React from "react";
import App from "./App";
import File from "./components/File";
import FilesList from "./components/FileList";
import Login from "./pages/Login";
import Register from "./pages/Register";
 
const Routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "file",
    element: <File />,
  },
  {
    path: "/filelist",
    element: <FilesList />,
  },
  {
    path: "/filelist:id",
    element: <FilesList />,
  },
];

export default Routes;
