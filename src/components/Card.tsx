import Image from "next/image";
import React from "react";
import logoPertamina from "/public/logo-pertamina.png";

const Card = () => {
	return (
		<div className="relative mb-7">
			<div className="md:h-24 xl:h-32 h-14 w-full flex active:translate-2 relative z-10 hover:cursor-pointer">
				<div className="absolute md:size-10 xl:size-14 bg-custom-bg-dark outline-custom-black md:outline-4 xl:outline-5 outline-4 flex justify-center items-center md:top-6 md:-left-5 xl:top-9 xl:-left-7 z-10 size-4 top-5 -left-3">
					<p className="font-extrabold md:text-lg xl:text-3xl text-sm text-white">1</p>
				</div>
				<div className="md:w-1/3 xl:w-1/4 w-1/2 bg-white md:outline-4 xl:outline-5 outline-4 outline-custom-black">
					<div className="h-full w-full flex overflow-hidden justify-center items-center">
						<Image
							src={logoPertamina}
							alt="Logo"
							className="object-cover item"
							placeholder="blur"
						/>
					</div>
				</div>

				<div className="w-full md:outline-4 xl:outline-5 outline-4 bg-green-800 outline-custom-black px-4 flex items-center">
					<p className="md:text-4xl xl:text-8xl font-extrabold text-2xl text-white">PERTAMINA</p>
				</div>
				<div className="md:w-1/3 xl:w-1/4 w-1/2 bg-white md:outline-4 xl:outline-5 outline-4 outline-custom-black flex items-center justify-center">
					<p className="text-custom-black md:text-2xl xl:text-[44px] font-black text-sm">968.5 T</p>
				</div>
			</div>

			<div className="w-full absolute top-0 bg-custom-bg-light md:outline-4 xl:outline-5 outline-4 outline-custom-black md:translate-x-3 md:translate-y-3 xl:translate-x-4 xl:translate-y-4 md:h-24 xl:h-32 translate-2 h-14" />
		</div>
	);
};

export default Card;
