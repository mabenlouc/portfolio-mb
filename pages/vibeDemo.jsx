import React from 'react';
import Link from 'next/link';

const vibeDemo = () => {
  return (
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center pt-40'>
        <iframe src="https://drive.google.com/file/d/17QpJ6roEzKvkhk3GsoYQv3XYyVMszAE5/preview" width="740" height="480" allow="autoplay"></iframe>
        <div>
        <Link href='/#projects'>
            <p className='px-8 py-2 mt-4 mr-8 underline cursor-pointer'>Back</p>
        </Link>
        </div>
    </div>
     
  )
}

export default vibeDemo