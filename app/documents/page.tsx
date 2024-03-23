import React from 'react'

import Navbar from './_components/Navbar'
import Files from './_components/files'
import Folders from './_components/Folders'
interface props{
  searchParams:{
    searched?:string;
  }
}
const page = ({searchParams}:props) => {
  return (
    <div className="flex flex-col w-full h-full px-3 md:px-6  ">
      
      
      <Folders searchParams={searchParams}/>
      <Files pathname={"/documents"} searchParams={searchParams} />
      
    </div>
  )
}

export default page
