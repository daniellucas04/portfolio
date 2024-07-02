import { ChevronRight } from "lucide-react";
import './project.css';

interface ProjectProps{
    title?: string,
    description: string,
    imgLink: string,
    href: string,
}

export default function Project({ title, description, imgLink, href }: ProjectProps){
    return(
        <section className="hover:scale-105 transition-transform"> 
            <div className="w-[350px] shadow">
                <h3>{title}</h3>
                <img 
                    src={imgLink} 
                    className="min-h-[200px] min-w-[200px] min-w"
                />
                <div className="bg-white p-4">
                    <p className="text-justify cursor-default ellipses text-wrap">
                        {description}
                    </p>
                    <a href={href} target="_blank" className="flex items-center hover:underline hover:underline-offset-4 mt-2">
                        <span className="text-base font-bold">Read more</span>
                        <ChevronRight />
                    </a>
                </div>
            </div>
        </section>
    )
}