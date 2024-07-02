import { Link2 } from "lucide-react";

interface ButtonProps{
    link?: string,
    title: string,
    className?: string,
}

export default function Button({link, title, className}: ButtonProps){
    return(
        <a href={link} target="_blank" className={className}>
            <Link2 size={18} className="inline mr-2" />
            {title}
        </a>
    )
}