import Header from "../components/Header.jsx";
import TechnoSVG from "../components/TechnoImage.jsx";
import React from "react";
import {LampDemo} from "../components/aceternity/Lamp.jsx";

const Home = () => {

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
        <main className="bg-background">
            <Header/>
            <div className="max-w-[1100px] h-full mx-auto">
                <div className="w-full mt-20 flex flex-col items-center justify-center text-center">
                    <h1 className="text-foreground font-bold text-9xl mb-5">Développeur <br/> Full-Stack</h1>
                    {/*<LampDemo />*/}
                    <p className="text-xl text-foreground mt-20">Je suis un jeune développeur en 2ᵉ année de BTS passionné par l’apprentissage continu et les nouveaux défis. Curieux et motivé, je suis également auto-entrepreneur, prêt à mettre mes compétences au service de projets concrets.</p>
                    <button className="font-bold text-xl px-7 py-2 rounded-xl hover:bg-primary hover:text-primary-foreground cursor-pointer transition-bg duration-300 border border-primary text-foreground flex items-center justify-center mt-20">Contactez-moi</button>

                    <section className="mt-30 text-left text-foreground w-full">
                        <h2 className="text-6xl font-bold">Mes Compétences</h2>
                        <div className="h-3"></div>
                        <p className="text-lg">Voici une liste des technologies avec lesquelles j'ai travailler</p>
                        <div className="flex items-center justify-center mx-auto w-full mt-10">
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
                        </div>
                    </section>

                    <section className="mt-30 text-left text-foreground w-full">
                        <h2 className="text-6xl font-bold">Mes Projets</h2>
                        <div className="h-3"></div>
                        <p className="text-lg">Voici une liste de quelques projets auxquels j'ai participé</p>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Home;