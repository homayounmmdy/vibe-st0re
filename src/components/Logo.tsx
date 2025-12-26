import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" title="vibe store" className="flex gap-2 items-center">
      <img className="w-8 h-8 rounded-xl" src="/images/logo.png" alt="logo" />
      <span className="hidden md:block text-xl md:text-2xl gap-2 text-gray-500">
        Vibe Store
      </span>
    </Link>
  );
};

export default Logo;
