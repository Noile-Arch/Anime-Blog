import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" h-[100px] py-5 flex justify-center items-center border-b-2">
      <div className="flex justify-between items-center w-full h-full  px-6">
        <Link to="/" className="md:text-3xl text-xl font-bold text-[#ff235e]">
          Anime Blog
        </Link>
        <div className="flex justify-center items-center gap-10">
          <Link to="/" className="md:text-xl text-[14px] font-semibold ">
            Home
          </Link>
          <Link to="/newblog" className="md:text-xl text-[14px] font-semibold ">
            New Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
