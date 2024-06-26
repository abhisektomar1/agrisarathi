import frame from  '../../assets/images/frame.png'
const Blog = () => {
	
	return (
		<div className="w-full md:px-40 px-5 relative pt-20 md:pb-36 pb-20">
			<div className="flex flex-col gap-2 md:mt-[500px]">
				<div className="font-bold text-[#263640] text-[25px] md:max-w-[650px] max-w-full md:mt-4 mb-20">
				What you will be getting?
				</div>
			</div>
			<img src={frame} className='ml-16' />
			
		</div>
	);
};

export default Blog;
