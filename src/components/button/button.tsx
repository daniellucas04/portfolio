import { Eye } from "lucide-react";

interface ButtonProps{
    link?: string,
    title: string,
    className?: string,
}

export default function Button({link, title, className}: ButtonProps){
    return(
        <a href={link} target="_blank" className={className}>
            <Eye size={16} />
            {title}
        </a>
    )
}