export default function Tech(){
    return (
        <div className="ml-6 xs-screen:mt-8 text-zinc-800 max-xs-screen:ml-6 max-sm:ml-10 max-sm:mt-10">
            <h1 className="text-3xl max-xs-screen:text-2xl max-sm:text-2xl max-lg:text-3xl">Technologies</h1>
            <div className="ml-8 xs-screen:ml-2 sm:ml-4">
                <div className="grid grid-cols-2 mt-8 mr-32 gap-4 max-xs-screen:mt-2 max-xs-screen:grid-cols-1 sm:mt-2">
                    <section>
                        <span className="bg-zinc-800 text-zinc-50 px-1 ml-1 text-lg max-xs-screen:text-sm sm:text-md">Programming languages</span> 
                        <ul className="list-decimal ml-6 max-xs-screen:text-sm">
                            <li>C/C++</li>
                            <li>C#</li>
                            <li>Javascript</li>
                            <li>Python</li>
                        </ul>
                    </section>
                    <section>
                        <span className="bg-zinc-800 text-zinc-50 px-1 ml-1 text-lg max-xs-screen:text-sm sm:text-md">Frameworks</span> 
                        <ul className="list-decimal ml-6 max-xs-screen:text-sm">
                            <li>React</li>
                            <li>Angular</li>
                            <li>TailwindCSS</li>
                            <li>Bootstrap</li>
                        </ul>
                    </section>
                    <section>
                        <span className="bg-zinc-800 text-zinc-50 px-1 ml-1 text-lg max-xs-screen:text-sm sm:text-md">Database</span> 
                        <ul className="list-decimal ml-6 max-xs-screen:text-sm">
                            <li>SQL/SQLite</li>
                            <li>Sequelize</li>
                        </ul>
                    </section>
                    <section>
                        <span className="bg-zinc-800 text-zinc-50 px-1 ml-1 text-lg max-xs-screen:text-sm sm:text-md">Network</span> 
                        <ul className="list-decimal ml-6 max-xs-screen:text-sm">
                            <li>Linux</li>
                            <li>Windows Server</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}