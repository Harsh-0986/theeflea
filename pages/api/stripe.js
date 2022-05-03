import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			const params = {
				submit_type: "pay",
				mode: "payment",
				payment_method_types: ["card"],
				billing_address_collection: "auto",
				line_items: [
					{
						price_data: {
							currency: "inr",
							product_data: {
								name: req.body.name,
							},
							unit_amount: req.body.price * 100,
						},
						adjustable_quantity: {
							enabled: true,
							minimum: 1,
						},
						quantity: req.body.qty,
					},
				],
				success_url: `${req.headers.origin}/success`,
				cancel_url: `${req.headers.origin}/?canceled=true`,
			};

			const session = await stripe.checkout.sessions.create(params);

			res.status(300).json(session);
		} catch (error) {
			res.status(500).json({ statusCode: 500, message: error.message });
		}
	}
}
