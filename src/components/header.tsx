import { MoveDown } from "lucide-react";


export default function Header(){
    return(
        <div className='text-zinc-800 w-screen h-screen flex flex-col justify-center items-center'>
            <h1 className="text-6xl">Daniel</h1>
            <h2 className="text-4xl hover:bg-zinc-800 hover:text-zinc-200 cursor-default transition-colors duration-500 p-2">Programmer</h2>
            <span className="flex flex-col items-center mt-2">
                Learn about me
                <MoveDown className="animate-bounce mt-2" size={20} />
            </span>
        </div>
    )
}