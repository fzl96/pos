import { Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Menus from "./pages/Menus";
import Orders from "./pages/Orders";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/menus" element={<Menus />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
