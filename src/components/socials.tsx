import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Socials(){

    const [copy, setCopy] = useState("Copy email!");

    return(
        <div className="mr-10 mt-2">
            <div className="text-xl flex gap-3">
                <span className="flex bg-zinc-800 w-[2.2rem] h-[2.2rem] max-xs-screen:h-[2.0rem] max-xs-screen:w-[2.0rem] items-center justify-center rounded shadow-md hover:bg-zinc-700">
                    <a href="https://github.com/daniellucas04" target="_blank">
                        <Github size={18} color="white" />
                    </a>
                </span>
                <span className="flex bg-zinc-800 w-[2.2rem] h-[2.2rem] max-xs-screen:h-[2.0rem] max-xs-screen:w-[2.0rem] items-center justify-center rounded shadow-md hover:bg-zinc-700">
                    <a href="https://www.linkedin.com/in/daniel-lucas-da-silva-308a5b201/" target="_blank">
                        <Linkedin size={18} color="white" />
                    </a>
                </span>
                <div className="tooltip" data-tip={`${copy}`} >
                    <button id="email" type="button" className="cursor-pointer flex bg-zinc-800 w-[2.2rem] h-[2.2rem] max-xs-screen:h-[2.0rem] max-xs-screen:w-[2.0rem] items-center justify-center rounded shadow-md hover:bg-zinc-700 hover:"
                        onClick={() => {
                            navigator.clipboard.writeText("daniellsilva@outlook.com");
                            setCopy("Copied!");

                            setTimeout(() => {
                                setCopy("Copy email!")
                            }, 3000)
                        }}
                    >
                        <Mail size={18} color="white" />
                    </button>
                </div>
            </div>
        </div>
    )
}