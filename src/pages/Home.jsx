import Header from "../components/Header.jsx";

const Home = () => {
    return (
        <main className="bg-background">
            <Header/>
            <div className="max-w-[1200px] h-full mx-auto">
                <div className="w-full mt-30 flex flex-col items-center justify-center text-center">
                        <h1 className="text-foreground font-bold text-9xl mb-5">Développeur</h1>
                        <h1 className="text-foreground font-bold text-9xl mb-5">Full-Stack</h1>
                        <p className="text-xl text-foreground mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi architecto consequuntur cupiditate eligendi est facilis ipsam magnam modi nam nulla porro possimus repellendus sunt suscipit veniam veritatis, voluptatibus voluptatum.</p>
                        <button className="font-bold text-xl px-7 py-2 rounded-xl hover:bg-primary hover:text-primary-foreground cursor-pointer transition-bg duration-300 border border-primary text-foreground flex items-center justify-center mt-30">Contactez-moi</button>
                </div>
            </div>
        </main>
    )
}

export default Home;