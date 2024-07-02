import Socials from "./socials";

export default function About(){
    return(
        <div id="about" className="ml-6 max-xs-screen:ml-6 sm:ml-10 text-zinc-800">
            <div className="flex flex-col">
                <h1 className="text-3xl max-xs-screen:text-2xl max-sm:text-2xl max-lg:text-3xl">About me</h1>
                <p className="ml-8 mt-4 w-3/6 max-xs-screen:text-sm max-xs-screen:ml-1 max-xs-screen:mr-2 max-xs-screen:w-auto max-sm:ml-3 max-sm:text-md max-sm:mt-2 max-lg:w-[50rem] break-words">
                    Hello, my name is Daniel. I'm developer who is constantly learning. Today i use<span className="bg-zinc-800 text-zinc-50 px-1 ml-1">PHP</span> in work, but I already have experience studying with <span className="bg-zinc-800 text-zinc-50 px-1 ml-1">React</span>, <span className="bg-zinc-800 text-zinc-50 px-1 ml-1">Laravel</span> and <span className="bg-zinc-800 text-zinc-50 px-1 ml-1">Flutter</span>. I am currently studying <span className="bg-zinc-800 text-zinc-50 px-1 ml-1">Systems Analysis and Development</span> and looking for new opportunities in the market.
                </p>
                <h4 className="ml-4 text-1xl mt-4 font-bold xs-screen:text-md xs-screen:ml-1 sm:ml-3 sm:text-lg lg:text-1xl">Here are my socials</h4>
                <Socials />
            </div>
        </div>
    )
}