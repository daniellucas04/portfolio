import { ReactNode } from 'react';
import './project.css';

interface ProjectInterface{
    title: string,
    description: string,
    icon: ReactNode,
    href: string
}

export default function Project({title, description , icon, href}: ProjectInterface){
    return(
        <a href={href} target="_blank" className="hover:border hover:border-black/70 hover:cursor-pointer border border-black/30 overflow-auto bg-white rounded-2xl p-9 w-10/12"> 
           <div className="bg-black/80 w-min p-2 rounded-md text-white">{icon}</div>
            <h1 className="font-bold my-4">{title}</h1>
            <p className="text-justify text-zinc-600 text-base ellipses text-wrap min-h-[150px]">
                {description}
            </p>
        </a>
    )
}