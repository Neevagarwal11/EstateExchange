import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function header() {
  return (
    <header className='bg-slate-200 shadow-md '>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>

        <Link to="/">
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-red-400'>Estate</span>
            <span className='text-red-900'>Exchange</span>
        </h1>
        </Link>

        <form className='bg-slate-100 flex items-center p-3 rounded-lg'>
            <input type="text" placeholder='Search...' className='w-24 sm:w-64 focus:outline-none   bg-transparent'/>
            <FaSearch></FaSearch>
        </form>

        <ul className='flex gap-4'>
            <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>About</li>
            </Link>
            <Link to='/sign-in'>
            <li className='cursor-pointer text-red-600 font-[600]'>Sign In</li>
            </Link>
        </ul>


        </div>
    </header>
  )
}

export default header