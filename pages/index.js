import DropdownBut from "../components/DropdownBut";
import Footer from "../components/Footer";
import SubscribeForm from "../components/SubscribeForm";

export default function Home() {
	return (
		<div>
			<img src="image (2).jpeg" className="w-full" />
			<img src="/image (1).jpeg" className="w-full" />
			<div className="relative">
				<img src="/image (3).jpeg" className="w-full " />
				<div className="absolute top-[20%] left-[20%] w-[50%]">
					<div className="w-[100%]">
						<DropdownBut />
					</div>
				</div>
			</div>
			<SubscribeForm />
			<Footer />
		</div>
	);
}
