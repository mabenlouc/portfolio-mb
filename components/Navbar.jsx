import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { useRouter } from 'next/router';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#3cf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  useEffect(()=>{
    if (
      router.asPath === '/rental' ||
      router.asPath === '/vibe' ||
      router.asPath === '/kombat'
    ){
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router])


  const handleNav = () => {
      setNav(!nav);
  }

  useEffect(()=> {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    }
    window.addEventListener('scroll', handleShadow);
  },[])

  return (
    <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          <Link href='/'>
            <img 
              src='https://pngimg.com/uploads/letter_m/letter_m_PNG80.png'
              alt='/' 
              width='75px' 
              height='75px' 
            />
          </Link>
          <div>
            <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
              <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
              </Link>
              <Link href='/#skills'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
              </Link>
              <Link href='/#projects'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
              </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden'>
              <AiOutlineMenu style={{color: `${linkColor}`}} size={25} />
            </div>
          </div>
        </div>

    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
      <div 
        className={
          nav 
            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }
      >
      <div>
        <div className='flex w-full items-center justify-between'>
          <Link href='/'>
            <img onClick={()=> setNav(false)} src='https://pngimg.com/uploads/letter_m/letter_m_PNG80.png'
              alt='/' 
              width='75px' 
              height='75px'/>
          </Link>
          <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
            <AiOutlineClose />
          </div>
        </div>
        
      </div>
      <div className='py-4 flex flex-col'>
        <ul className='uppercase'>
          <Link href='/#about'>
          <li onClick={()=> setNav(false)} className='py-4 text-sm'>About</li>
          </Link>
          <Link href='/#skills'>
          <li onClick={()=> setNav(false)} className='py-4 text-sm'>Skills</li>
          </Link>
          <Link href='/#projects'>
          <li onClick={()=> setNav(false)} className='py-4 text-sm'>Projects</li>
          </Link>
        </ul>
        
      </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar