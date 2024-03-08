import { getallfiles } from '@/context/file/fileupload';
import React from 'react'
import Singlecard from './singlecard';

const Files =async () => {
    const files = await getallfiles();
    // console.log(files);
    // console.log(files);
  return (
    <div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-8 pb-8">
           
    {
    files?.map((file: { _id: React.Key | null | undefined | string; filename: string; imageurl: string; username: string; email: string; fileUrl: string;})=>(
            
            
        <Singlecard
        
        key={file._id}
        id={file._id}
        filename={file.filename}
        imageurl={file.imageurl}
        name={file.username}
        email={file.email}
        url={file.fileUrl}


        />
        ))
    }
        </div>
    </div>
  )
}

export default Files
