import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="sticky top-0 z-10 md:flex items-center justify-between md:px-24 mt-10">
      <div className="md:mr-10 mr-0 flex justify-center">
        <img src="https://i.ibb.co/BytSWkb/Logo.png" alt="" />
      </div>
      <div>
        <nav className="flex justify-center gap-3 text-xl mt-6 md:gap-4 lg:gap-10">
          <NavLink to="/" className="">
            Home
          </NavLink>
          <NavLink to="/donation">Donation</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
