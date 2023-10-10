import React, {useState} from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
        <h1 className='text-white text-2xl font-bold z-20'>Business</h1>
        <HiMenuAlt3 onClick={handleNav} className='text-white z-20 cursor-pointer' size={25} />
        <div className={nav ? 'fixed text-gray-300 w-full left-0 top-0 h-screen bg-black/90 px-4 py-7 flex-col z-10 ' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
            <ul className='flex flex-col fixed w-full h-full items-center justify-center '>
                <li className='font-bold text-3xl p-8'>Home</li>
                <li className='font-bold text-3xl p-8'>Contact</li>
                <li className='font-bold text-3xl p-8'>About</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar