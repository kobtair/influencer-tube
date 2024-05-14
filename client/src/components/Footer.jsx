import { FaPhoneAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className=" py-10">
      <div className="footer-content mt-20 flex justify-between">
        <div className="contact flex flex-col gap-y-6">
          <h3 className="text-3xl font-semibold ">Contact</h3>
          <ul className="flex flex-col gap-y-7">
            <li className="flex gap-x-4">
                <span><FaPhoneAlt /></span>
              <span> 0450000000000</span>
            </li>
            <li className="flex gap-x-4">
                <span><MdEmail /></span>
              <span> hello@influencertube.com</span>
            </li>
            <li className="flex gap-x-4">
                <span><FaLocationDot /></span>
              <span> University of Wollongong, Northfield ave, Wollongong</span>
            </li>
          </ul>
        </div>
        <div className="social text-center">
          <h3 className="text-3xl font-semibold">Social</h3>
          <div className="flex gap-x-2 mt-3">
            {[...Array(4)].map(link=>(<AiFillInstagram className="cursor-pointer" size={32} />))}
          </div>
        </div>
        <div className="links">
          <h3 className="text-3xl font-semibold">Links</h3>
          <ul className="flex flex-col gap-y-3 mt-4 ">
            <li className="font-thin cursor-pointer hover:underline">FAQ's</li>
            <li className="font-thin cursor-pointer hover:underline">Join as Brand</li>
            <li className="font-thin cursor-pointer hover:underline">Collaboration Hub</li>
            <li className="font-thin cursor-pointer hover:underline">Reviews</li>
          </ul>
        </div>
      </div>
      <div className="copyright mt-10 text-center text-xl font-medium">Influencer TUBE 2024 @ All Right Reserved</div>
    </footer>
  );
};

export default Footer;
