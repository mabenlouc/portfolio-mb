import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full pt-10'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#16489E]'>Projects</p>
            
            <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem
                title='Luxury Rentals'
                technologies='HTML, Bootstrap, PHP, SQL'
                backgroundImg="https://drive.google.com/file/d/1z_SZV4rgod_NpaDU4kPVT-puKfYZ4TN1/preview"
                projectUrl='/rental'
            />
            <ProjectItem
                title='Vibe App'
                technologies='Java, Android Studio'
                backgroundImg="https://drive.google.com/file/d/1-zv4IIWkadYPFn_b2wPVRXe5aOzM6roq/preview"
                projectUrl='/vibe'
            />
            <ProjectItem
                title='Kombat of Kings'
                technologies='HTML, CSS, JavaScript'
                backgroundImg="https://drive.google.com/file/d/1922znaucAqqEUOwgeRYjVvgPYSSga67G/preview"
                projectUrl='/kombat'
            />
            <ProjectItem 
                title='Secure Multi-threaded Chat Service' 
                technologies='Java, GCP'
                backgroundImg="https://drive.google.com/file/d/1hfOYLO-ZFUaN3Ew6sv9upQhcMI2k5S43/preview"
                projectUrl='/MTClientServer'
            />
{/*
            <ProjectItem 
                title='Luxury Rentals' 
                backgroundImg={rentalsImg} 
                projectUrl='/property'
            />
            <ProjectItem 
                title='Luxury Rentals' 
                backgroundImg={rentalsImg} 
                projectUrl='/property'
            />
*/}
            </div>
        </div>
    </div>
  )
}

export default Projects