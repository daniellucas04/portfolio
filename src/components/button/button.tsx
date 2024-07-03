import { ChevronRight } from "lucide-react";

export default function Button({link, title, className}){
    return(
        <a href={link} target="_blank" className={className}>
            {title}
            <ChevronRight size={21} className="inline" />
        </a>
    )
}