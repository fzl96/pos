// import useffect
import { useEffect } from "react";

const Menus = () => {
  useEffect(() => {
    document.title = "POS - Menus";
  }, []);
  return (
    <div>Menus</div>
  )
}
export default Menus