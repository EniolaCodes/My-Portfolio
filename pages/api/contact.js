import nodemailer from "nodemailer";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { name, email, subject, message } = req.body;

		// Create a transporter object
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		// Define email options
		const mailOptions = {
			from: email,
			to: process.env.EMAIL_USER, 
			subject: `New Message from ${name}: ${subject}`,
			text: message,
		};

		try {
			// Send email
			await transporter.sendMail(mailOptions);
			res.status(200).json({ success: true });
		} catch (error) {
			console.error("Error sending email:", error);
			res.status(500).json({ success: false });
		}
	} else {
		res.status(405).json({ message: "Method Not Allowed" });
	}
}
