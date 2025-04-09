import AddCorruptionButton from "@/components/AddCorruptionButton";
import Card from "@/components/Card";
import InputSearching from "@/components/InputSearching";

export default function Home() {
	return (
		<div>
			<div className="flex justify-between items-center flex-col mb-6">
				<p className="text-custom-black font-bold md:text-xl xl:text-3xl xl:mb-2">KASUS PALING BARU</p>
				<p className="text-custom-black font-extrabold md:text-2xl xl:text-5xl">KORUPSI DI INDONESIA</p>
			</div>
			<InputSearching />
			<div className="md:hidden">
				<AddCorruptionButton />
			</div>
			<div className="flex justify-between text-md font-bold py-2 md:text-xl md:py-4">
				<p>PELAKU KORUPSI</p>
				<p>KERUGIAN</p>
			</div>
			<Card />
			<div className="w-full text-center text-xs md:text-sm xl:text-xl">
				<p>* kasus korupsi di atas sudah tervalidasi</p>
			</div>
		</div>
	);
}
