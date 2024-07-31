export default function Footer() {
    return(
        <div className='text-zinc-800 bg-white w-screen h-20 p-4 flex items-center justify-between sm:text-md max-xs-screen:px-2 px-14'>
            <div className="font-bold max-xs-screen:text-xs text-md">
                Made with 💖 by Daniel
            </div>
            <div className="">
                <a href="https://netlify.com" target="_blank" className="flex items-center gap-2">
                    <span className="font-semibold max-xs-screen:text-xs text-md">hosted on</span>
                    <img src="./images/netlify.png" className="h-10 max-xs-screen:h-8" alt="Netlify Logo" />
                </a>
            </div>
        </div>
    )
}