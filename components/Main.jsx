import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdCloudDownload } from 'react-icons/md';
import Link from 'next/link';

const Main = () => {
  return (
    <div id='about' className='w-full h-screen text-center pt-30'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    LET&apos;S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I&apos;m <span className='text-[#5651e5]'> Mohammed </span>
                </h1>
                <h1 className='py-4 text-gray-700'>
                    A Full-Stack Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I am a full stack developer specializing in building and designing exceptional 
                    digital experiences. Currently, I am focused on building responsive full stack 
                    web applications as well as mobile applications, while learning new frameworks and libraries.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a
                        href='http://linkedin.com/in/mabenlouc'
                        className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </a>
                    <a 
                        href='https://github.com/mabenlouc'
                        className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </a>
                    <a 
                        href='mailto:mabenlouc@gmail.com'
                        className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </a>
                    <a 
                        href='tel:+734 730 7284'
                        className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FiPhoneCall />
                    </a>
                </div>
                
                <p className='uppercase text-sm pt-10 tracking-widest text-gray-600'>Download CV</p>
                <div className='flex items-center justify-between max-w-[60px] m-auto py-4'>
                    <a
                        href='https://drive.google.com/file/d/1h1JQhuLLzUDrsKssSDNWukBD6MpXxgmO/preview' 
                        className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <MdCloudDownload />
                    </a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main