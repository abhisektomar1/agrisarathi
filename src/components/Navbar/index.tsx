import { MailOutline } from "react-ionicons";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
	const handleClick = () => {
		window.location.href = 'mailto:communications@accessassist.com?subject=Book a Demo&body=I would like to book a demo.'
	};
	// const navLinks = [
	// 	{ title: "Home", path: "/", active: true },
	// 	{ title: "Services", path: "/", active: false },
	// 	{ title: "Products", path: "/", active: false },
	// 	{ title: "Newsletter", path: "/", active: false },
	// 	{ title: "About", path: "/", active: false },
	// ];
	return (
		<div className="w-full flex items-center justify-between border-b border-gray-300">
			<img
				src={logo}
				alt="logo"
				style={{width:"200px"}}
			/>
			<div className="hidden md:flex items-center gap-8">
				{/* {navLinks.map((link) => {
					return (
						<a
							href={link.path}
							className={`${
								link.active
									? "text-[#079449] border-[#079449]"
									: "text-[#263640] border-transparent"
							} font-semibold text-[15px] no-underline border-b-2 py-1`}
							key={link.title}
						>
							{link.title}
						</a>
					);
				})} */}
			</div>
			<div className="flex items-center gap-3 bg-[#079449] py-2 px-4 cursor-pointer" onClick={handleClick}>
				<span className="text-white font-medium text-[15px]">Book a Demo</span>
				<MailOutline color={"#fff"} />
			</div>
		</div>
	);
};

export default Navbar;
