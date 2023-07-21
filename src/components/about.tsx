import Socials from "./socials";

export default function About(){
    return(
        <div className="ml-16 text-zinc-800">
            <div className="flex flex-col">
                <h1 className="text-3xl">About me</h1>
                <p className="ml-8 mt-4 w-4/6">
                    Hello, my name is Daniel. I'm a fullstack developer who is constantly learning. Actually, I'm using 
                    <span className="bg-zinc-800 text-zinc-50 px-1 ml-1">React</span> in my projects but I'm learning
                    <span className="bg-zinc-800 text-zinc-50 px-1 ml-1">Flutter</span> on my own and probably my next step will be to learn 
                    <span className="bg-zinc-800 text-zinc-50 px-1 ml-1">Angular</span>. (I thought about trying 
                    <span className="bg-zinc-800 text-zinc-50 px-1 ml-1">React Native</span>, but who knows later)
                </p>
                <h4 className="ml-4 text-1xl mt-4 font-bold ">Here are my socials</h4>
                <Socials />
            </div>
        </div>
    )
}