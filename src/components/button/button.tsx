import { ChevronRight } from "lucide-react";

interface ButtonProps{
    link?: string,
    title: string,
    className?: string,
}

export default function Button({link, title, className}: ButtonProps){
    return(
        <a href={link} target="_blank" className={className}>
            {title}
            <ChevronRight size={21} className="inline" />
        </a>
    )
}