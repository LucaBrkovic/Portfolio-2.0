import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import "./components.css";

const Contact = () => {
	const form = useRef();
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			control.start("visible");
		} else {
			control.start("hidden");
		}
	}, [control, inView]);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_APP_SERVICE_ID,
				import.meta.env.VITE_APP_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_APP_USER_ID
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log("Dobro");
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};
	const boxVariant = {
		visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
		hidden: { opacity: 0, scale: 0 },
	};
	return (
		<motion.section
			ref={ref}
			variants={boxVariant}
			initial="hidden"
			animate={control}
			className="contact"
			id="contact">
			<h2 className="font-bold text-[#0F172A] text-[30px] md:text-[40px] lg:text-[40px] 2xl:text-[45px] text-center mb-0">
				Contact Me{" "}
			</h2>
			<div className="mt-0  text-center py-[40px] px-4 shadow-xl contact-div_parent">
				<div className="contact-div_child_img">
					<img src="../images/contact.svg" />
				</div>
				<div className="contact-div_child_contact">
					<form ref={form} onSubmit={sendEmail}>
						<div className="contact-grid">
							<div className="contact-type_one">
								<input type="text" name="user_name" placeholder="Name" />
							</div>

							<div className="contact-type_one">
								<input type="email" name="user_email" placeholder="Email" />
							</div>

							<div className="contact-type_two">
								<textarea name="message" placeholder="Message" />

								<div className="contact-btn__container">
									<button type="submit">Send Message</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
