import React from 'react'
import './HomeComponent.css'
import image from '../../assets/image/user.png'
const HomeComponent = () => {
  
  return (
    <div className='home-container'>
      <div className='swing'>
      <img src={image} alt='U'  />
      
      </div>
      <div className='user-name'>
        <span className='user-info'>I am </span>
        <span className='user-name-style'>NAGARAJ S</span>
      </div>

      <div className='user-intro'>
        <div>
          Hello, I'm Nagaraj S, a 3rd-year Computer Science Engineering student at Saveetha Engineering College.
          I'm a dedicated secretary of the Intelligent Systems in Tech Society, and I also serve as a coordinator in the Literary Club, Robotics Club, and GDSC Club. 
           Through this portfolio, I invite you to explore my journey through the worlds of technology, creativity, and innovation.
        </div>
      </div>
    </div>
  )
}

export default HomeComponent