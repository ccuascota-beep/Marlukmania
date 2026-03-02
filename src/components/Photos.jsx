import {useState, useEffect} from "react";

const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg"
]

export default function Photos() {
    const [current, setCurrent] = useState(1);
    const [transition, setTransition] = useState(true);

    const extendedImages = [
        images[images.length - 1],
        ...images, images[0],
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (current === extendedImages.length - 1) {
            setTimeout(() => {
                setTransition(false);
                setCurrent(1);
            }, 700);
        }
        if (current === 0) {
            setTimeout(() => {
                setTransition(false);
                setCurrent(images.length);
            }, 700);
        }
    }, [current]);

    useEffect(() => {
        if (!transition) {
            requestAnimationFrame(() => {
                setTransition(true);
            })
        }
    }, [transition])

    return (
        <div className="w-full flex justify-center mt-8">
            <div className="w-[1000px] h-[595px] relative overflow-hidden rounded-2xl shadow-2xl">

                <div
                    className={`flex ${transition ? "transition-transform duration-700 ease-in-out" : ""}`}
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {extendedImages.map((img, index) => (
                        <div
                            key={index}
                            className="w-[1000px] h-[595px] flex-shrink-0 overflow-hidden"
                        >
                            <img
                                src={img}
                                alt={`slide-${index}`}
                                className="w-full h-full object-cover transition-transform duration-[3000ms] scale-105"
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>

            </div>
        </div>
    );
}