import { RiPlanetLine } from "react-icons/ri";
import { NavLink, Link } from "react-router";
import { useState } from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-[#030207] border-b-4 border-[#04080C]">
      <div className="flex items-center gap-2">
        <span className="border border-[#79CC66] bg-[#79CC66] rounded-full  text-gray-500 p-2 hover:shadow-[0_0_20px_rgba(121,204,102,0.8)] transition-shadow cursor-pointer">
          <RiPlanetLine />
        </span>
        <span className="text-[#F2F2EF] font-bold">
          <h1>R&M Explorer</h1>
        </span>
      </div>
      <div className="flex items-center gap-6 text-[#969994] text-[13px]">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `pb-0.5 border-b-2 transition-colors ${
              isActive
                ? "border-[#79CC66] text-[#79CC66]"
                : "border-transparent text-[#969994] hover:text-white"
            } `
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/characters"}
          className={({ isActive }) =>
            `pb-0.5 border-b-2 transition-colors ${
              isActive
                ? "border-[#79CC66] text-[#79CC66]"
                : "border-transparent text-[#969994] hover:text-white"
            } `
          }
        >
          Characters
        </NavLink>
        <Link
          to={"/characters"}
          className=" font-bold border rounded-3xl border-[#79CC6] px-5 py-1.5 bg-[#79cc66] border-[#79cc66] hover:shadow-[0_0_20px_rgba(121,204,102,0.8)] transition-shadow"
        >
          Explore
        </Link>
      </div>
    </nav>
  );
}
