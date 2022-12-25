import React from 'react';
import Image from 'next/image';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

const vibe = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <div className='absolute top-[80%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Vibe Chatting App</h2>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    Worked with a team as a backend developer using Java and Android Studio to create a chatting application using agile methodologies.
                    Developed registration page, allowing users to create an account with their information secured in Firebase Authentication to then be used for sign in purposes.
                    Succeeded in allowing messages to be sent to Cloud Firestore database, while displaying the message on the devices of the sender and recipient in less than a second.
                    Prevented chat log from creating duplicate chats, as well as preventing users from being able to message themselves if they attempt to do so.

                </p>
                <Link href='vibeDemo'>
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                </Link>
                <Link href='https://github.com/COSC481W-2022Fall/capstone-project-vibe/tree/testing'>
                <button className='px-8 py-2 mt-4'>Code</button>
                </Link>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-2 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Android Studio</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Java</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Cloud Firestore</p>
                    </div>
                </div>
            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>
    </div>
  );
};

export default vibe;