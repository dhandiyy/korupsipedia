import React from "react";
import { AiOutlinePlus } from "react-icons/ai";


const AddCorruptionButton = () => {
	return (
		<div className="relative my-2.5 mb-6 w-full mt-4 h-fit">
			<div className="flex items-center justify-center gap-2 active:translate-2 bg-custom-bg-dark px-3 w-full hover:cursor-pointer border-4 border-custom-bg-dark xl:px-4 xl:py-1">
				<AiOutlinePlus className="text-white xl:text-2xl" />
				<span className="text-white xl:text-xl xl:font-bold">Tambah kasus baru</span>
			</div>
			<div className="bg-custom-black w-full h-full absolute left-0 top-0 translate-x-2 translate-y-2 -z-10" />
		</div>
	);
};

export default AddCorruptionButton;
