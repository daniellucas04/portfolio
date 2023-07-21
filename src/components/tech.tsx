export default function Tech(){
    return (
        <div className="ml-16 mt-14 text-zinc-800">
            <h1 className="text-3xl">Technologies</h1>
            <div className="ml-8">
                <p>This section is going to show you what technologies I'm currently using</p>
                <div className="flex justify-evenly mt-8 mr-32">
                    <section>
                        <h1 className="text-lg font-semibold">Programming Languages</h1>
                        <ul className="list-decimal ml-6">
                            <li>C/C++</li>
                            <li>C#</li>
                            <li>Javascript</li>
                            <li>PHP</li>
                            <li>Python</li>
                        </ul>
                    </section>
                    <section>
                        <h1 className="text-lg font-semibold">Database</h1>
                        <ul className="list-decimal ml-6">
                            <li>SQL/SQLite</li>
                            <li>Sequelize</li>
                        </ul>
                    </section>
                    <section>
                        <h1 className="text-lg font-semibold">Network</h1>
                        <ul className="list-decimal ml-6">
                            <li>Linux</li>
                            <li>Windows Server</li>
                        </ul>
                    </section>
                    <section>
                        <h1 className="text-lg font-semibold">Frameworks</h1>
                        <ul className="list-decimal ml-6">
                            <li>React</li>
                            <li>Angular</li>
                            <li>TailwindCSS</li>
                            <li>Bootstrap</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}