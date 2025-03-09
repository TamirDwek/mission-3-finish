import { Navigate, Route, Routes } from "react-router-dom";
import List from "../../pages/list/List";
import Add from "../../pages/add/Add";
import Home from "../../pages/home/Home";
export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>} />
      <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/add" element={<Add />} />
    </Routes>
  );
}
