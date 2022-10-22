import { IoMdPricetag } from "react-icons/io";
import { MdOutlineShoppingCart, MdLocalDining } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="text-2xl font-semibold px-20 py-[4rem]">
      <div>
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <h1 className="text-lg font-medium text-[#5c6473] mb-5">Hello, User</h1>
      </div>
      <div className="grid grid-cols-3 gap-5 pt-5">
        <div className="bg-[#ffefe2] rounded-3xl p-5 shadow-sm flex flex-col gap-1">
          <h1 className="text-3xl">
            <IoMdPricetag />
          </h1>
          <h1 className="font-bold text-2xl">Sales</h1>
          <p className="text-base font-normal text-[#6B7280]">
            Total sales this month
          </p>
          <h1 className="font-bold text-xl mt-7 mb-3">Rp35.000.000</h1>
        </div>
        <div className="bg-[#E6F5F9] rounded-3xl p-5 shadow-sm flex flex-col gap-1">
          <h1 className="text-3xl">
            <MdOutlineShoppingCart />
          </h1>
          <h1 className="font-bold text-2xl">Orders</h1>
          <p className="text-base font-normal text-[#6B7280]">
            Total orders this month
          </p>
          <h1 className="font-bold text-xl mt-7 mb-3">2000</h1>
        </div>
        <div className="bg-[#F4F6FA] rounded-3xl p-5 shadow-sm flex flex-col gap-1">
          <h1 className="text-3xl">
            <MdLocalDining />
          </h1>
          <h1 className="font-bold text-2xl">Products</h1>
          <p className="text-base font-normal text-[#6B7280]">
            Number of products
          </p>
          <h1 className="font-bold text-xl mt-7 mb-3">26</h1>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
