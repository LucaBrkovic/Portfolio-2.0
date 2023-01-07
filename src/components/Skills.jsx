import React, {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./components.css"

const Skills = () => {
    const control = useAnimation()
const [ref,inView] = useInView()

useEffect(() => {
  if (inView) {
    control.start("visible");
  } else {
      control.start("hidden")
  }
}, [control, inView]);


	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 766, min: 0 },
			items: 1,
		},
	};
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 }
      }
	return ( <motion.section ref={ref} variants={boxVariant}  initial="hidden" animate={control} id="skill" className="skill">
    <h2 className="font-bold text-[30px] md:text-[40px] lg:text-[40px] 2xl:text-[45px] text-center mb-10">Skills </h2>
     <div className="bg-rgbaskill rounded-[32px] text-center py-[40px] px-[50px] shadow-xl">
      
      <p className="text-[#b8b8b8] px-5 text-[15px] lg:text-[18px] leading-6 mb-[50px] mt-[14px]">I can't guarantee you with experience, but I promise you that the effort is guaranteed.</p>
    <Carousel responsive={responsive} infinite={true} className="w-[80%] my-0 mx-auto relative">
    <div className='item'>
                    <img className="w-[100px] h-[100px]  xl:w-[110px] xl-h-[110px] mt-0 mb-[15px] mx-auto 2xl:w-[140px] 2xl:h-[140px]" src="../images/skill1.svg" alt="Image" />
                    <h5>Java Script</h5>
                </div>  
                <div className='item'>
                    <img className="w-[100px] h-[100px] xl:w-[110px] xl-h-[110px] mt-0 mb-[15px] mx-auto 2xl:w-[140px] 2xl:h-[140px]" src="../images/skill2.svg" alt="Image" />
                    <h5>React</h5>
                </div>   
                <div className='item'>
                    <img className="w-[100px] h-[100px]  xl:w-[110px] xl-h-[110px] mt-0 mb-[15px] mx-auto 2xl:w-[140px] 2xl:h-[140px]" src="../images/skill3.svg" alt="Image" />
                    <h5>Responsive Design</h5>
                </div>  
                <div className='item'>
                    <img className="w-[100px] h-[100px]  xl:w-[110px] xl-h-[110px] mt-0 mb-[15px] mx-auto 2xl:w-[140px] 2xl:h-[140px]" src="../images/skill4.svg" alt="Image" />
                    <h5>Adobe Illustrator</h5>
                </div>  
                <div className='item'>
                    <img className="w-[100px] h-[100px]  xl:w-[110px] xl-h-[110px] mt-0 mb-[15px] mx-auto 2xl:w-[140px] 2xl:h-[140px]" src="../images/mongo.png" alt="Image" />
                    <h5>MongoDB</h5>
                </div>  
                <div className='item'>
                    <img className="w-[100px] h-[100px]  xl:w-[110px] xl-h-[110px] mt-0 mb-[15px] mx-auto 2xl:w-[140px] 2xl:h-[140px]" src="../images/node.png" alt="Image" />
                    <h5>Node Js</h5>
                </div>  
    </Carousel>
    </div>
    </motion.section>
    )
};

export default Skills;
