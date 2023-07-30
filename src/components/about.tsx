import Socials from "./socials";

export default function About(){
    return(
        <div className="ml-6 max-xs-screen:ml-6 sm:ml-10 text-zinc-800">
            <div className="flex flex-col">
                <h1 className="text-3xl max-xs-screen:text-2xl max-sm:text-2xl max-lg:text-3xl">About me</h1>
                <p className="ml-8 mt-4 w-3/6 max-xs-screen:text-sm max-xs-screen:ml-1 max-xs-screen:mr-2 max-xs-screen:w-auto max-sm:ml-3 max-sm:text-md max-sm:mt-2 max-lg:w-[50rem] break-words">
                    Hello, my name is Daniel. I'm developer who is constantly learning. Actually, I'm using 
                    <span className="bg-zinc-800 text-zinc-50 px-1 ml-1">React</span> in my projects but I'm learning
                    <span className="bg-zinc-800 text-zinc-50 px-1 ml-1">Flutter</span> on my own and probably my next step will be to learn 
                    <span className="bg-zinc-800 text-zinc-50 px-1 ml-1">Angular</span>. (I thought about trying 
                    <span className="bg-zinc-800 text-zinc-50 px-1 ml-1">React Native</span>, but who knows later)
                </p>
                <h4 className="ml-4 text-1xl mt-4 font-bold xs-screen:text-md xs-screen:ml-1 sm:ml-3 sm:text-lg lg:text-1xl">Here are my socials</h4>
                <Socials />
            </div>
        </div>
    )
}