import Link from 'next/link';
// import NavLinks from '@/app/ui/dashboard/nav-links';
// import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/context/auth/auth';
import { Button } from '@/components/ui/button';

 
export default async function Logout() {

  return (
    <div className="flex h-full flex-col">

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
  
        
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <Button  variant="outline" className="flex  hover:bg-red-300  items-center justify-center gap-2 rounded-md  text-sm font-medium   md:flex-none md:justify-start ">
            <PowerIcon className="w-4" />
            <div className="hidden md:block">Sign Out</div>
          </Button>
        </form>
      </div>
    </div>
  );
}