import React from 'react';
import Image from 'next/image';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

const kombat = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <div className='absolute top-[80%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Kombat of Kings</h2>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    Developed and deployed a 'Mortal Kombat' type of game using HTML, CSS, and JavaScript. Used a CDN JavaScript library to better animate the health bar depleting.
                    2 player game in which you fight off your opponent while dodging hits. Both players have 60 seconds to hit their opponent 5 times to be declared the winner.
                    Developed the game at first creating player objects, designing rectangles as players and designing an attack box to allow the player to damage another player. 
                    Implemented animations into the game using sprites, to allow characters to make realistic movements. Characters have specific attributes that give them certain advantages, as well as disadvantages.
                    Programmed players to be able to jump or run off screen, allowing for players to make a &apos;sneak attack&apos;.

                </p>
                <Link href='https://kombatofkings.netlify.app' target='_blank'>
                <button className='px-8 py-2 mt-4 mr-8'>Play Now</button>
                </Link>
                <Link href='https://github.com/mabenlouc/KombatOfKings'>
                <button className='px-8 py-2 mt-4'>Code</button>
                </Link>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />HTML</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />CSS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />JavaScript</p>
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

export default kombat;