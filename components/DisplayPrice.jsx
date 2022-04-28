import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { useState } from "react";

const DisplayPrice = ({ day }) => {
	const [qty, setQty] = useState(1);

	return (
		<div className="py-8">
			<div className="font-bold text-md flex justify-between align-center mb-4">
				<span>Price</span>
				{day == "Day 1" ? (
					<span>{`${150 * qty} \u20B9`}</span>
				) : day == "Day 2" ? (
					<span>{`${250 * qty} \u20B9`}</span>
				) : (
					<span>{`${350 * qty} \u20B9`}</span>
				)}
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
			<button className="w-[100%] bg-blue-500 px-4 py-2 mt-4 rounded-lg text-white font-bold flex justify-center align-center">
				Book Now
			</button>
		</div>
	);
};

export default DisplayPrice;
