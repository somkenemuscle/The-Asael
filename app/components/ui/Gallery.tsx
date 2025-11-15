'use client'
import { useState } from "react";


const galleryImages = [
    "https://t4bg270yk4.ufs.sh/f/yvg0jlQbOFCvdsEEBeg6zoDfqBwVjc0GlQRa1m85UTtihN4x",
    "https://t4bg270yk4.ufs.sh/f/yvg0jlQbOFCv0UOHhCrWy8szH3ANZqm2BgTUDKIjG1x6MtuO",
    "https://t4bg270yk4.ufs.sh/f/yvg0jlQbOFCvGEbGJmNCNTrXD75kynUgvh1mESBzHbAVf2sJ",
    "https://t4bg270yk4.ufs.sh/f/yvg0jlQbOFCv6974pxjSRFfJO78mosLKch0qu4wUYanBHWXz",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1478145787956-f6f12c59624d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];



function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-20 bg-neutral-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-3xl font-semibold text-center mb-10">
                    Gallery
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative w-full h-40 md:h-48 lg:h-52 overflow-hidden rounded-lg cursor-pointer group"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img
                                src={src}
                                alt="event"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)} // clicking outside closes
                >
                    <div className="relative max-w-3xl w-full px-4">
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 text-white text-3xl font-bold"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>

                        {/* Full Image */}
                        <img
                            src={selectedImage}
                            alt="full"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}


export default Gallery