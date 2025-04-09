import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BG from "../../public/bg.svg";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const JetBrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Korupsipedia",
	description: "Kasus Korupsi di Indonesia",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${JetBrainsMono.variable} antialiased flex flex-col min-h-screen`}>
				<div className="fixed inset-0 -z-10">
					<Image
						src={BG}
						alt="Background"
						fill
						priority
						quality={100}
						className="object-cover bg-repeat-y"
					/>
				</div>
				<Header/>
				<main className="flex-1 px-16 md:px-28 xl:px-48 py-10 md:py-0">{children}</main>
				<Footer/>
			</body>
		</html>
	);
}
