import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <div className="md:flex items-center justify-between mt-12">
      <div>
        <img src="https://i.ibb.co/BytSWkb/Logo.png" alt="" />
      </div>
      <div>
        <nav className="flex gap-12 text-xl">
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/donation' >Donation</NavLink>
        <NavLink to='/statistics' >Statistics</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
