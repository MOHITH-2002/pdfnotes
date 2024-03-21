'use client';

import {
  MultiFileDropzone,
  type FileState,
} from '@/lib/mutlidropzone';
import { useEdgeStore } from '@/lib/edgestore';
import { useEffect, useState } from 'react';



import { fileupload } from '@/context/file/fileupload';
import { usePathname } from 'next/navigation';


export  function MultiFileDropzoneUsage() {
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const { edgestore } = useEdgeStore();

  const pathname = usePathname();
  console.log(pathname);
  

  function updateFileProgress(key: string, progress: FileState['progress']) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key,
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }


  return (
    <div className=" pt-10 ">
      <MultiFileDropzone
        value={fileStates}
        onChange={(files) => {
          setFileStates(files);
        }}
        onFilesAdded={async (addedFiles) => {
          setFileStates([...fileStates, ...addedFiles]);
          await Promise.all(
            addedFiles.map(async (addedFileState) => {
              try {
                // console.log(addedFileState.file.name);
                
                
                const res = await edgestore.publicFiles.upload({
                  file: addedFileState.file,
                  onProgressChange: async (progress) => {
                    updateFileProgress(addedFileState.key, progress);
                    if (progress === 100) {
                      // wait 1 second to set it to complete
                      // so that the user can see the progress bar at 100%
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      updateFileProgress(addedFileState.key, 'COMPLETE');
                    }
                  },
                });
                const filenameParts = addedFileState.file.name.split('.');
    // Get the last word after splitting
    const lastWord = filenameParts[filenameParts.length - 1];

                await fileupload({urls:res.url,filename:addedFileState.file.name,lastWord:lastWord,pathname:pathname});
                
                

              } catch (err) {
                updateFileProgress(addedFileState.key, 'ERROR');
              }
            }),
          );
        }}
      />
      {/* <HandleUpload urls={urls}/> */}
    </div>
  );
}