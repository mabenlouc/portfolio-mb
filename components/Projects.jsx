import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full pt-10'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I&apos;ve Developed</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem 
                title='Luxury Rentals' 
                technologies='HTML, Bootstrap, PHP, SQL'
                backgroundImg='https://drive.google.com/file/d/1z_SZV4rgod_NpaDU4kPVT-puKfYZ4TN1/preview'
                projectUrl='/rental'
            />
            <ProjectItem 
                title='Vibe App' 
                technologies='Java, Android Studio'
                backgroundImg="https://drive.google.com/file/d/1-zv4IIWkadYPFn_b2wPVRXe5aOzM6roq/preview"
                projectUrl='/vibe'
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