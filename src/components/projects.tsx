import Button from "./button/button";
import Project from "./projects/project";

export default function Projects(){
    return(
        <div className="mt-8 max-xs-screen:mt-8 max-sm:mt-8">
            <div className="ml-1 text-zinc-800 max-xs-screen:ml-0 max-sm:ml-10">
                <h1 className="text-3xl max-xs-screen:text-2xl max-xs-screen:ml-6 max-sm:text-2xl max-lg:text-3xl">Projects</h1>
                <div className="flex gap-6 items-center justify-start mb-10 mt-4 ml-8">
                    <Project
                        imgLink="src/assets/nextjs-cs-source-mods.png"
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem veniam quos distinctio velit, deserunt optio error dolor eveniet ducimus consequuntur sed, corrupti tempore assumenda in ea enim corporis amet labore!"
                        href="https://github.com/daniellucas04/nextjs-cs-source-mods"
                    />
                    <Project 
                        imgLink="https://user-images.githubusercontent.com/97129532/222985620-04c454cf-3b82-4a03-ad13-85d92a75c8ec.jpg" 
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem veniam quos distinctio velit, deserunt optio error dolor eveniet ducimus consequuntur sed, corrupti tempore assumenda in ea enim corporis amet labore!"
                        href="https://github.com/daniellucas04/bot-ruby"
                    />
                    <Project 
                        imgLink="https://user-images.githubusercontent.com/97129532/209883953-2ca8c99f-0611-49b9-ab16-fd08e8bb1098.png" 
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem veniam quos distinctio velit, deserunt optio error dolor eveniet ducimus consequuntur sed, corrupti tempore assumenda in ea enim corporis amet labore!"
                        href="https://github.com/daniellucas04/costs-first-react-project"
                    />
                </div>
                <Button
                    title="See more"
                    link="https://github.com/daniellucas04"
                    className="bg-zinc-800 text-zinc-50 rounded-md text-base ml-8 p-3 shadow-lg shadow-slate-500/45 hover:bg-zinc-700 transition-colors max-xs-screen:ml-6" 
                />
            </div>
        </div>
    )
}