import { BiLogOut } from "react-icons/bi";
import {
  MdLocalDining,
  MdShoppingCart,
  MdSpaceDashboard,
} from "react-icons/md";

interface Props {
  title: string;
  icon: any;
  path: string;
  children?: Props[];
}

const SideBarData: Props[] = [
  {
    title: "Dashboard",
    icon: <MdSpaceDashboard />,
    path: "/",
  },
  {
    title: "Orders",
    icon: <MdShoppingCart />,
    path: "/orders",
  },
  {
    title: "Menus",
    icon: <MdLocalDining />,
    path: "/menus",
  },
  {
    title: "Logout",
    icon: <BiLogOut />,
    path: "/login",
  },
];

export default SideBarData;
