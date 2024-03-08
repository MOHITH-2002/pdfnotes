import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
interface FooterProps {

    name:string;
    url:string;
    filename:string;
    email:string;
}
export const Footer = ({url,name,filename,email}: FooterProps) => {
  return (
    <div className={cn("relative p-3")}>
      <p className="text-[13px] truncate max-w-[calc(100%-20px)]">
        {filename}
      </p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-black truncate">
        by: {name}
      </p>
      
    </div>
  );
};