import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { useState } from "react";
import getStripe from "../lib/getStripe";

const DisplayPrice = ({ day }) => {
  const [qty, setQty] = useState(1);
  const [loading, isLoading] = useState(false);

  const handleCheckout = async () => {
    isLoading(true);
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${day} Tickets`,
        qty: qty,
        price: day == "Day 1" ? 150 : day == "Day 2" ? 250 : 350,
      }),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();
    stripe.redirectToCheckout({ sessionId: data.id });

    isLoading(false);
  };

  let price;
  price = day == "Day 1" ? 150 * qty : day == "Day 2" ? 250 * qty : 350 * qty;

  return (
    <div className="py-8">
      <div className="font-bold text-md flex justify-between align-center mb-4">
        <span>Price</span>
        {/*day == "Day 1" ? (
					<span>{`${150 * qty} \u20B9`}</span>
				) : day == "Day 2" ? (
					<span>{`${250 * qty} \u20B9`}</span>
				) : (
					<span>{`${350 * qty} \u20B9`}</span>
				)*/}
        <span>{`${price} \u20B9`}</span>
      </div>
      <hr />
      <div className="mt-2 flex justify-between align-center text-md font-bold">
        <span>Tickets</span>
        <div className="flex justify-center align-center">
          <AiOutlineMinusSquare
            className="text-xl m-1 cursor-pointer"
            onClick={() => (qty > 0 ? setQty(qty - 1) : null)}
          />
          {qty}
          <AiOutlinePlusSquare
            className="cursor-pointer m-1 text-xl"
            onClick={() => setQty(qty + 1)}
          />
        </div>
      </div>
      {!loading ? (
        <button
          className="w-[100%] bg-blue-500 px-4 py-2 mt-4 rounded-lg text-white font-bold flex justify-center align-center"
          onClick={handleCheckout}
        >
          Book Now
        </button>
      ) : (
        <div className="flex justify-center py-3 items-center">
          <div className="animate-spin rounded-full h-32 w-32	 border-b-2 border-red-700" />
        </div>
      )}
    </div>
  );
};

export default DisplayPrice;
