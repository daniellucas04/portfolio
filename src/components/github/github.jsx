import axios from "axios";
import Button from "../button/button";
import { useEffect, useState } from "react";

export default function GitHub() {
    let [author, setAuthor] = useState(null);
    let [commit, setCommit] = useState(null);

    const instance = axios.create({
        baseURL: 'https://api.github.com/',
        timeout: 1000,
        headers: { Authorization: import.meta.env.VITE_GITHUB_TOKEN }
    });

    instance.get('repos/daniellucas04/portfolio/commits').then(() => function(response) {
        console.log(response);
    });

    return (
        <section className="mt-8">
            <div className="flex flex-grow-0 flex-col justify-center items-center">
                <Button
                    title="Check more"
                    link="https://github.com/daniellucas04"
                    className="bg-zinc-800 text-zinc-50 rounded-md text-base ml-8 p-2 shadow-lg shadow-slate-500/45 hover:bg-zinc-700 flex items-center transition-colors max-xs-screen:ml-6" 
                />
                {/* <h6>{commit.author.email}</h6> */}
                {/* {/* <p>{commit.message} - {commit.commiter.date}</p> */}
            </div>
        </section>
    )
}