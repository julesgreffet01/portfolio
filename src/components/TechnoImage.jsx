export default function TechnoImage({ src, alt, ShadowColor, FondColor, size = 100, text = "" }) {
    return (
        <div className={`w-45 h-45 bg-muted rounded-lg m-auto flex items-center justify-center transition-shadow duration-300 ease-[cubic-bezier(0,0,0.2,1)] hover:shadow-xl ${ShadowColor} relative overflow-hidden`}>
            <div className={`absolute w-30 h-21 bg-gradient-to-b ${FondColor} to-transparent rounded-full blur-xl top-18 scale-100`}></div>

            <div className="w-38 h-38 flex items-center justify-center relative -mt-5">
                <img
                    src={src}
                    alt={alt}
                    width={size}
                    height={size}
                    className="relative object-contain"
                />
            </div>

            <p className="absolute bottom-4 text-base text-center w-full text-muted-foreground font-bold">
                {text}
            </p>
        </div>
    );
}