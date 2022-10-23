import { useEffect } from "react";
import LineChart from "../components/LineChart";
import DashboardBox from "../data/DashboardBox";

const Dashboard = () => {
  useEffect(() => {
    document.title = "POS - Dashboard";
  }, []);

  return (
    <div className="text-2xl font-semibold">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <h1 className="text-lg font-medium text-[#5c6473] mb-5">Hello, User</h1>
      </div>
      <div className="flex flex-col gap-5">
        <ul className="grid md:grid-cols-3 grid-cols-2 gap-5 pt-5">
          {DashboardBox.map((item, index) => (
            <li
              key={index}
              className={`flex flex-col first:md:col-span-1 first:col-span-full gap-5 p-5 rounded-2xl ${item.background} shadow-lg`}
            >
              <div className="flex items-center gap-5">
                <div className="flex flex-col">
                  <h1 className="text-3xl">{item.icon}</h1>
                  <h1 className="font-bold text-xl mt-2">{item.title}</h1>
                  <h1 className="text-sm font-medium text-[#5c6473]">
                    {item.subtitle}
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-xl">{item.value}</h1>
                <div className="flex items-center justify-center w-8 h-8 rounded-md"></div>
              </div>
            </li>
          ))}
        </ul>
        <div className="rounded-3xl bg-[#eefcef] w-full h-[300px] md:h-[426px] mb-5 p-7 shadow-lg">
          <LineChart />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
