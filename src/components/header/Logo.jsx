import { Link } from "react-router-dom"

function Logo() {
    return (
        <Link to="/">
            <div className="flex items-center">
            <img src="../public/images/logo_home.png" alt="Sun Logo" className="w-13"/>
            <span className="text-3xl ml-2 font-bold font-petit">SUN</span>
            </div>
        </Link>
    )
}

export default Logo;

