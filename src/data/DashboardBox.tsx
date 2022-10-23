// import needed icons
import { IoMdPricetag } from "react-icons/io";
import { MdLocalDining, MdOutlineShoppingCart } from "react-icons/md";

const DashboardBox = [
  {
    title: "Sales",
    subtitle: "Total sales this month",
    icon: <IoMdPricetag />,
    background: "bg-[#ffefe2]",
    value: "Rp35.000.000",
  },
  {
    title: "Orders",
    subtitle: "Total orders this month",
    icon: <MdOutlineShoppingCart />,
    background: "bg-[#E6F5F9]",
    value: 2000,
  },
  {
    title: "Products",
    subtitle: "Number of products",
    icon: <MdLocalDining />,
    background: "bg-[#F4F6FA]",
    value: 26,
  },
];

export default DashboardBox;
