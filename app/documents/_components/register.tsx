"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,

  DialogTrigger,
} from "@/components/ui/dialog"

import { toast } from "react-hot-toast";
import { Input } from "@/components/ui/input"

import { LogIn } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { register } from "@/context/auth/register"
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password is wrong",
  }),
  email: z.string().min(2, {
    message: "email is required",
  }),
})
export function Register() {
    
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email:"",
      password:"",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    
    const res = await register({username:values.username, email: values.email, password:values.password})

    if(res === "user is created successfully"){
        toast.success("user is created successfully")
      
    }else{
        toast.error("user is already registered")
    }
    
    setTimeout(() => {
        form.reset();
    })

  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex gap-1">
            
                <h1 className="hidden md:block">
                    Register
                    </h1>
            
            <LogIn /> 
            </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[300px] rounded-md md:max-w-[425px]">
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username*</FormLabel>
              <FormControl>
                <Input type="text" placeholder="username" {...field} />
              </FormControl>
           
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email*</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email id" {...field} />
              </FormControl>
           
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password*</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
             
              
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      </DialogContent>
    </Dialog>
  )
}