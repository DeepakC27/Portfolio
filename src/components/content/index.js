import React from 'react'
import ExperienceTimelineComponent from './timelineExp'
import ProjectsComponent from './projects'
import AboutMeComponent from './aboutme'
import {
  Button,
  SectionHeading,
  SectionContent
} from '../commonComponents'
import profilePic from '../../assets/profilepic-2.jpg'
import './index.scss'

const Content = () => {
  return (
    <div className='main-content-wrapper'>
      <section className='intro-section'>
        <div className='section-heading'>
          <div className='text1'>
            Hi, I'm
          </div>
          <div className='text2'>
            Deepak Chaudhari
          </div>
          <div className='text3'>
            <div>I build things for</div>
            <div>the web</div>
          </div>
        </div>
        <br />
        <SectionContent className='intro-section_content light-text'>
          I'm a software engineer based in Mumbai, who enjoys building things that live on the internet.
          I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficiency.
          <br /><br/>
          Shortly after graduating from VJTI, I joined the engineering team at Servify where I work on a wide variety of interesting and meaningful projects on a daily basis.
        </SectionContent>
        <div>
          <Button className='btn-outline mt10'>
            <span>Get in touch</span>
          </Button>
          <Button className='new-Framework-btn btn-outline mt10' onClick={() => {
              window.location.href = 'https://deepakc.netlify.app/'
            }}>
            <span>New Design</span>
          </Button>
        </div>
        <br />
        <div className='intro-section_image'>
          <div className='profile-imag-wrapper'>
            <div className='picture__outline' />
            <picture>
              <img src={profilePic} alt='Profilepic' />
            </picture>
          </div>
        </div>
      </section>
      <ExperienceTimelineComponent />
      <ProjectsComponent />
      <AboutMeComponent />
    </div>
  )
}

export default Content
