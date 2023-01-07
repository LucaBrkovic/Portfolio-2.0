import React, { useState,useEffect } from 'react'
import "./components.css"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {FirstTab, SecondTab, ThiridTab} from './tabs'




const Projects = () => {
const [activeTab, setActiveTab] = useState("tab1")
const control = useAnimation()
const [ref,inView] = useInView()

useEffect(() => {
  if (inView) {
    control.start("visible");
  } else {
      control.start("hidden")
  }
}, [control, inView]);

const handleTab1 = () => {

  setActiveTab("tab1");
};
const handleTab2 = () => {

  setActiveTab("tab2");
};
const handleTab3 = () => {

  setActiveTab("tab3");
};

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
}

  return (
   <motion.section ref={ref} variants={boxVariant}  initial="hidden" animate={control} className='project' id="project">
   <h2 className="font-bold text-[30px] md:text-[40px] lg:text-[40px] 2xl:text-[45px] text-center mb-10">Projects</h2>

  <div className="bg-rgbaskill rounded-[32px] text-center shadow-xl min-h-[400px] grid grid-rows-[65px_1fr]">

  <ul className='tabs rounded-t-[32px] w-[100%] flex justify-between items-center border-2 border-[#39a2db] rounder-t-[32px]'>
    <li  className={activeTab === "tab1" ? "active" : "" } onClick={handleTab1}>Tab 1</li>
    <li  className={activeTab === "tab2" ? "active" : "" } onClick={handleTab2}>Tab 2</li>
    <li  className={activeTab === "tab3" ? "active" : "" } onClick={handleTab3}>Tab 3</li>
  </ul>
    
  {activeTab === "tab1" && <FirstTab />}
  {activeTab === "tab2" && <SecondTab />}
  {activeTab === "tab3" && <ThiridTab />}
    
  </div>

   </motion.section>
   
  )
}

export default Projects
