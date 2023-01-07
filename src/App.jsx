import "./app.css"
import { Contact, Footer, Home, Navbar, Projects, Skills } from "./components"
function App() {

    return (
      <div>
            <Navbar />
      <div className="background">
      <Home />
      {/** HOME */}
      </div>
    
    {/**skills */}
    <div>
      <div className="relative">
      <div className="custom-shape-divider-bottom-1673014318">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
</div>
</div>
<div className="pb-[50px] pt-10 px-4 ss:px-8 sm:px-12 md:px-24 xl:px-28 relative top-[-40px] mt-[0px] ">
<Skills />
</div>
</div>  

{/**projects */}
<div>
<div className="pb-[50px] pt-10 px-4 ss:px-8 sm:px-12 md:px-24 xl:px-28 relative top-[-40px] mt-[0px] ">
<Projects />

</div>
<div className="relative z-10">
<div className="custom-shape-divider-top-1673041248 ">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
</div>
</div>

{/** contact me */}
<div className="   pt-36  relative bg-white">
  <Contact />
</div>
{/**footer */}
<Footer />
</div>
    )
 
}

export default App
