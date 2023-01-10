import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


import "./components.css"

const Home = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ["Web Developer", "Web Designer", "Programmer"]
  const [text, setText] = useState("")
  const [delta, setDelta] = useState(300)
  const control = useAnimation()
  const [ref,inView] = useInView()

  const period = 1500

  useEffect(() => {
      let ticker = setInterval(() => {
          tick()
      },delta)
      return () => {clearInterval(ticker)}
  }, [text])

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
        control.start("hidden")
    }
  }, [control, inView]);

  

  const tick = () => {
      let i = loopNum % toRotate.length 
      let fullText = toRotate[i]
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

      setText(updatedText)

      if(isDeleting) {
          setDelta(prevDelta => prevDelta / 2)
      }
      if(!isDeleting && updatedText === fullText) {
          setIsDeleting(true)
          setDelta(period)
      } else  if(isDeleting && updatedText === ""){
          setIsDeleting(false)
          setLoopNum(loopNum + 1)
          setDelta(500)
      }
  }

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  }
  return (
    <motion.section ref={ref} variants={boxVariant}  initial="hidden" animate={control}
    
    className='flex justify-center items-center pt-10' id='home'>
      <div className='text-center'>
		
		<div className="mb-1 mt-1 h-[180px] px-4 ssmm:px-6 mmss:h-[130px] xxs:h-[105px] lg:h-[135px] xl:h-[90px] xl:mt-10">
			
      <h1 className="text-[46px] lg:text-[50px] xl:text-[55px] font-bold py-1 xl:hidden text-white  ">{`Hi my name is Luka `}<br/> <span className="wrap-color">  {text}</span></h1>
      <h1 className="text-[46px] lg:text-[50px] xl:text-[55px] font-bold py-1 xl:block hidden text-white  ">{`Hi my name is Luka, `} <span className="wrap-color">  {text}</span></h1>
			
		</div>
		<p className="text-[#b8b8b8] text-center text-[18px] lg:text-[20px] xl:text-[24px] xl:hidden tracking-wider w-[100%]">Fullstack Developer in progress, <br/>based in Germany, code addicted...</p>
    <p className="text-[#b8b8b8] text-center text-[18px] lg:text-[20px] xl:text-[24px] xl:block hidden tracking-wider w-[100%]">Fullstack Developer in progress, based in Germany, code addicted...</p>
        
        <div className="btn-div flex justify-center  mt-4">
			<a href="https://github.com/LucaBrkovic">
				<button className="flex justify-center items-center border-2 border-[#6719B0]">
					Github <img className="text-white w-6 h-6 "  src="../images/git-icon.svg"/>
				</button>
			</a>
			
		</div>
	</div>
    </motion.section>
  )
}

export default Home
