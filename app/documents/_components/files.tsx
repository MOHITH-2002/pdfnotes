"use client"
import { getfiles } from '@/context/file/fileupload';
import React, { useEffect, useState } from 'react';
import Singlecard from './card/singlecard';


const Files = ({pathname}: any) => {
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedFiles = await getfiles({pathname: pathname});
        
        setFiles(fetchedFiles);
        
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };
    fetchData();
  }, [pathname]);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-8 pb-8">
        {files.map((file: { _id: string; filename: string; imageurl: string; username: string; email: string; fileUrl: string; }) => (
          <Singlecard
            key={file._id}
            id={file._id}
            filename={file.filename}
            imageurl={file.imageurl}
            name={file.username}
            email={file.email}
            url={file.fileUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Files;
