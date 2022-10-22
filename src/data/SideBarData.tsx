import { MdDashboard } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { AiFillBook } from 'react-icons/ai'
import { MdLocalDining } from 'react-icons/md'

interface Props {
  title: string;
  icon: any;
  path: string;
  children?: Props[];
}

const SideBarData: Props[] = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    path: "/",
  },
  {
    title: "Orders",
    icon: <FiShoppingCart />,
    path: "/orders",
  },
  {
    title: "Menus",
    icon: <MdLocalDining />,
    path: "/menus",
  }
]

export default SideBarData;