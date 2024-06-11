import { ArrowForward } from "react-ionicons";
import Navbar from "../Navbar";
import header from "../../assets/images/farmer.png";

const Header = () => {
  const handleClick = () => {
		window.location.href = 'mailto:communications@accessassist.com?subject=Book a Demo&body=I would like to book a demo.'
	};
  return (
    <div className="w-full md:mt-16 mt-7 md:h-[80vh] h-auto md:px-40 px-5 relative">
      <Navbar />
      <div className="w-full md:mt-48 mt-20 flex md:flex-row flex-col items-start justify-between">
        <div className="flex flex-col md:w-auto w-full">
          <span className="font-medium text-[#929a9f] text-[18px]">
            Welcome to AgriSarathi
          </span>
          <div className="font-bold text-[#263640] text-[42px] md:max-w-[650px] mt-4">
            Building Intelligent Agri Value Chains
          </div>
          <p className="font-normal text-[#929a9f] md:max-w-[500px] leading-7 mt-4">
          AgriSarathi, through its intelligent congregation of multiple solutions, steers the agricultural journey of the Indian Farmer through infusion of digitally smart technologies, optimising resources, enhancing yield and increasing farmers’ income.
          </p>
          <div className="flex items-center gap-3 bg-[#079449] w-[209px] h-[40px] justify-center cursor-pointer mt-10" onClick={handleClick}>
            <span className="text-white font-medium text-[15px]">Book a Demo</span>
            <ArrowForward color="#fff" />
          </div>
        </div>
        <div className="relative">
          <img
            src={header}
            alt="header"
            className="md:mt-[-130px] mt-16 md:mb-0 mb-16 shadow-xl z-50 w-140"
          />
          <div className="absolute left-[-50px] top-[60px] w-[450px] bg-[#f5f8fa] h-[570px] z-[-1]"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
