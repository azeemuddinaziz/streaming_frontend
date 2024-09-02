import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/index.css";
import { ThemeProvider } from "@/components/ThemeProvider.tsx";
import Error from "@/pages/Error.tsx";
import Home from "@/pages/Home.tsx";
import MainLayout from "./routes/MainLayout.tsx";
import { ProtectedRoute } from "@/routes/ProtectedRoute.tsx";
import Login from "@/pages/Login.tsx";
import Register from "@/pages/Register.tsx";
import PlayVideo from "./pages/PlayVideo.tsx";
import SimpleLayout from "./routes/SimpleLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:videoId",
        element: <PlayVideo />,
      },
    ],
  },
  {
    element: <SimpleLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/protected",
        element: <div>Protected</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
