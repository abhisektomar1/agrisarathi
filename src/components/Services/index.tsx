import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import about from "../../assets/images/about.png";

const Services = () => {
  const services = [
    {
      title: "Climate Smart and Sustainable Farming",
      image: service1,
      desc: "Solutions to MAXIMISE PRODUCTION",
    },
    {
      title: "Improved Traceability and Democratization of Trade ",
      image: service2,
      desc: "Solutions to ENHANCE FARMER INCOME / CREATE VALUE FOR VALUE CHAIN ECOSYSTEM PLAYERS",
    },
    {
      title: "Rewards and Recognition ",
      image: service3,
      desc: "Solutions to BUILD VISIBILITY of FARMERS AS AGRI CHAMPIONS – INDIA’S BREAD CREATORS",
    },
  ];

  return (
    <div className="w-full md:px-40 px-5 bg-[#f5f8fa] relative z-[-1] pt-20 md:pb-[300px] pb-20">
      <div className="flex flex-col gap-2">
        
        <p className="font-normal text-[#929a9f] max-w-[550px] leading-7 mt-4 md:text-justify text-center">
        Each of AgriSarathi tools is an end-to-end solution while the unified and aggregated AI/ML enabled platform brings together niche offerings of input providers to generate unique data sets for analytical use.
        </p>
      </div>
      <div className="w-full flex md:flex-row flex-col items-center justify-between md:gap-8 gap-16 mt-24 z-50">
        {services.map((service, index: number) => {
          return (
            <div key={index} className="flex flex-col gap-3 max-w-[300px] z-50">
              <img
                src={service.image}
                alt={service.title}
                className="shadow-lg"
              />
              <span className="font-semibold text-[#263640] text-[17px] mt-3">
                {service.title}
              </span>
              <p className="text-[#929a9f] leading-7"> {service.desc} </p>
              {/* <a href="#" className="text-[#079449] font-medium z-50">
                Learn More
              </a> */}
            </div>
          );
        })}
      </div>
      <div className="md:absolute md:mt-0 mt-16 bottom-[-380px] bg-[#263640] md:p-24 p-8 md:w-[70%] w-full md:h-[600px] z-[100] shadow-xl">
        <img
          src={about}
          alt="about"
          className="md:absolute md:block hidden right-[-250px] top-[80px] shadow-xl"
        />
        <div className="flex flex-col">
          <span className="font-medium text-[#929a9f] text-[18px]">
            About Us
          </span>
          <div className="text-white font-bold text-[42px] max-w-[650px] mt-4">
            The Power of AgriSarathi
          </div>
          <p className="text-white font-normal max-w-[450px] leading-7 mt-4">
            AI-powered AgriSarathi brings together Agri input organisations,
            FPOs, Market Linkages through ‘Mandi’ and ‘Dukan’ to help the Farmer
            leverage on their collective offerings. It provides expert advice
            all the way through the agri value chain from pre-sowing to tapping
            buyers post-harvest.
          </p>
          <span className="w-[60%] h-[1px] bg-gray-500 mt-6"></span>
          {/* <div className="flex items-center gap-3 w-[209px] h-[40px] justify-start cursor-pointer mt-6">
            <span className="text-white font-medium text-[15px]">
              Continue reading
            </span>
            <ArrowForward color="#fff" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
