export default function Footer() {
    return(
        <div className='text-zinc-800 bg-white w-screen h-20 p-4 flex items-center justify-between sm:text-md px-14'>
            <div className="font-bold text-md">
                Made with 💖 by Daniel
            </div>
            <div>
                <a href="https://netlify.com" target="_blank" className="flex items-center gap-2">
                    <span className="font-semibold text-md">hosted on</span>
                    <img src="./images/netlify.png" className="h-10" alt="Netlify Logo" />
                </a>
            </div>
        </div>
    )
}