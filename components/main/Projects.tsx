import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20' id='projects'>
        <h1 className='text-[40px] font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard
                title='Modern Next.Js Portfolio'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius labore facere iusto animi minus.'
                src='/NextWebsite.png'/>
            <ProjectCard
                title='Interactive Website Cards'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius labore facere iusto animi minus.'
                src='/CardImage.png'/>
            <ProjectCard
                title='Space Themed Website'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius labore facere iusto animi minus.'
                src='/SpaceWebsite.png'/>
        </div>
    </div>
  )
}

export default Projects