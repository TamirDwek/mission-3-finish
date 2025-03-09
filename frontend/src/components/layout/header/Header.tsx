import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header(): JSX.Element {



  return (
    <div className="Header">
      <div>Logo</div>
      <div>
        <nav>

            <NavLink to="/list">Dev Groups</NavLink>
            <NavLink to="/add">Add Meeting</NavLink>
            <NavLink to="/home">Home</NavLink>
        </nav>
      </div>
    </div>
  );
}
