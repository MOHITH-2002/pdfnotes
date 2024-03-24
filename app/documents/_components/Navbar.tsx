import React from 'react'
import Logout from './logout'
import { UploadFile } from './Uploadfile'
import { Register } from './register'
import CreateFolder from './create-folder'
import SearchWeb from './search'
import { Hamburger } from './card/hamburger'


const Navbar = () => {
    
  return (
    <div className="w-full h-20 flex gap-2 justify-between items-center ">
    <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="md:w-8 md:h-8 w-6 h-6">
  <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z" />
  <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
</svg>
        <h1 className='flex items-center font-bold text-2xl cursor-default md:text-3xl  text-blue-600'>
          Pdfnotes

        </h1>
    </div>
    <div className='hidden md:flex gap-3'>
      <SearchWeb/>
        <UploadFile/>
      
        <CreateFolder/>
        <Register/>
        <Logout/>
    </div>
    <div className='flex md:hidden gap-3'>
    <SearchWeb/>
    <Hamburger/>
    </div>
    
    </div>
  )
}

export default Navbar
