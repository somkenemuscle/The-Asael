'use client'

import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { Hero_Section_videos } from "@/constants/videos";

const HeroSection = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // confetti burst
        confetti({
            particleCount: 700,
            spread: 7000,
            origin: { x: 0.5, y: 1 },
        });

        // show popup after slight delay
        setTimeout(() => {
            setShowPopup(true);
        }, 600);
    }, []);

    return (
        <>
            {/* Popup Modal */}
            {showPopup && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade"
                    onClick={() => setShowPopup(false)}
                >
                    <div
                        className="bg-white text-neutral-900 rounded-2xl p-6 max-w-sm w-[90%] shadow-xl relative animate-popup"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-4 text-2xl leading-none text-neutral-600 hover:text-black"
                            onClick={() => setShowPopup(false)}
                        >
                            ×
                        </button>

                        <h2 className="text-xl font-semibold mb-2 text-center">
                            Happy 10,958 days Obianuju 🎉
                        </h2>

                        <p className="text-center text-neutral-700">
                            Cheers to another 25,568+ OO-K?  
                        </p>
                    </div>
                </div>
            )}

            {/* === existing hero section === */}
            <section className="bg-neutral-950 pt-40 pb-2">
                <div className="py-20">
                    <section className="hero-status-container flex flex-col items-center mb-3">
                        <span className="hero-status-bitmoji mb-2"><img className="w-14 h-14 hover:scale-105 transition-all duration-1000 rounded-full"
                            src="https://framerusercontent.com/images/DGJ4Gx0ogbA7MZuCQVUb98IKt1I.png?scale-down-to=512" />
                        </span>
                        <div className="text-pink-50 bg-black w-fit hero-status-info px-4 py-2 text-xs rounded tracking-wide font-light">
                            <span className="animate-pulse-ring inline-block bg-green-500 rounded-full w-2 h-2 mr-2"></span>
                            Reach Out & Book Us Now
                        </div>
                    </section>
                    <header className="text-white font-semibold text-6xl text-center">We Create <br />Unforgettable <span className="bg-gradient-to-r from-pink-500 to-yellow-300 text-transparent bg-clip-text"> 
                        <i>Events</i>
                    </span></header>
                    <p className="text-center text-gray-300 text-sm font-mono mt-4">
                        From weddings to corporate parties, we handle everything beautifully
                    </p>

                    {/* video section */}
                    <section className="bg-neutral-900 mt-20 p-10 rounded-3xl border max-w-5xl mx-auto cursor-pointer border-neutral-700">
                        <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
                            {Hero_Section_videos.map((video, index) => (
                                <div
                                    key={index}
                                    className="rounded-3xl overflow-hidden flex-shrink-0 w-full md:w-[30%]">
                                    <video className="w-full" src={video} autoPlay muted loop playsInline></video>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default HeroSection;
