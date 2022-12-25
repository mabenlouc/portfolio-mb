import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import Link from 'next/link';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen pt-10'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <div className='grid lg:grid-cols-5 gap-8'>

                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img 
                                className='rounded-xl hover:scale-105 ease-in duration-300' 
                                src='https://media-exp1.licdn.com/dms/image/D5603AQGLJiRzZTnlcw/profile-displayphoto-shrink_800_800/0/1664946508431?e=2147483647&v=beta&t=u-8keaCjdFgOKArTymaV7YBjUZz5iJIrWg-0Wa65Jh0' 
                                width='700' 
                                height='350'
                                alt='/' 
                            />
                        </div>
                        <div>
                            <h2 className='py-2'>Mohammed Benloucif</h2>
                            <p>Full-Stack Developer</p>
                            <p className='py-4'>I am available for freelance or full-time positions. Contact me and let&apos;s talk.</p>
                        </div>
                    <div>
                        <p className='uppercase pt-8'>Connect With Me</p>
                            <div className='flex items-center justify-between py-4'>
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
                        </div>
                    </div>
                </div> 

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form action='https://formspree.io/f/xnqyabjz' method='POST'>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type='text'
                                        name='name' 
                                        
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input  
                                        className='border-2 rounded-lg p-3 flex vorder-gray-300'
                                        type='text'
                                        name='phone'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Email</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type='email' 
                                        name='email'
                                    />
                            </div>
                            <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Subject</label>
                                    <input 
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type='text' 
                                        name='subject'
                                    />
                            </div>
                            <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Message</label>
                            <textarea className='border-2 rounded-lg p-3 border-gray-300' name='message' rows='10'></textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/#about'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact