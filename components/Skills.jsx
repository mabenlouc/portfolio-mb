import React from 'react';
import Image from 'next/image';
import htmlImg from '../public/assets/html.png';
import cssImg from '../public/assets/css1.png';
import tailwindImg from '../public/assets/tailwind.png';
import reactImg from '../public/assets/react.png';
import phpImg from '../public/assets/php.png';
import javaImg from '../public/assets/java.png';
import javascriptImg from '../public/assets/javascript.png';
import pythonImg from '../public/assets/python.png';
import dynamodbImg from '../public/assets/DynamoDB.png';
import rdsImg from '../public/assets/amazonRDS.png';
import mysqlImg from '../public/assets/mysql.png';
import firebaseImg from '../public/assets/skills/firebase.png';


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 pt-24'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>

            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <h2 className='uppercase text-sm tracking-widest text-gray-600'>Front-End Development</h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img 
                                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                                width='64'
                                height='64'
                                alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                width='64'
                                height='64'
                                alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img  
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                                width='64'
                                height='64'
                                alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img  
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                width='64'
                                height='64'
                                alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>
            </div>


            <div className='max-w-[1240px] w-full h-full mx-auto p-2 pt-10 flex justify-center items-center'>
                <h2 className='uppercase text-sm tracking-widest text-gray-600'>Back-End Development</h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img  
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                                width='64'
                                height='64'
                                alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>PHP</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img  
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                                width='64'
                                height='64'
                                alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Java</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img  
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                width='64'
                                height='64'
                                alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img  
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                width='64'
                                height='64'
                                alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
            </div>


            <div className='max-w-[1240px] w-full h-full mx-auto p-2 pt-10 flex justify-center items-center'>
                <h2 className='uppercase text-sm tracking-widest text-gray-600'>Databases</h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                        <img
                                src='https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png'
                                width='64'
                                height='64'
                                alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>DynamoDB</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img  
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                                width='64'
                                height='64'
                                alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Cloud Firestore</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                width='64'
                                height='64'
                                alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MySQL</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                                width='64'
                                height='64'
                                alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Amazon RDS</h3>
                        </div>
                    </div>
                </div>


            </div>


        </div>

    </div>
  )
}

export default Skills