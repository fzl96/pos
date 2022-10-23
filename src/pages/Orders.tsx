import { useEffect } from "react";

const Orders = () => {
  useEffect(() => {
    document.title = "POS - Orders";
  }, []);
  return <div>Orders</div>;
};
export default Orders;
