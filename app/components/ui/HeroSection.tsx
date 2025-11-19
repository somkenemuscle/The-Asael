'use client'

import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { Hero_Section_videos } from "@/constants/videos";

const HeroSection = () => {

    useEffect(() => {
        // confetti burst
        confetti({
            particleCount: 700,
            spread: 7000,
            origin: { x: 0.5, y: 1 },
        });

       
    }, []);

    return (
        <>
          

            {/* === existing hero section === */}

            <section className="bg-neutral-950 pt-40 pb-2">

                <div className="flex justify-center mt-6 block md:hidden px-16">
                    <img
                        src="/asael.jpg"
                        alt="logo"
                        className=" rounded-full w-25 h-25 object-contain"
                    />
                </div>


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
                    <header className="text-white font-semibold text-6xl text-center">We Create <br />Beautiful <span className="bg-gradient-to-r from-pink-500 to-yellow-300 text-transparent bg-clip-text">
                        <i>Memories</i>
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
