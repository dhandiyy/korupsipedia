import React from "react";
import Image from "next/image";
import logo from "../../public/logo-korupsipedia.png";
import AddCorruptionButton from "./AddCorruptionButton";

const Header = () => {
	return (
		<div className="md:flex md:flex-row md:items-center md:justify-between md:px-16 md:py-4 hidden">
			<div>
				<Image
					src={logo}
					alt="Logo"
                    className="w-1/3"
				/>
			</div>
			<div className="hidden md:flex">
				<AddCorruptionButton />
			</div>
		</div>
	);
};

export default Header;
