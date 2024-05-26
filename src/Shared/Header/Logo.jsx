import { Link } from "react-router-dom";
import logo from "../../../public/logo/GollaChut-X.png";

const Logo = () => {
  return (
    <div className="hidden md:block">
      <Link className="flex items-center">
        <img className="w-h-14 h-14" src={logo} alt="logo" />
        <p className="text-2xl text-[#E1F7F5] font-semibold">GollaChut</p>
      </Link>
    </div>
  );
};

export default Logo;
