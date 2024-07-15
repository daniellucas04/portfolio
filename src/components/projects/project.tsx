import { ChevronRight } from "lucide-react";
import './project.css';

interface ProjectInterface{
    title: string,
    description: string,
    imgLink: string,
    href: string
}

export default function Project({title, description , imgLink, href}: ProjectInterface){
    return(
        <section className="hover:scale-105 transition-transform rounded-xl"> 
            <div className="w-[350px] max-xs-screen:w-[350px] shadow-lg rounded-xl">
                <img 
                    src={imgLink} 
                    className="max-h-[300px] min-w-[350px] max-xs-screen:min-w-[200px] rounded-t-xl"
                    alt="Preview Image of the project"
                />
                <div className="bg-white p-4 rounded-b-xl">
                    <h1 className="text-xl font-semibold mb-2">{title}</h1>
                    <p className="text-justify text-base cursor-default ellipses text-wrap min-h-[150px]">
                        {description}
                    </p>
                    <a href={href} target="_blank" className="flex items-center mt-8 mb-1 w-fit bg-black/70 p-2 rounded text-white hover:bg-black/90 transition-colors">
                        <span className="text-md">Read more</span>
                        <ChevronRight />
                    </a>
                </div>
            </div>
        </section>
    )
}