import { Link } from "react-router-dom";
import Logo from "../assets/nav-logo.png";

const Nav = ({search , setSearch}) => {
  
  return (
    <nav className="flex items-center flex-wrap max-w-[100vw] p-3 ">
      <img src={Logo} alt="logo" width={40} height={30} />

      <div className=" flex flex-wrap ml-80 gap-10 max-md:hidden font-mulish font-bold text-xl">
        <Link to="/">Home</Link>
        <Link to="/all-blogs">Blogs</Link>
        <Link to="/new-blog">New</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="flex ml-44 gap-5">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="search for blogs ..."
          className="outline-none border-2 border-violet-600 rounded-lg px-2 text-black font-lato"
        />
        <a
          href=""
          className="bg-violet-500 px-6 py-2 rounded-xl text-white  font-bold shadow-2xl  "
        >
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Nav;
