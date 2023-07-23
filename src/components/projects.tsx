import Button from "./button/button";
import Project from "./projects/project";

export default function Projects(){
    return(
        <div className="mt-14">
            <div className="ml-16 text-zinc-800">
                <h1 className="text-3xl flex gap-4">Projects</h1>
                <div className="flex justify-center mt-6 gap-6 mb-8">
                    <Project 
                        title="Mods application"
                        imgLink="https://user-images.githubusercontent.com/97129532/254929601-95af1bbc-1056-4784-b01c-cad7ddbe59ae.gif"
                        href="https://github.com/daniellucas04/nextjs-cs-source-mods"
                        titleStyle="px-2 transition-colors text-2xl font-light bg-zinc-800 text-zinc-50 hover:bg-zinc-200 hover:text-zinc-800"
                        imgStyle="mt-2 border-[1px] shadow-md border-zinc-400 rounded-md overflow-hidden w-[41rem] h-[22.83rem]"
                    />
                    <Project
                        title="Flutter Application" 
                        imgLink="https://user-images.githubusercontent.com/97129532/239603638-a420bbab-c3bd-4b51-b3f5-ca92ec3a4022.gif" 
                        href="https://github.com/daniellucas04/first-flutter-app"
                        titleStyle="px-2 transition-colors text-2xl font-light bg-zinc-800 text-zinc-50 hover:bg-zinc-200 hover:text-zinc-800"
                        imgStyle="mt-2 border-[1px] shadow-md border-zinc-400 rounded-md overflow-hidden w-[41rem] h-[22.83rem]"
                    />
                </div>
                <div className="flex gap-5 justify-center mr-16 mb-10 mt-10">
                    <Project 
                        title="Bot Ruby" 
                        imgLink="https://user-images.githubusercontent.com/97129532/222985620-04c454cf-3b82-4a03-ad13-85d92a75c8ec.jpg" 
                        href="https://github.com/daniellucas04/bot-ruby"
                        titleStyle="px-2 transition-colors text-2xl font-light bg-zinc-800 text-zinc-50 hover:bg-zinc-200 hover:text-zinc-800"
                        imgStyle="mt-2 border-[1px] shadow-md border-zinc-400 rounded-md overflow-hidden w-[37rem] h-[20.5rem]"
                    />
                    <Project 
                        title="Costs - React Project" 
                        imgLink="https://user-images.githubusercontent.com/97129532/209883953-2ca8c99f-0611-49b9-ab16-fd08e8bb1098.png" 
                        href="https://github.com/daniellucas04/costs-first-react-project"
                        titleStyle="px-2 transition-colors text-2xl font-light bg-zinc-800 text-zinc-50 hover:bg-zinc-200 hover:text-zinc-800"
                        imgStyle="mt-2 border-[1px] shadow-md border-zinc-400 rounded-md overflow-hidden w-[37rem] h-[20.5rem]"
                    />
                    <Project 
                        title="Vehicle Lease" 
                        imgLink="https://user-images.githubusercontent.com/97129532/209172731-87109a33-0eeb-42b0-9bd7-127ea20df3f6.png" 
                        href="https://github.com/daniellucas04/vehicle-lease"
                        titleStyle="px-2 transition-colors text-2xl font-light bg-zinc-800 text-zinc-50 hover:bg-zinc-200 hover:text-zinc-800"
                        imgStyle="mt-2 border-[1px] shadow-md border-zinc-400 rounded-md overflow-hidden w-[37rem] h-[20.5rem]"
                    />
                </div>
                <Button title="See more" 
                    link="https://github.com/daniellucas04" 
                    className="bg-zinc-800 text-zinc-50 rounded-sm text-sm hover:bg-zinc-700 transition-colors flex gap-1 w-24 h-8 items-center justify-center" 
                />
            </div>
        </div>
    )
}