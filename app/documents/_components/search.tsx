"use client"
import React ,{useEffect, ChangeEvent, useState} from 'react'
import qs from "query-string"
import { useDebounce } from 'usehooks-ts'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'



const SearchWeb = () => {
    const pathname = usePathname();

    const router = useRouter();
    const [value,setValue] = useState<string>('')
    const debouncedvalue = useDebounce<string>(value, 500);

const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value);

}
    
    useEffect(()=>{
        const url = qs.stringifyUrl({
            url:pathname,
            query:{
                searched:debouncedvalue,
            },

        },{skipEmptyString:true,skipNull:true})
        router.push(url)

    },[debouncedvalue,router])
  return (
    <div className="flex w-full items-center relative  ">
        <Search className="absolute flex left-2 text-muted-foreground " size={20} />
        <Input className='pl-10  focus:none rounded-md focus-visible:ring-transparent' placeholder='Search files/folders' value={value} onChange={handleChange}/>
    </div>
  )
}

export default SearchWeb