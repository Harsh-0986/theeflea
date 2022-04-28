import { useState, Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { AiOutlineCheck } from "react-icons/ai";
import DisplayPrice from "./DisplayPrice";

export default function DropdownBut() {
	const days = ["Day 1", "Day 2", "Day 3"];
	const [selectedDay, setSelectedDay] = useState(days[0]);

	return (
		<>
			<Listbox value={selectedDay} onChange={setSelectedDay}>
				<Listbox.Button className="flex flex-row justify-between align-center text-white font-semibold text-lg w-full bg-blue-500 rounded px-5 py-2 ">
					{selectedDay}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 mt-1"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</Listbox.Button>
				<Listbox.Options>
					{days.map((person) => (
						/* Use the `active` state to conditionally style the active option. */
						/* Use the `selected` state to conditionally style the selected option. */
						<Listbox.Option
							key={person}
							value={person}
							as={Fragment}
						>
							{({ active, selected }) => (
								<li
									className={`w-full flex flex-row px-2 py-1 rounded-lg  justify-center align-center text-white font-md text-lg cursor-pointer flex flex-row ${
										active
											? "bg-slate-500 border-2 border-white"
											: "bg-slate-900 "
									}`}
								>
									{selected && (
										<AiOutlineCheck className="h-4 mt-1" />
									)}
									{person}
								</li>
							)}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</Listbox>

			<DisplayPrice day={selectedDay} />
		</>
	);
}
