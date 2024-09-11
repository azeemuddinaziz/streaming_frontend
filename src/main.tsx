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
import Subscriptions from "./pages/Subscriptions.tsx";
import SearchResults from "./pages/SearchResults.tsx";
import Upload from "./pages/Upload.tsx";
import RefreshToken from "./pages/RefreshToken.tsx";

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
      {
        path: "/results",
        element: <SearchResults />,
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
      {
        path: "/refresh",
        element: <RefreshToken />,
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
        path: "/subscriptions",
        element: <Subscriptions />,
      },
      {
        path: "/history",
        element: <div>History</div>,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
  {
    element: <ProtectedRoute isSimple />,
    errorElement: <Error />,
    children: [
      {
        path: "/upload",
        element: <Upload />,
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
