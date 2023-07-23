export default function Tech(){
    return (
        <div className="ml-16 mt-14 text-zinc-800">
            <h1 className="text-3xl">Technologies</h1>
            <div className="ml-8">
                <div className="grid grid-cols-2 mt-8 mr-32 gap-4">
                    <section>
                        <span className="bg-zinc-800 text-zinc-50 px-1 ml-1 text-lg">Programming languages</span> 
                        <ul className="list-decimal ml-6">
                            <li>C/C++</li>
                            <li>C#</li>
                            <li>Javascript</li>
                            <li>Python</li>
                        </ul>
                    </section>
                    <section>
                        <span className="bg-zinc-800 text-zinc-50 px-1 ml-1 text-lg">Frameworks</span> 
                        <ul className="list-decimal ml-6">
                            <li>React</li>
                            <li>Angular</li>
                            <li>TailwindCSS</li>
                            <li>Bootstrap</li>
                        </ul>
                    </section>
                    <section>
                        <span className="bg-zinc-800 text-zinc-50 px-1 ml-1 text-lg">Database</span> 
                        <ul className="list-decimal ml-6">
                            <li>SQL/SQLite</li>
                            <li>Sequelize</li>
                        </ul>
                    </section>
                    <section>
                        <span className="bg-zinc-800 text-zinc-50 px-1 ml-1 text-lg">Network</span> 
                        <ul className="list-decimal ml-6">
                            <li>Linux</li>
                            <li>Windows Server</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}