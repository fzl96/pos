import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SideBarData from "../data/SideBarData";

interface Props {
  children: React.ReactNode;
}

const Shell: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(false); // Close the navigation panel
  }, [pathname]);

  return (
    <>
      <div className="lg:w-96 md:w-80 fixed hidden lg:block md:block h-full bg-white border-r-2 border-[#D1D5DB] px-20">
        <div className="flex flex-col pt-40 ">
          <Link to={SideBarData[0].path} key={SideBarData[0].path}>
            <div
              key={SideBarData[0].path}
              className="flex items-center mb-5 bg-[#111827] px-10 py-3 rounded-xl"
            >
              <div className="flex  items-center gap-5 text-white">
                <p className="text-2xl">{SideBarData[0].icon}</p>
                <h1 className="text-lg font-semibold">
                  {SideBarData[0].title}
                </h1>
              </div>
            </div>
          </Link>
          <Link to={SideBarData[1].path} key={SideBarData[1].path}>
            <div
              key={SideBarData[1].path}
              className="flex items-center mb-5 px-10 py-3"
            >
              <div className="flex  items-center gap-5">
                <p className="text-2xl">{SideBarData[1].icon}</p>
                <h1 className="text-lg font-semibold">
                  {SideBarData[1].title}
                </h1>
              </div>
            </div>
          </Link>
          <Link to={SideBarData[2].path} key={SideBarData[2].path}>
            <div
              key={SideBarData[2].path}
              className="flex items-center mb-5 px-10 py-3"
            >
              <div className="flex  items-center gap-5">
                <p className="text-2xl">{SideBarData[2].icon}</p>
                <h1 className="text-lg font-semibold">
                  {SideBarData[2].title}
                </h1>
              </div>
            </div>
          </Link>

          {/* {SideBarData.map((item, index) => {
              return (
                <Link to={item.path} key={index}>
                  <div
                    key={index}
                    className="flex items-center  mb-7 px-20 py-2"
                  >
                    <div className="flex  items-center gap-5">
                      <p className="text-2xl">{item.icon}</p>
                      <h1 className="text-lg font-semibold">{item.title}</h1>
                    </div>
                  </div>
                </Link>
              );
            })} */}
        </div>
      </div>
      <div
        className={`bg-white lg:ml-96 min-h-screen lg:pb-0 md:pb-0 pb-[6rem] lg:p-5`}
      >
        {children}
      </div>
    </>
  );
};

const AppLayout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Shell>
      <Outlet />
    </Shell>
  );
};
export default AppLayout;
