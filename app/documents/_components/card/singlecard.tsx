// "use client"
import { cn } from '@/lib/utils'

import Link from 'next/link'
import React from 'react'


import { Footer } from './footer'
import Image from 'next/image'
import { MoreVertical } from 'lucide-react'
import { SingleFileActions } from '@/context/actions/singlefile'
interface boardCard {
    name:string;
    url:string;
    filename:string;
    email:string;
    imageurl:string;
    id:any;
}
const Singlecard = async  ({id,name,url,email,filename,imageurl}:boardCard) => {

    
    
    
    
    return (
    <Link href={url}>
        
    <div className="group aspect-[100/127] border rounded-lg  dark:hover:shadow-[0_2px_2px_2px_#434242] hover:shadow-[0_2px_2px_2px_#D6E4E5] justify-between flex flex-col overflow-hidden">
      <div className={cn("relative flex-1" )}>
          
               <SingleFileActions
            id={id} 
            url={url}
          >
            <button
              className="absolute top-1 z-50 right-0 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-2 outline-none"
            >
              <MoreVertical
                className=" opacity-75 hover:opacity-100 transition-opacity"
              />
            </button>
          </SingleFileActions>
          <Image src={imageurl} alt="boards" fill className="object-fit"/>
        

        
            
        
            


        </div>
        <div className="border-t-2 bg-slate-200">

        <Footer
           filename={filename}
           name={name}
           email={email}
           url={url}
           />
           </div>
      
    </div>
    </Link>

  )
}

export default Singlecard