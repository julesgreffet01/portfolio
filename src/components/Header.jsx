import { GithubIcon } from "./GithubIcon.jsx";
import { LinkedinIcon } from "./LinkedinIcon.jsx";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div className="h-20 text-foreground">
            <div className="flex items-center justify-between max-w-[1100px] m-auto p-4 px-10">
                <p className="md:text-3xl text-xl font-bold">Greffet Jules</p>
                <div className="flex items-center gap-5 flex-grow justify-center">
                    <ul className="text-xl flex items-center gap-5 justify-center">
                        <li className="hover:bg-muted p-2 rounded transition duration-300 cursor-pointer">
                            <Link to="competences" smooth={true} duration={200} offset={-80} className="cursor-pointer">
                                Compétences
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-5">
                    <button className="hover:bg-muted p-2 rounded transition duration-300 cursor-pointer flex items-center justify-center w-12 h-12">
                        <GithubIcon size={25} className="text-foreground" />
                    </button>
                    <button className="hover:bg-muted p-2 rounded transition duration-300 cursor-pointer flex items-center justify-center w-12 h-12">
                        <LinkedinIcon size={25} className="text-foreground" />
                    </button>
                    <a href="/cv.pdf" download="Greffet_Jules_CV.pdf" className="font-bold text-lg px-7 py-2 rounded-4xl hover:bg-primary hover:text-primary-foreground cursor-pointer transition-bg duration-300 border border-primary text-foreground flex items-center justify-center w-32 h-12">
                        Mon CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
