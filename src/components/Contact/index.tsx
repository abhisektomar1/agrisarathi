import { ArrowForward } from "react-ionicons";
import book from "../../assets/images/phone.png";

const Contact = () => {

	const handleClick = () => {
		window.location.href = 'mailto:communications@accessassist.com?subject=Book a Demo&body=I would like to book a demo.'
	};
  return (
    <div className="w-full flex md:flex-row flex-col items-start justify-between md:px-40 px-5 bg-[#f5f8fa] relative md:py-28 py-20">
      <div className="flex w-full justify-center flex-col gap-1">
        <div className="font-bold text-[#263640] text-[25px] max-w-[650px] md:mt-4">
          Book a Demo
        </div>
        <p className="leading-7 text-[#929a9f] mt-2 text-justif mr-5">
          Be a part of this journey to empower Indian Farmers and revolutionize
          Agriculture. Collaborate with us if provide Products and Services in
          Agriculture or are interesting in buying produce directly from Farmers
          :<br /> • Crop Nutrition <br />• Pest Management <br />• Financial Services <br />• Insurance
        </p>
        <div className="flex items-center gap-3 bg-[#079449] px-5 w-fit h-[40px] justify-center cursor-pointer mt-5">
          <span className="font-medium text-white text-[15px]" onClick={handleClick}>
            Book an Demo
          </span>
          <ArrowForward color="#fff" />
        </div>
      </div>
      <img src={book} alt="book" className=" md:mt-[-180px] mt-16 " width={300} />
    </div>
  );
};

export default Contact;
