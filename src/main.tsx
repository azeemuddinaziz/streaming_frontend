import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/index.css";
import { ThemeProvider } from "@/components/ThemeProvider.tsx";
import Error from "@/pages/Error.tsx";
import Home from "@/pages/Home.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import { ProtectedRoute } from "@/layouts/ProtectedRoute.tsx";
import Login from "@/pages/Login.tsx";
import Register from "@/pages/Register.tsx";
import PlayVideo from "@/pages/PlayVideo.tsx";
import SimpleLayout from "@/layouts/SimpleLayout.tsx";
import { AuthProvider } from "@/context/AuthContext.tsx";
import Profile from "./pages/Profile.tsx";
import Logout from "./pages/Logout.tsx";

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
    errorElement: <Error />,
    children: [
      {
        path: "/profile/:username",
        element: <Profile />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
