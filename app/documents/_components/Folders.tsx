
import React from 'react'
import Foldercard from './card/foldercard';
import { getAllFolders } from '@/context/folder/folder';

const Folders = async () => {
    const files = await getAllFolders();

    return (
     <div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-8 pb-8">
        

    {
    files?.map((file: { _id: string; folderName: string;})=>(
            
            
        <Foldercard
        
        key={file._id}
        id={file._id}
        name={file.folderName}
        />
        ))
    }
        </div>
    </div>
    )
}

export default Folders
