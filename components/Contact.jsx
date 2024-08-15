import { useState } from "react";
import Confetti from "react-confetti";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ContactImg from "../public/assets/contact.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [success, setSuccess] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		const result = await response.json();
		if (result.success) {
			setSuccess(true);
		} else {
			alert("Failed to send message.");
		}
	};

	return (
		<div>
			{success && (
				<div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
					<Confetti />
					<h2 className="text-3xl font-bold text-green-500">
						 Message Sent Successfully! 
					</h2>
					<p className="text-xl mt-4">
						Thank you for getting in touch! I will respond as soon as possible.
						😊
					</p>
					<button
						className="mt-8 bg-[#D3A43E] text-white px-6 py-3 rounded-lg"
						onClick={() => setSuccess(false)}
					>
						Close
					</button>
				</div>
			)}
			{!success && (
				<div id="contact" className="w-full lg:h-screen">
					<div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
						<p className="text-xl tracking-widest uppercase text-[#D3A43E]">
							Contact
						</p>
						<h2 className="py-4">Get In Touch</h2>
						<div className="grid lg:grid-cols-5 gap-8">
							{/* left */}
							<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
								<div className="lg:p-4 h-full ">
									<div>
										<Image
											className="rounded-xl hover:scale-105 ease-in duration-300"
											src={ContactImg}
											alt="/"
										/>
									</div>
									<div>
										<h2 className="py-2">Fatimah Adebimpe</h2>
										<p>Frontend Developer</p>
										<p className="py-4">
											I am available for freelance or full-time positions.
											Contact me and let&apos;s talk.
										</p>
									</div>
									<div>
										<p className="uppercase pt-8">Connect With Me</p>
										<div className="flex items-center justify-between py-4">
											<Link href="https://www.linkedin.com/in/fatimah-adebimpe-441b10145/">
												<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
													<FaLinkedinIn />
												</div>
											</Link>
											<Link href="https://github.com/EniolaCodes">
												<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
													<FaGithub />
												</div>
											</Link>

											<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
												<AiOutlineMail />
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* right */}
							<div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
								<div className="p-4">
									<form onSubmit={handleSubmit}>
										<div className="grid md:grid-cols-2 gap-4 w-full py-2">
											<div className="flex flex-col">
												<label className="uppercase text-sm py-2">Name</label>
												<input
													className="border-2 rounded-lg p-3 flex border-gray-300"
													type="text"
													name="name"
													value={formData.name}
									onChange={handleChange}
												/>
											</div>
											<div className="flex flex-col">
												<label className="uppercase text-sm py-2">Email</label>
												<input
													className="border-2 rounded-lg p-3 flex border-gray-300"
													type="email"
													name="email"
													value={formData.email}
									onChange={handleChange}
												/>
											</div>
										</div>
										<div className="flex flex-col py-2">
											<label className="uppercase text-sm py-2">Subject</label>
											<input
												className="border-2 rounded-lg p-3 flex border-gray-300"
												type="text"
												name="subject"
												value={formData.subject}
								onChange={handleChange}
											/>
										</div>
										<div className="flex flex-col py-2">
											<label className="uppercase text-sm py-2">Message</label>
											<textarea
												className="border-2 rounded-lg p-3 border-gray-300"
												rows="10"
												name="message"
												
								value={formData.message}
								onChange={handleChange}
											></textarea>
										</div>
										<button className="w-full p-4 text-gray-100 mt-4">
											Send Message
										</button>
									</form>
								</div>
							</div>
						</div>
						<div className="flex justify-center py-12">
							<Link href="/">
								<div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
									<HiOutlineChevronDoubleUp
										className="text-[#D3A43E]"
										size={30}
									/>
								</div>
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Contact;
