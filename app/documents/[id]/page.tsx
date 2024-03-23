"use client"
import { getfiles } from '@/context/file/fileupload';
import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Singlecard from '../_components/card/singlecard';
import { UploadFile } from '../_components/Uploadfile';
import Image from 'next/image';
import Link from 'next/link';

interface props{
  searchParams:{
    searched?:string;
  }
}
const DynamicPage = ({searchParams}:props) => {
  const pathname = usePathname();

  
  
  
  const [files, setFiles] = useState<any[]>([]);
  const [nofilesfound, setNofilesfound] = useState<boolean>(false);
  const [pathSegments, setPathSegments] = useState<string[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedFiles = await getfiles({ pathname: pathname });

        if (fetchedFiles.length === 0) {
          setNofilesfound(true);
          return;
        }
        setFiles(fetchedFiles);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };
    fetchData();
  }, [pathname]);

  useEffect(() => {
    if (pathname) {
      const segments = pathname.split('/').filter(segment => segment.trim() !== '');
      setPathSegments(segments);
    }
  }, [pathname]);

  return (
    <>
    
      <div className="flex">
        {pathSegments.map((segment, index) => (
          <span key={index} >
            <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`} className="text-blue-600 hover:text-blue-400" >
      
                {segment}
                
            </Link>
            {index < pathSegments.length - 1 && <> &gt;</>
}
          </span>
        ))}
      </div>

      {nofilesfound && (
        <div className="h-full w-full items-center flex flex-col justify-center pt-20 gap-5">
          <Image src="https://res.cloudinary.com/dpgxmmowq/image/upload/v1711039477/undraw_no_data_re_kwbl_elkujd.svg" alt="no-data" width={300} height={300} />
          <UploadFile />
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-8 pb-8">
        {files.filter((item)=>searchParams?.searched === undefined ? item : item.filename.includes(searchParams?.searched)).map((file: { _id: string; filename: string; imageurl: string; username: string; email: string; fileUrl: string; }) => (
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
    </>
  );
};

export default DynamicPage;
