import { AtSign, Github, Linkedin } from "lucide-react";

export default function Socials(){
    return(
        <div className="mr-10">
            <h2 className="text-5xl mt-4">Socials</h2>
            <div className="ml-4 text-xl">
                <span className="flex">
                    <Github size={26} />
                    <a href="https://github.com/daniellucas04" target="_blank" className="gap-2 ml-1 font-semibold underline hover:text-zinc-600">
                        Github
                    </a>
                </span>
                <span className="flex">
                    <Linkedin size={26}  />
                    <a href="" target="_blank" className="gap-2 ml-1 font-semibold underline hover:text-zinc-600">
                        LinkedIn
                    </a>
                </span>
                <span className="flex">
                    <AtSign size={26} />
                    <a href="" target="_blank" className="gap-2 ml-1 font-semibold underline hover:text-zinc-600">
                        Email
                    </a>
                </span>
            </div>
        </div>
    )
}