"use client";
import { usePathname } from "next/navigation";

interface SidebarMenuItem {
  name: string;
  description: string;
  path: string;
  icon: JSX.Element;
}

const SidebarMenuItem = ({
  icon,
  path,
  name,
  description,
}: SidebarMenuItem) => {
  const pathName = usePathname();

  return (
    <a
      href={path}
      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${
        path === pathName && "bg-blue-800"
      }  hover:bg-white/5 transition ease-linear duration-150`}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{name}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {description}
        </span>
      </div>
    </a>
  );
};

export default SidebarMenuItem;
