"use client"
import React ,{useEffect, ChangeEvent, useState} from 'react'
import qs from "query-string"
import { useDebounce } from 'usehooks-ts'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'



const SearchWeb = () => {
    const pathname = usePathname();

    const router = useRouter();
    const [value,setValue] = useState<string>('')
    const [searchclick,setSearchclick] = useState<boolean>(false);
    const debouncedvalue = useDebounce<string>(value, 500);

const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value);

}
const handleClick = ()=>{
    setSearchclick(!searchclick);
    
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
    <>
    <div className="lg:flex w-full items-center relative hidden ">
        <Search className="absolute flex left-2 text-muted-foreground " size={20} />
        <Input className='pl-10  focus:none rounded-md focus-visible:ring-transparent' placeholder='Search files/folders' value={value} onChange={handleChange}/>
    </div>
    
    <div className='w-full flex items-center lg:hidden gap-1'>
        {searchclick && (
                <div className="flex w-full items-center relative">
        
        <Input className='focus:none rounded-full focus-visible:ring-transparent' placeholder='Search files/folders' value={value} onChange={handleChange}/>
    </div>
            )}
    <Button size="icon" variant="outline" className='rounded-full pl-2 pr-2' onClick={handleClick}>
    {searchclick === false ?(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg> ):(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

) }
    
    </Button>
    </div>
    

    </>
  )
}

export default SearchWeb