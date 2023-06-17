import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	pageInfo: PageInfo;
};

function About({pageInfo}: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center bg-hero-pattern bg-cover bg-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>

			<motion.img
				className="-mb-20 md:mb-0 flex-shrink-0 h-56 w-56 object-cover rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				viewport={{
					once: true,
				}}
				src={urlFor(pageInfo.heroImage).url()}
				alt="Jordan Black"
			/>

			<div className="space-y-10 px-5 md:px-10 bg-[#242424]/80 rounded-lg py-3 max-w-2xl">
				<h4 className="text-4xl font-semibold text-[#F7AB0A]">
					Here is a{"  "}
					<span className="underline decoration-white/80">
						little
					</span>{" "}
					context about me.
				</h4>
				<p className="text-sm justify-center font-semibold text-left ">
					{pageInfo.backgroundInfo}
				</p>
			</div>
		</motion.div>
	);
}

export default About;
