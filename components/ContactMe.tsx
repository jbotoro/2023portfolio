import React from "react";
import {
	PhoneIcon,
	MapPinIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type Props = {};

function ContactMe({}: Props) {
	const { register, handleSubmit } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (formData) =>
		{
            window.location.href = `mailto:jblack530@gmail.com?subject=${formData.subject}&body= Hi, my name is ${formData.name}. ${formData.message}, I can be reached at ${formData.email}`
        }

	return (
		<div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Contact Me
			</h3>

			<div className="flex flex-col space-y-10">
				<h4 className="text-4xl font-semibold text-center">
					{" "}
					Looking for a full stack dev?{""}
					<span className="underline decoration-[#F7AB0A]">
						{" "}
						<br />
						Get in touch!
					</span>
				</h4>

				<div className="space-y-10">
					<div className="flex items-center space-x-5 justify-center ">
						<PhoneIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse " />
						<p className="text-2xl">415-316-3516</p>
					</div>

					<div className="flex items-center space-x-5 justify-center ">
						<MapPinIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse " />
						<p className="text-2xl">123 Dogshit Lane</p>
					</div>

					<div className="flex items-center space-x-5 justify-center ">
						<EnvelopeIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse " />
						<p className="text-2xl">jblack530@gmail.com</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-2 w-fit mx-auto"
				>
					<div className="flex space-x-2">
						<input
							{...register("name")}
							className="contactInput"
							placeholder="Name"
							type="text"
						/>
						<input
							{...register("email")}
							className="contactInput"
							placeholder="Email"
							type="email"
						/>
					</div>

					<input
						{...register("subject")}
						className="contactInput"
						placeholder="Subject"
						type="text"
					/>

					<textarea
						{...register("message")}
						className="contactInput"
						placeholder="Message"
					/>
					<button
						className="bg-[#F7AB0A] py-5 px-10 rounder-md text-black font-bold text-lg"
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default ContactMe;
