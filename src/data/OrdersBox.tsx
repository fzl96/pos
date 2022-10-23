// import needed icons
import { IoMdPricetag } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

const OrdersBox = [
  {
    title: "Sales",
    subtitle: "Total sales today",
    icon: <IoMdPricetag />,
    background: "bg-[#fdefef]",
    value: "Rp1.000.000",
  },
  {
    title: "Orders",
    subtitle: "Total orders today",
    icon: <MdOutlineShoppingCart />,
    background: "bg-[#f9f3df]",
    value: 50,
  },
];

export default OrdersBox;
