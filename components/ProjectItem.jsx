import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



const ProjectItem = ({title, technologies, backgroundImg, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#16489E] to-[#709dff]'>
        <iframe className='rounded-xl group-hover:opacity-10' src={backgroundImg} width='400' height='280' scrolling="no" seamless alt='/' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-xl text-white tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{technologies}</p>
            <Link href={projectUrl}>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 text-lg cursor-pointer'>More Info</p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItem