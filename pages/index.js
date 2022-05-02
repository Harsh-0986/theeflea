import DropdownBut from "../components/DropdownBut";
import Footer from "../components/Footer";
import SubscribeForm from "../components/SubscribeForm";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thee Flea</title>
        <meta name="description" content="Thee flee" />
        <meta name="keywords" content="Thee flee" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
