import { Link } from "react-router-dom";
import logoImage from "/images/logo_home.png";

function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center">
        <img src={logoImage} alt="Sun Logo" className="w-13" />
        <span className="text-3xl ml-2 font-bold font-petit">SUN</span>
      </div>
    </Link>
  );
}

export default Logo;
