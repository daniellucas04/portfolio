import { Eye } from "lucide-react";

export default function Projects(){
    return(
        <div className="mt-14">
            <div className="ml-16 text-zinc-800">
                <h1 className="text-3xl">Projects</h1>
                <div className="flex justify-center">
                    <div className="mt-4 text-center">
                        <a href="https://github.com/daniellucas04/nextjs-cs-source-mods" target="_blank" className="transition-colors text-2xl font-light bg-zinc-800 text-zinc-50 hover:bg-zinc-200 hover:text-zinc-800">Mods application</a>
                        <div className="border-2 shadow-xl mt-2 border-zinc-400 rounded-md overflow-hidden mb-10">
                            <img 
                                src="https://user-images.githubusercontent.com/97129532/254929601-95af1bbc-1056-4784-b01c-cad7ddbe59ae.gif" 
                                alt=""
                                className="w-[50rem]"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 justify-center">
                    <section className="text-center">
                        <a href="https://github.com/daniellucas04/first-flutter-app" target="_blank" className="transition-colors text-2xl font-light bg-zinc-800 text-zinc-50 hover:bg-zinc-200 hover:text-zinc-800">Flutter application</a>
                        <div className="border-2 shadow-xl mt-2 border-zinc-400 rounded-md overflow-hidden mb-10">
                            <img 
                                src="https://user-images.githubusercontent.com/97129532/239603638-a420bbab-c3bd-4b51-b3f5-ca92ec3a4022.gif" 
                                alt=""
                                className="w-[30rem]"
                            />
                        </div>
                    </section>
                    <section className="text-center"> 
                        <a href="" target="_blank" className="transition-colors text-2xl font-light bg-zinc-800 text-zinc-50 hover:bg-zinc-200 hover:text-zinc-800">Another project</a>
                        <div className="border-2 shadow-xl mt-2 border-zinc-400 rounded-md overflow-hidden mb-10">
                            <img 
                                src="https://user-images.githubusercontent.com/97129532/239603638-a420bbab-c3bd-4b51-b3f5-ca92ec3a4022.gif" 
                                alt=""
                                className="w-[30rem]"
                            />
                        </div>
                    </section>
                </div>
                <a href="https://github.com/daniellucas04" target="_blank" className="bg-zinc-800 text-zinc-50 p-1 rounded-sm text-xl hover:bg-zinc-700 transition-colors flex gap-1 w-32 items-center justify-center">
                    <Eye size={20} />
                    See more
                </a>
            </div>
        </div>
    )
}