import logoWhite from "../../assets/images/logow.png";
const Footer = () => {
	// const navLinks = [
	// 	{ title: "Home", path: "/", active: true },
	// 	{ title: "Services", path: "/", active: false },
	// 	{ title: "Products", path: "/", active: false },
	// 	{ title: "Newsletter", path: "/", active: false },
	// 	{ title: "About", path: "/", active: false },
	// ];
	return (
		<div className="w-full bg-[#263640] md:px-40 px-5 py-10 flex md:flex-row flex-col md:gap-0 gap-8 items-center justify-between">
			<img
				src={logoWhite}
				alt="logo"
				style={{width:"300px"}}
			/>
			<div className="flex items-center gap-5 text-gray-300">
				{/* {navLinks.map((link) => {
					return <span className="font-semibold text-white cursor-pointer">{link.title}</span>;
				})} */}
				@Copyright AgriSarathi 2024 			</div>
		</div>
	);
};

export default Footer;
