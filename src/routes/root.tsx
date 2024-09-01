import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
