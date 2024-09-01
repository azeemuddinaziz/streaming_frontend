import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "@/routes/root.tsx";
import ErrorPage from "@/pages/Error";
import Home from "@/pages/Home";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
