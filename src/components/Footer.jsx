import { FaAngleRight } from "react-icons/fa";
import Udyam from "../assets/udyam.mp4";

function Footer() {
  return (
    <div className="bg-[#1c1c5a] px-[10vw] text-white flex items-center justify-between">
      <div className="py-10 flex flex-col ">
        <div className="text-3xl">Udyam Registration</div>
        <div className="flex flex-col gap-5 py-4">
          <div>
            <div>Ministry of MSME</div>
            <div>Udyog bhawan - New Delhi</div>
          </div>
          <div>
            <span className="font-bold">Email : </span>champions@gov.in
          </div>
          <div className="font-bold text-xm">
            <div>Contact Us</div>
            <div>For Grievances/Problems</div>
          </div>
        </div>
      </div>
      <div className="py-10 flex flex-col ">
        <div className="font-semibold">Our Services</div>
        <div className="flex flex-col gap-5 py-5 font-light">
          <div className="flex items-center justify-start hover:underline">
            <div>
              <FaAngleRight></FaAngleRight>
            </div>
            <div>Champions</div>
          </div>
          <div className="flex items-center justify-start hover:underline">
            <div>
              <FaAngleRight></FaAngleRight>
            </div>
            <div>MSME Samadhaan</div>
          </div>
          <div className="flex items-center justify-start hover:underline">
            <div>
              <FaAngleRight></FaAngleRight>
            </div>
            <div>MSME Sambandh</div>
          </div>
          <div className="flex items-center justify-start hover:underline">
            <div>
              <FaAngleRight></FaAngleRight>
            </div>
            <div>MSME Dashboard</div>
          </div>
          <div className="flex items-center justify-start hover:underline">
            <div>
              <FaAngleRight></FaAngleRight>
            </div>
            <div>Entrepreneurship Skill Development Programme(ESOP)</div>
          </div>
        </div>
      </div>
      <div className="w-[25vw] h-[25vh] ">
        <video src={Udyam} controls></video>
      </div>
    </div>
  );
}

export default Footer;
