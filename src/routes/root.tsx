import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="h-full grid grid-cols-[auto_1fr]">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
