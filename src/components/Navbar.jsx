import logo from "../assets/MINISTRY_NAME.webp";
import { FaAngleDown } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full h-[10vh] z-30 fixed bg-[#4638c7] flex items-center justify-between">
      <div className="scale-40">
        <img src={logo} alt="" className="w-2xl %" />
      </div>
      <div className="flex items-center justify-between text-white font-semibold gap-8 mr-[15vh]">
        <div className="py-3 flex justify-center gap-2 items-center hover:border-b-2 duration-300 animati">
          <div>Home</div>
        </div>
        <div className="py-3 flex justify-center gap-2 items-center hover:border-b-2 duration-300">
          <div>NIC code</div>
        </div>
        <div className="py-3 flex justify-between gap-2 items-center hover:border-b-2 duration-300">
          <div>Useful Documents</div>
          <FaAngleDown></FaAngleDown>
        </div>
        <div className="py-3 flex justify-center gap-2 items-center hover:border-b-2 duration-300">
          <div>Print/Verify</div>
          <FaAngleDown></FaAngleDown>
        </div>
        <div className="py-3 flex justify-center gap-2 items-center hover:border-b-2 duration-300">
          <div>Update Details</div>
          <FaAngleDown></FaAngleDown>
        </div>
        <div className="py-3 flex justify-center gap-2 items-center hover:border-b-2 duration-300">
          <div>Login</div>
          <FaAngleDown></FaAngleDown>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
