import React from 'react';
import Link from 'next/link';

const rentalDemo = () => {
  return (
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center pt-40'>
        <iframe 
            src="https://docs.google.com/presentation/d/e/2PACX-1vTjnGgY31YA5xETGZkV-sMRMrOAw1sBGhSSZm-d_n75jsSlD-Y01ylQau-RKELh6Z11CQWbHJegHqnB/embed?start=true&loop=true&delayms=5000" 
            frameborder="0" 
            width="960" 
            height="569" 
            allowfullscreen="true" 
            mozallowfullscreen="true" 
            webkitallowfullscreen="true"
        >
        </iframe>
        <div>
        <Link href='/#projects'>
            <p className='px-8 py-2 mt-4 mr-8 underline cursor-pointer'>Back</p>
        </Link>
        </div>
    </div>
    
  )
}

export default rentalDemo