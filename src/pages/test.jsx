import TechnoSVG from "../components/TechnoImage.jsx";
import TechnoText from "../components/TechnoText";
import Header from "../components/Header";

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
            <p className="mb-20 text-foreground">test</p>
            <div className="flex items-center justify-center max-w-[1200px] m-auto">
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
            <br/>
            <br/><br/>
            <br/>
            <br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorem dolores dolorum eos eum hic
                id impedit ipsum laborum maxime quaerat quia sint veniam? Assumenda beatae dolore illum quia vitae.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorem dolores dolorum eos eum hic
                id impedit ipsum laborum maxime quaerat quia sint veniam? Assumenda beatae dolore illum quia vitae.</p>
        </div>
    );
}
