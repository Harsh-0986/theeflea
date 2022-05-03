export default async function handler(req, res) {
	res.sendFile(`${__dirname}/${new Date()}.pdf`);
}
