
import React from 'react'

import Navbar from './_components/Navbar'
import Files from './_components/files'

const page = () => {
  return (
    <div className="flex flex-col w-full h-full px-3 md:px-6  ">
      <Navbar/>
      <Files/>
    </div>
  )
}

export default page
