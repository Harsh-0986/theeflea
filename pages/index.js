import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import SubscribeForm from "../components/SubscribeForm";

export default function Home() {
	return (
		<div>
			<img src="image (2).jpeg" className="w-full" />
			<img src="/image (1).jpeg" className="w-full" />
			<div>
				<img src="/image (3).jpeg" className="w-full" />
			</div>
			<SubscribeForm />
			<Footer />
		</div>
	);
}
