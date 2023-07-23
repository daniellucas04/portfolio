interface ProjectProps{
    title: string,
    imgLink: string,
    href: string,
    titleStyle?: string,
    imgStyle?: string,
}

export default function Project({ title, imgLink, href, titleStyle, imgStyle }: ProjectProps){
    return(
        <section className="text-center hover:scale-105 transition-transform"> 
            <a href={href} target="_blank" className={titleStyle}>{title}</a>
            <div>
                <img 
                    src={imgLink} 
                    className={imgStyle}
                />
            </div>
        </section>
    )
}