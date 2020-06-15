import React from 'react'
import {
  SectionHeading,
  SectionContent
} from '../commonComponents'
import facebook from '../../assets/icons/facebook.png'
import github from '../../assets/icons/github.png'
import linkedin from '../../assets/icons/linkedin.png'
import mail from '../../assets/icons/mail.png'
import './index.scss'

const AboutMeComponent = () => {
  return (
    <section id='aboutme-section-wrapper'>
      <SectionHeading>Bio</SectionHeading><br /><br />
      <div className='aboutme-container'>
        <div className='about-section_image'>
          <div />
        </div>
        <SectionContent className='dark-text'>
          Something about myself hmmmmm.......
          <div className='social-links-container'>
            {[facebook, github, linkedin, mail].map((imageSrc, idx) => (
              <div className='img-wrapper' key={idx}>
                <div className='imageBox'>
                    <img src={imageSrc} alt='social-img' />
                </div>
              </div>
            ))}
          </div>
        </SectionContent>
      </div>
      <div className='tech-stack-wrapper'>
        <div>Following are the tech stack i'm worked on</div>
        <div className='tech-stack-container'>
          <div>
            <div className='tech-heading-label'>Language</div>
            <ul>
              <li>Javascript</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
          <div>
            <div className='tech-heading-label'>Frameworks</div>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
            </ul>
          </div>
          <div>
            <div className='tech-heading-label'>WebAPI</div>
            <ul>
              <li>Web Speech</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeComponent
