import React from 'react'
import AboutMe from '@/app/AboutMe/page.jsx'
import Contact from '@/app/Contact/page.jsx'
import Projects from '@/app/Projects/page.jsx'
import Work from '@/app/Work//page.jsx'
import Skills from '@/app/Skills/page.jsx'
import Intro from '@/app/Intro/page.jsx'
import Education  from '@/app/Education/page.jsx'
const page = () => {
  return (
    <div>
      <Intro/>
      <AboutMe/>
      <Education/>
      <Work/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default page