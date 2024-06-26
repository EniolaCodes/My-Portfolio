import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "@/components/Contact";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div>
			<Head>
				<title>Fatimah | Frontend Developer</title>
				<meta
					name="description"
					content="Building user-friendly and responsive web applications. Passionate about creating innovative solutions."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
