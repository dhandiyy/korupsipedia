import Image from "next/image";
import React from "react";
import BG from "/public/bg.svg";

const Background = () => {
	return (
		<Image
			src={BG}
			alt="bg"
			fill
			sizes="100vw"
			style={{
				objectFit: "cover",
			}}
            className="-z-10 "
		/>
	);
};

export default Background;
