import React from 'react'
import "./item.css"
const Item = ({title, description, imgUrl, linkSite, linkGit}) => {
  return (
    
      
      <div className='item-bx'>
            <img src={imgUrl} />
            
            <div className="item-tx">
                <h4>{title}</h4>
                <span>{description}</span>
                <div className="site-btn-container">
                 <a href={linkSite}><button className="site-btn">WebSite</button></a>
                <a href={linkGit}><button className="site-btn">Github </button></a>   
                </div>
                
            </div>
        </div>

    
  )
}

export default Item
