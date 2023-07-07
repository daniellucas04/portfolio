export default function Projects(){
    return(
        <div className="mt-14">
            <div className="ml-24 text-zinc-800">
                <h1 className="text-5xl">Projects</h1>
                <div className="grid grid-cols-2 place-items-center">
                    <div className="mt-4">
                        <a href="https://github.com/daniellucas04/first-flutter-app" target="_blank" className="text-2xl font-light hover:text-zinc-600 hover:underline hover:underline-offset-auto">Flutter app (Google Codelabs)</a>
                        <div className="border-2 shadow-xl mt-2 border-zinc-400 rounded-md overflow-hidden mb-10">
                            <img 
                                src="https://user-images.githubusercontent.com/97129532/239603638-a420bbab-c3bd-4b51-b3f5-ca92ec3a4022.gif" 
                                alt=""
                                className="w-[720px] h-[460px]"
                            />
                        </div>
                    </div>
                    <div>
                        <a href="" target="_blank" className="text-2xl font-light hover:text-zinc-600 hover:underline hover:underline-offset-auto">Web shopping cart</a>
                        <div className="border-2 shadow-xl mt-2 border-zinc-400 rounded-md overflow-hidden mb-10">
                            <img 
                                src="src/assets/shopping_cart.png" 
                                alt=""
                                className="w-[720px] h-[460px]"
                            />
                        </div>
                    </div>
                    <div>
                        <a href="" target="_blank" className="text-2xl font-light hover:text-zinc-600 hover:underline hover:underline-offset-auto">Flutter app (Google Codelabs)</a>
                        <div className="border-2 shadow-xl mt-2 border-zinc-400 rounded-md overflow-hidden mb-10">
                            <img 
                                src="https://user-images.githubusercontent.com/97129532/239603638-a420bbab-c3bd-4b51-b3f5-ca92ec3a4022.gif" 
                                alt=""
                                className="w-[720px] h-[460px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}