import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import SideBarData from "../data/SideBarData";

interface Props {
  children: React.ReactNode;
}

const Shell: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();

  const navLinkClass =
    "flex items-center font-medium gap-4 px-8 py-3 rounded-lg ";

  return (
    <>
      <div className="lg:w-96 fixed hidden lg:block h-screen bg-white border-r-2 border-[#D1D5DB]">
        <ul className="flex flex-col h-full px-[5.5rem] pt-[8rem] pb-20">
          {SideBarData.map((item, index) => (
            <li key={index} className="last:mt-auto mb-2 text-[#5f6368]">
              <NavLink
                to={item.path}
                className={
                  navLinkClass +
                  (pathname === item.path
                    ? " bg-[#111827] rounded-xl text-white"
                    : " hover:bg-[#F3F4F6] hover:text-black")
                }
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-base">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`bg-white lg:ml-96 min-h-screen lg:pb-0 md:pb-0 pb-[6rem] lg:py-[3rem] lg:px-20 py-20 px-5`}
      >
        {children}
      </div>
    </>
  );
};

const AppLayout: React.FC = () => {
  return (
    <Shell>
      <Outlet />
    </Shell>
  );
};
export default AppLayout;
