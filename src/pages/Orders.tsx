import { useEffect } from "react";
import OrdersBox from "../data/OrdersBox";
import TableData from "../data/TableData";
import { HiPlus } from 'react-icons/hi'

const Orders = () => {
  useEffect(() => {
    document.title = "POS - Orders";
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl">Orders</h1>
      </div>
      <div className="flex flex-col gap-5">
        <ul className="grid md:grid-cols-2 grid-cols-1 gap-5 pt-5">
          {OrdersBox.map((item, index) => (
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
      </div>
      <div className="flex mt-10 justify-end">
        <button className="bg-[#111827] py-2 px-4 text-white text-sm rounded-lg flex items-center gap-2">
          <span className="text-lg"><HiPlus /></span>
          New order
        </button>
      </div>
      <div className="bg-[#fafbfb] p-5 rounded-2xl shadow-lg">
        <table className="w-full">
          <thead>
            <tr className="">
              <th className="p-3 text-sm font-bold tracking-wide text-left">
                ID
              </th>
              <th className="p-3 text-sm font-bold tracking-wide text-left">
                No.
              </th>
              <th className="p-3 text-sm font-bold tracking-wide text-left">
                Date
              </th>
              <th className="p-3 text-sm font-bold tracking-wide text-left">
                Time
              </th>
              <th className="p-3 text-sm font-bold tracking-wide text-left">
                Total
              </th>
              <th className="p-3 text-sm font-bold tracking-wide text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="">
            {TableData.map((item, index) => (
              <tr
                className=" border-[#e5e7eb] cursor-pointer rounded-lg hover:bg-[#f3f4f6]"
                onClick={() => console.log("test")}
                key={item.id}
              >
                <td className="p-3 text-sm text-gray-700">{item.id}</td>
                <td className="p-3 text-sm text-gray-700">
                  {item.tableNumber}
                </td>
                <td className="p-3 text-sm text-gray-700">{item.date}</td>
                <td className="p-3 text-sm text-gray-700">{item.time}</td>
                <td className="p-3 text-sm text-gray-700">{item.total}</td>
                <td className="p-3 text-sm"><span className={`text-white py-1 px-2 rounded-md ${item.status === "Completed" ? "bg-[#7bcd80]" : "bg-[#fee07a]"}`}>{item.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Orders;
