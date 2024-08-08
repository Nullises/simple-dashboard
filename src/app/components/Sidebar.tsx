import Image from "next/image";
import React from "react";
import { WiThermometer } from "react-icons/wi";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosAddCircle } from "react-icons/io";
import { CgPokemon } from "react-icons/cg";
import SidebarMenuItem from "./SidebarMenuItem";

const sidebarMenuItems = [
  {
    name: "Dashboard",
    description: "Manage your things",
    path: "/dashboard//main",
    icon: <LuLayoutDashboard size={30} />,
  },
  {
    name: "Counter",
    description: "Local state",
    path: "/dashboard/counter",
    icon: <IoIosAddCircle size={30} />,
  },
  {
    name: "Pokemons",
    description: "Static Pokemon List",
    path: "/dashboard/pokemons",
    icon: <CgPokemon size={30} />,
  },
  {
    name: "Favorite Pokemons",
    description: "Favorite Pokemons",
    path: "/dashboard/favorites",
    icon: <CgPokemon size={30} />,
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0  overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <WiThermometer className="mr-1" />
          <span>FEBRIS</span>
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              src={
                "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              }
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          </span>
          <span className="text-sm md:text-base font-bold">Ulises Vargas</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {sidebarMenuItems.map((menuItem) => (
          <SidebarMenuItem
            key={menuItem.name}
            name={menuItem.name}
            description={menuItem.description}
            icon={menuItem.icon}
            path={menuItem.path}
          />
        ))}
      </div>
    </div>
  );
};
