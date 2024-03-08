"use server"
import bcrypt from 'bcryptjs';
import { connectToDatabase } from "../database";
import { User } from "../model/usermodel";
interface Props{
    username:string;
    password:string;
    email:string;
}
export const register = async({username,password,email}:Props) =>{
try {
    await connectToDatabase();
    var hashpassword = bcrypt.hashSync(password, 10);
    const user = await User.findOne({email});
    if(user){
        
        
        return "user is already registered";
    }else{

        
        const newUser = await User.create({username,email,password:hashpassword});
        
        
        return "user is created successfully";
    }
} catch (error) {
    console.log(error);
    
}
}
