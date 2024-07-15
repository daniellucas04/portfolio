import { ChevronRight } from "lucide-react";

interface ButtonInterface {
    link: string,
    title: string,
    className: string
}

export default function Button({link, title, className}: ButtonInterface){
    return(
        <a href={link} target="_blank" className={className}>
            {title}
            <ChevronRight size={21} className="inline" />
        </a>
    )
}