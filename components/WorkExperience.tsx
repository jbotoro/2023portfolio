import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
	experiences: Experience[];
};

function WorkExperience({experiences}: Props) {
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
			className="flex flex-col space-y-5 px-10 py-20 md:py-10 max-w-full mx-auto items-center overflow-y-auto scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#C084FC]/80"
		>
			<h3 className="uppercase tracking-[20px] text-[#c084fc] text-2xl">
				Experience
			</h3>

			<div className="w-full space-y-5">
				{experiences.map((experience) => (
					<ExperienceCard
						key={experience._id}
						experience={experience}
					/>
				))}
			</div>
		</motion.div>
	);
}

export default WorkExperience;
