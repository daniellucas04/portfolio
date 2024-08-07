export default function Education(){
    return(
        <div className="mt-6 mb-10 text-zinc-800 xs-screen:mt-8 xs-screen:ml-6 sm:ml-10 sm:mt-10">
            <h1 className="text-4xl max-xs-screen:text-2xl max-sm:text-2xl max-lg:text-3xl ml-6">Experiences</h1>
            <div className="mt-4 max-xs-screen:ml-2 max-xs-screen:mr-2 max-sm:ml-4">
                <ul className="ml-8 list-none max-xs-screen:text-sm max-sm:text-sm break-words">
                    <small className="text-lg max-xs-screen:text-sm font-bold">2023 - today</small>
                    <li className="ml-2 mb-2 max-xs-screen:text-base text-xl">Working at <a href="https://bw7.com.br" target="_blank" className="underline underline-offset-2">BW7 (Barretos Web)</a> as a Fullstack Developer with PHP</li>
                    
                    <small className="text-lg max-xs-screen:text-sm font-bold">2023 - today</small>
                    <li className="ml-2 mb-2 max-xs-screen:text-base text-xl">College at Instituto Federal de São Paulo - Campus Barretos (Análise e Desenvolvimento de Sistemas)</li>
                    
                    <small className="text-lg max-xs-screen:text-sm font-bold">2020 - 2022</small>
                    <li className="ml-2 max-xs-screen:text-base text-xl">High school at Instituto Federal de São Paulo - Campus Barretos (Técnico em Informática)</li>
                </ul>
            </div>
        </div>
    )
}