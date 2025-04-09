import React from "react";

const InputSearching = () => {
	return (
		<div className="w-full relative md:mb-6">
			<input
				type="text"
				className="w-full bg-white text-custom-black py-1 px-3 border-4 border-custom-black focus:outline-none"
                placeholder="Cari kasus korupsi..."
			/>
            <div className="bg-custom-black w-full h-full absolute top-0 -z-10 translate-2"/>
		</div>
	);
};

export default InputSearching;
