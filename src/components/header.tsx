import { MoveDown } from "lucide-react";


export default function Header(){
    return(
        <div className='text-zinc-800 w-screen h-screen flex flex-col justify-center items-center sm:text-md'>
            <h1 className="xs-screen:text-3xl sm:text-4xl lg:text-6xl">Daniel</h1>
            <h2 className="xs-screen:text-3xl sm:text-3xl lg:text-4xl hover:bg-zinc-800 hover:text-zinc-200 cursor-default transition-colors duration-500 p-2">Programmer</h2>
            <span className="flex flex-col items-center mt-2 xs-screen:text-md sm:text-sm lg:text-base">
                Learn about me
                <MoveDown className="animate-bounce mt-2" size={20} />
            </span>
        </div>
    )
}