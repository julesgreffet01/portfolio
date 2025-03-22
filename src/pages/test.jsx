import TechnoSVG from "../components/TechnoImage.jsx";
import TechnoText from "../components/TechnoText";
import Header from "../components/Header";
import {BentoGridSecondDemo} from "../components/aceternity/UseBentoGrid.jsx";
import {AnimatedTestimonialsDemo} from "../components/aceternity/UseCarousel.jsx";

export default function Test() {
    const technos = [
        {
            src: "./React.png",
            shadowColor: "hover:shadow-react/40",
            fondColor: "from-react/40",
            alt: "Logo de react",
            text: "React",
        },
        {
            src: "./NodeJs.png",
            shadowColor: "hover:shadow-green-400/40",
            fondColor: "from-node/40",
            alt: "Logo de node",
            text: "NodeJs",
        },
        {
            src: "./Tailwind.png",
            shadowColor: "hover:shadow-tailwind/40",
            fondColor: "from-tailwind/40",
            alt: "Logo de tailwind",
            text: "Tailwind",
        },
        {
            src: "./Laravel.png",
            shadowColor: "hover:shadow-laravel/40",
            fondColor: "from-red-400/40",
            alt: "Logo de laravel",
            text: "Laravel",
        }
    ];

    return (
        <div className="bg-background min-h-screen">
            <Header/>
            <div className="flex items-center justify-center max-w-[1200px] mx-auto">
                {technos.map((tech, index) => (
                    <TechnoSVG
                        key={index}
                        src={tech.src}
                        ShadowColor={tech.shadowColor}
                        FondColor={tech.fondColor}
                        alt={tech.alt}
                        text={tech.text}
                    />
                ))}
                <div className="mt-20">
                    <TechnoText>
                        React
                    </TechnoText>
                </div>
            </div>
            <div className="py-20">
                <BentoGridSecondDemo/>
            </div>
            <div className="py-20">
                <AnimatedTestimonialsDemo/>
            </div>
        </div>
    );
}
