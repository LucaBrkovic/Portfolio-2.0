import React from 'react'
import Item from './Item'
import projects from './projectData'
import "./item.css"
const ThiridTab = () => {
  return (
    <div className='px-6 py-4 ssm:px-10 ssm:py-8 grid items-strech place-content-center md:grid-cols-2 gap-8 '>
    {
      projects.map((project,index) => {
        return (
          <Item key={index} {...project} />
        )
    })
    }
      </div>
  )
}

export default ThiridTab