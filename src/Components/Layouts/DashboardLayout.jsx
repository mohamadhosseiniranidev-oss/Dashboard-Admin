import React from "react";
import Sidebar from "./../../features/Sidebar/Sidebar";
import Topbar from "../../features/Topbar/Topbar.jsx";
import { Outlet } from "react-router";

function DashboardLayout() {
  return (
    <main id="root" className="relative">
      <Topbar />
      <section className="w-full flex h-full">
        <Sidebar />

        <div className="mt-[10vh] mr-[274px] bg-[var(--bg-primary)] w-full flex justify-center items-center">

          <div className="m-16 w-full min-h-[100vh]">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
}

export default DashboardLayout;
