import Socials from "./socials";

export default function About(){
    return(
        <div className="ml-10 text-zinc-800 flex justify-around">
            <div>
                <h1 className="text-5xl">About me</h1>
                <p className="ml-4 mt-4 text-2xl w-4/6">
                    Hello, my name is Daniel. I'm a fullstack developer who is constantly learning. I'm still in the process of wanting to learn everything at once, but with time this will pass. I'm currently learning
                    <span className="bg-zinc-800 text-zinc-50 px-1 ml-1">Flutter</span> on my own and probably my next step will be to learn 
                    <span className="bg-zinc-800 text-zinc-50 px-1 ml-1">Angular</span>. (I thought about trying 
                    <span className="bg-zinc-800 text-zinc-50 px-1 ml-1">React Native</span>, but who knows later)
                </p>
            </div>
            <Socials />
        </div>
    )
}