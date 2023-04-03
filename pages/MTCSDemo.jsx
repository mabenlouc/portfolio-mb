import React from 'react';
import Link from 'next/link';

const MTCSDemo = () => {
  return (
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center pt-40'>
        <iframe src="https://www.youtube.com/embed/IwUHHD4-z70" width="962" height="624" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div>
        <Link href='/#projects'>
            <p className='px-8 py-2 mt-4 mr-8 underline cursor-pointer'>Back</p>
        </Link>
        </div>
    </div>
     
  )
}

export default MTCSDemo