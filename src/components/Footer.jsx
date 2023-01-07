import React from 'react'
import "./components.css"
const Footer = () => 
  (
    <footer className="footer">
    <div className="footer-container">
        <div className="logo-container-foter">
            <img src="../images/logo.svg" className="footer-logo"/>
        </div>
      <div className="social-icon social-icon_foter">
                        <a href="https://www.linkedin.com/in/luka-brkovic-319557256/">
                        <img src="../images/nav-icon1.svg" alt="social" />
                        </a>
                        <a href="https://t.me/lukabrkovic">
                        <img src="../images/nav-icon2.svg" alt="social" />
                        </a>
                        <a href="https://www.instagram.com/luka_brx/">
                        <img src="../images/nav-icon3.svg" alt="social" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100083708395471">
                        <img src="../images/nav-icon4.svg" alt="social" />
                        </a>
      </div>
    </div>
      <p>Copyright 2023. All Rights Reserved</p>

</footer>
  )


export default Footer
