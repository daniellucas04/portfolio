import Button from "./button/button";
import Project from "./projects/project";

export default function Projects(){
    return(
        <div className="mt-8 max-xs-screen:mt-8 max-sm:mt-8">
            <h1 className="text-4xl ml-8 max-xs-screen:text-2xl max-xs-screen:ml-6 max-sm:text-2xl max-lg:text-3xl">Projects</h1>
            <div className="flex items-center justify-center flex-col ml-8 text-zinc-800 max-xs-screen:ml-0 max-sm:ml-10">
                <div className="grid grid-cols-4 gap-10 max-xs-screen:grid-cols-1 max-tablet:grid-cols-1 max-laptop:grid-cols-1 max-desktop:grid-cols-2 mt-8">
                    <Project
                        title="CS: Source Mods"
                        imgLink="./images/cs-source-mods.png"
                        description="This website was created with the intention of being a hub where Counter Strike Source players could access to download mods for their game. With the advancement and structuring of the project, it would be possible to cover more games and more communities that create mods for different games"
                        href="https://github.com/daniellucas04/nextjs-cs-source-mods"
                    />
                    <Project
                        title="Ruby Bot"
                        imgLink="./images/ruby.png" 
                        description="Undergraduate Thesis to obtain the diploma of computer technician. Development entirely in JavaScript, along with auxiliary libraries and Discord API for robot integration with the platform. Database with Sequelize"
                        href="https://github.com/daniellucas04/bot-ruby"
                    />
                    <Project 
                        title="Tasks API"
                        imgLink="./images/api.png" 
                        description="This API was created with Javascript, it is intended to be a simple connection layer with a database for tasks, where the user can create and manage their tasks"
                        href="https://github.com/daniellucas04/javascript-api-tasks"
                    />
                    <Project
                        title="Compiler"
                        imgLink="./images/compiler.png" 
                        description="A system for correcting algorithms in C. Based on a file of expected test cases for the program, it is possible to execute a file with C code to correct and verify that the results coincide with the test cases provided."
                        href="https://github.com/daniellucas04/terminal-compiler.git"
                    />
                </div>
                <Button title="Check more" link="https://github.com/daniellucas04" className="mt-10 bg-black/40 text-white p-4 rounded-md hover:bg-black/60 transition-colors" />
            </div>
        </div>
    )
}