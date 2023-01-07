import React, { useEffect, useState } from "react";
import "./nav.css";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [openBtn, setOpenBtn] = useState("show-btn");
	const [scrolled, setScrolled] = useState(false);

	const menuHandler = () => {
		setOpen(!open);
		setOpenBtn("");
	};
	const closeHandler = () => {
		setOpen(!open);
		setOpenBtn("show-btn");
	};
	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);



	return (
		<div>
			{/**pc start */}
			<div className={scrolled ? "fixed top-0 w-full bg-rgbanavbar z-30" : ""}>
				<div className="hidden md:grid gridbox py-2 sm:px-4 xl:px-40 px-2 ">
					<div className="flex justify-around items-center ">
						<div className="flex justify-center items-end">
							<img className="w-12 p-1" src="../images/logo.svg" alt="logo" />
						</div>

						<ul className="flex navul">
							<li>
							<a
								className="text-dimWhite"
								href="#home"
								>
								Home
								</a>
							</li>

							<li>
							<a
								className="text-dimWhite"
								href="#skill"
								>
								Skills
							</a>
							</li>
							<li>
							<a
								className= "text-dimWhite"
								href="#project"
								>
								Projects
							</a>
							</li>
						</ul>
					</div>

					<div className="flex justify-around items-center ">
						<div>
							<span className="navbar-text">
								<div className="social-icon">
									<a href="https://www.linkedin.com/in/luka-brkovic-319557256/">
										<img src="../images/nav-icon1.svg" alt="in" />
									</a>
									<a href="https://t.me/lukabrkovic">
										<img src="../images/nav-icon2.svg" alt="tg" />
									</a>
									<a href="https://www.instagram.com/luka_brx/">
										<img src="../images/nav-icon3.svg" alt="ig" />
									</a>
									<a href="https://www.facebook.com/profile.php?id=100083708395471">
										<img src="../images/nav-icon4.svg" alt="fb" />
									</a>
								</div>
							</span>
						</div>

						<div>
							<button className="btn">Contat me</button>
						</div>
					</div>
				</div>
			</div>
			{/**pc end */}

			{/**mobile start */}
			<div className={scrolled ? "fixed top-0 w-full bg-rgbanavbar z-30" : ""}>
				<div className="flex md:hidden items-center justify-between px-8 py-2 bg-rgbanavbar">
					<div className="flex justify-center items-end">
						<img className="w-10 " src="../images/logo.svg" alt="logo" />
					</div>

					<div>
						<button onClick={menuHandler}>
							<img
								className={openBtn === "show-btn" ? "w-12  open-container" : "hidden "}
								src="../images/menu.png"
							/>
						</button>

						{open && (
							<div className="absolute top-0 bottom-0 right-0 grid grid-rows-[75%_1fr] h-screen w-[250px]  z-10    animation-css background-div ">
								<div className="absolute top-4 right-4">
									<button onClick={closeHandler}>
										<svg
											className="w-7 h-7 text-white cursor-pointer"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"></path>
										</svg>
									</button>
								</div>

								<ul className="navul flex flex-col mt-[90px] justify-start items-end px-4">
									<li>
									<a
										href="#home"
										onClick={closeHandler}
										className="p-4 font-[300] text-[29px] sm:text-xl text-white hover:text-white cursor-pointer tracking-wider">
										Home</a>
									</li>
									<li>
										<a
										href="#skill"
										onClick={closeHandler}
										className="p-4 font-[300] text-[29px] sm:text-xl text-dimWhite hover:text-white cursor-pointer tracking-wider">
										Skills</a>
									</li>
									<li>
									<a
										href="#project"
										onClick={closeHandler}
										className="p-4 font-[300] text-[29px] sm:text-xl text-dimWhite hover:text-white cursor-pointer tracking-wider">
										Projects
										</a>
									</li>
									<li>
									<a
										href="#contact"
										onClick={closeHandler}
										className="p-4 font-[300] text-[29px] sm:text-xl text-dimWhite hover:text-white cursor-pointer tracking-wider">
										Contact
									</a>
									</li>
								</ul>

								<div className="flex justify-center items-end py-16 ">
									<span className="navbar-text">
										<div className="social-icon">
											<a
												onClick={closeHandler}
												href="https://www.linkedin.com/in/luka-brkovic-319557256/">
												<img src="../images/nav-icon1.svg" alt="in" />
											</a>
											<a href="https://t.me/lukabrkovic">
												<img src="../images/nav-icon2.svg" alt="tg" />
											</a>
											<a href="https://www.instagram.com/luka_brx/">
												<img src="../images/nav-icon3.svg" alt="ig" />
											</a>
											<a href="https://www.facebook.com/profile.php?id=100083708395471">
												<img src="../images/nav-icon4.svg" alt="fb" />
											</a>
										</div>
									</span>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
