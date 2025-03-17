const Header = () => {
    return (
        <div className="h-20 text-foreground ">
            <div className="flex items-center justify-between max-w-[1200px] m-auto p-4 px-10">
                <p className="text-3xl font-bold">Greffet Jules</p>
                <div className="flex items-center gap-5">
                    <ul className="text-xl flex items-center gap-5 mr-10">
                        <li className="hover:bg-muted p-2 rounded transition duration-300 cursor-pointer">Projets</li>
                        <li className="hover:bg-muted p-2 rounded transition duration-300 cursor-pointer">Expériences</li>
                    </ul>
                    <a href="/cv.pdf" download="Greffet_Jules_CV.pdf" className="font-bold text-xl px-7 py-1 rounded-4xl hover:bg-primary hover:text-primary-foreground cursor-pointer transition-bg duration-300 border border-primary text-foreground">
                        Mon CV
                    </a>
                </div>
            </div>
        </div>
    );
};



export default Header;