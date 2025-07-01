import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import About from "./AboutUs.jsx";
import Contact from "./ContactUs.jsx";
import User from "./User.jsx";
import Github, { githybInfoLoader } from "./Github.jsx";

// const Router = createBrowserRouter([
//   //“CreateBrowserRouter connects the layout... then it’s like saying: show what is told in the layout and replace the outlet with the first child.”
//   {
//     path: "/",
//     element: <Layout />, // “We first define a layout in a file, and because of that, the header and footer will be the same;
//     //  all the content inside will be changed due to the outlet.”
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> }, // When the route changes (e.g. from / to /about), only the component inside <Outlet /> updates. The layout (header/footer/etc.) stays untouched.
//       { path: "contactUs", element: <Contact /> },
//     ],
//   },
// ]);

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contactus" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route 
      loader={githybInfoLoader}
      path="github" 
      element={<Github />} 
      />
    </Route>
  )
);
//“RouterProvider helps in this... we
// used to pass App instead, now were passing the router.”
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
