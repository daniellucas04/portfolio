import { MoveDown } from "lucide-react";


export default function Header(){
    return(
        <div className='text-zinc-800 w-screen h-screen flex flex-col justify-center items-center sm:text-md'>
            <h1 className="max-xs-screen:text-6xl max-sm:text-4xl max-lg:text-6xl text-6xl">Daniel</h1>
            <h2 className="max-xs-screen:text-5xl max-sm:text-3xl max-lg:text-4xl hover:bg-zinc-800 hover:text-zinc-200 cursor-default transition-colors duration-500 p-2 text-5xl">Programmer</h2>
            <a href="#about" className="flex flex-col items-center mt-2 max-xs-screen:text-2xl max-sm:text-sm lg:text-base text-xl">
                Learn about me
                <MoveDown className="animate-bounce mt-2" size={24} />
            </a>
        </div>
    )
}