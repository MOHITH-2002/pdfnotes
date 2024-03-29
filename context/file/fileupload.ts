"use server"

import { auth } from "../auth/auth";
import { connectToDatabase } from "../database";
import { File } from "../model/file-model";
import { unstable_noStore as noStore } from "next/cache";

import { User } from "../model/usermodel";

interface props{
     urls: string;
     filename: string;
     lastWord: string;
     pathname: string;
}
const data = [{
      type:"pdf",
      url:"https://res.cloudinary.com/dpgxmmowq/image/upload/v1709882988/icons%20web/pdfimage_xrzyah.jpg"
    },
    {
      type:"jpeg",
      url:"https://res.cloudinary.com/dpgxmmowq/image/upload/v1709882986/icons%20web/image_rwhl05.jpg"
    },
    {
      type:"png",
      url:"https://res.cloudinary.com/dpgxmmowq/image/upload/v1709882986/icons%20web/image_rwhl05.jpg"
    },
    {
      type:"jpg",
      url:"https://res.cloudinary.com/dpgxmmowq/image/upload/v1709882986/icons%20web/image_rwhl05.jpg"
    },
    {
      type:"js",
      url:"https://res.cloudinary.com/dpgxmmowq/image/upload/v1709882987/icons%20web/js_ylqnay.webp"
    },
    {
      type:"tsx",
      url:"https://res.cloudinary.com/dpgxmmowq/image/upload/v1709882986/icons%20web/ts_ldn5dw.webp"
    },
    {
      type:"ts",
      url:"https://res.cloudinary.com/dpgxmmowq/image/upload/v1709882986/icons%20web/ts_ldn5dw.webp"
    },
    {
      type:"html",
      url:"https://res.cloudinary.com/dpgxmmowq/image/upload/v1709882986/icons%20web/html_qfs1yy.webp"
    },
    {
      type:"java",
      url:"https://res.cloudinary.com/dpgxmmowq/image/upload/v1709882986/icons%20web/java_dwsx9n.webp"
    },
    {
      type:"py",
      url:"https://res.cloudinary.com/dpgxmmowq/image/upload/v1709882986/icons%20web/python_ni3y1c.webp"
    },
    {
      type:"xlsx",
      url:"https://res.cloudinary.com/dpgxmmowq/image/upload/v1709882987/icons%20web/excel_rzoupj.webp"
    },
    {
      type:"csv",
      url:"https://res.cloudinary.com/dpgxmmowq/image/upload/v1709882987/icons%20web/excel_rzoupj.webp"
    },
    {
      type:"cpp",
      url:"https://res.cloudinary.com/dpgxmmowq/image/upload/v1709913779/c-_a2n1yf.png"
    },
    {
      type:"txt",
      url:"https://res.cloudinary.com/dpgxmmowq/image/upload/v1709913778/txt-file_u3ssbk.png"
    },
    {
      type:"slx",
      url:"https://res.cloudinary.com/dpgxmmowq/image/upload/v1711005172/621f8fa9654abf384c30d63d_rmkht5.png"
    },
    
  ];
export const fileupload = async ({ urls, filename, lastWord,pathname }: props) => {
  
    try {
        const user = await auth();
        const email = user?.user?.email;
        await connectToDatabase();

        const username = await User.findOne({ email });

        let imageUrl = "https://res.cloudinary.com/dpgxmmowq/image/upload/v1709882987/icons%20web/default_ylzlvr.jpg";

        const imageData = data.find(item => item.type === lastWord);

        if (imageData) {
            imageUrl = imageData.url;
        }

        const fileData = {
            username: username.username,
            filename,
            imageurl: imageUrl,
            email,
            fileUrl: urls,
            pathname
        };

        await File.create(fileData);

    } catch (error) {
        console.log(error);
    }
}
export const getallfiles = async ()=>{
  noStore();
    try {
       const user = await auth();
        const email = user?.user?.email;
        await connectToDatabase();
        const files = await File.find();
        // console.log(files);/
        return JSON.parse(JSON.stringify(files));
        

    } catch (error) {
        console.log(error);
        
    }
}
export const getfiles = async ({pathname}: any) => {
  noStore(); // Assuming this is a placeholder function or variable

  try {
    const user = await auth();
    const email = user?.user?.email;
    await connectToDatabase();
    

    // Find files for the specific email and pathname
    const files = await File.find({ email: email, pathname: pathname });

    
    if(files){

      return JSON.parse(JSON.stringify(files));
    }else{
      return "no files"
    }
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error to handle it outside of this function
  }
}
export const deletefiles = async ({id}:any)=>{
    
    try {
        await connectToDatabase();
        const del = await File.findByIdAndDelete({_id:id});
        
        
    } catch (error) {
        console.log(error);
        
    }
    
}