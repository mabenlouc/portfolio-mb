import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdCloudDownload } from 'react-icons/md';
import Link from 'next/link';

const Main = () => {
  return (
    <div id='about' className='w-full h-screen text-center pt-40'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4 text-gray-700'>
                    <span className='text-[#16489E]'> Mohammed Benloucif </span>
                </h1>
                <h1 className='py-4 text-gray-700 md:text-5xl sm:text-3xl'>
                    Jr React Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I graduated with a Bachelors of Science in Computer Science in winter of 2023. I thank all my professors who have guided me on this journey, and family and friends who supported me through it. Throughout my experience at school, 
                    I had the opportunity to learn and apply various programming languages and concepts, and found an interest in web development.
                    I am excited to start my career in this field and to continue learning and growing!
                </p>                
                <p className='uppercase text-sm pt-10 tracking-widest text-gray-600'>Download CV</p>
                <div className='flex items-center justify-between max-w-[60px] m-auto py-4'>
                    <a
                        href='https://drive.google.com/file/d/1NfkY-uKhX9przNqFLk4WfQGmTYwU-d-b/preview' 
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