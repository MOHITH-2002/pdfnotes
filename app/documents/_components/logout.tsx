

import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/context/auth/auth';
import { Button } from '@/components/ui/button';

 
export default async function Logout() {

  return (
    <div className="flex  flex-col">

      
  
        
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <Button  variant="outline" className="flex w-full hover:bg-red-300  items-center  gap-2 rounded-md  text-sm font-medium justify-start ">
            <PowerIcon className="w-4" />
            <div className="flex md:hidden lg:block">Sign Out</div>
          </Button>
        </form>
      </div>
    
  );
}