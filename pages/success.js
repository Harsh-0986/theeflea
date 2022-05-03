import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import Head from "next/head";

export default function Success() {
	const [day, setDay] = useState(0);
	const [price, setPrice] = useState(0);

	var doc = new jsPDF();

	useEffect(() => {
		setDay(localStorage.getItem("day"));
		setPrice(localStorage.getItem("price"));
	}, []);

	if (day == 0) return;

	const today = new Date();
	return (
		<div>
			<div className="invoice-box">
				<table cellPadding="0" cellSpacing="0">
					<tr className="top">
						<td colSpan="2">
							<table>
								<tr>
									<td className="title">
										<img
											src="/logo.jpg"
											style={{
												width: "100%",
												maxWidth: "156px",
											}}
										/>
									</td>
									<td>
										Date:
										{`${today.getDate()}/${
											today.getMonth() + 1
										}/${today.getFullYear()}`}
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr className="information">
						<td colSpan="2">
							<table></table>
						</td>
					</tr>
					<tr className="heading">
						<td>Bought items:</td>
						<td>Price</td>
					</tr>
					<tr className="item">
						<td>{`${day} Tickets:`}</td>
						<td>{price}</td>
					</tr>
				</table>
				<br />
				<h1 className="justify-cen">Total price: {parseInt(price)}</h1>
			</div>
			{/*<button
				onClick={() => {
					doc.html(
						document.getElementsByClassName("invoice-box")[0],
						{
							x: 0,
							y: 0,
							width: 200,
						}
					);

					doc.save("Pass.pdf");
				}}
			>
				Download PDF
			</button>
			<button
			onClick={() => {
				axios
					.post("/api/create-pdf", {
						day: `${localStorage.getItem("day")} Tickets`,
						price: localStorage.getItem("price"),
					})
					.then(() =>
						axios.get("fetch-pdf", { responseType: "blob" })
					)
					.then((res) => {
						const pdfBlob = new Blob([res.data], {
							type: "application/pdf",
						});
						saveAs(pdfBlob, `${new Date()}.pdf`);
					});
			}}
		>
			Download PDF
		</button>*/}
		</div>
	);
}
