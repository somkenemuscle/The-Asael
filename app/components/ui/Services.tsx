'usen client'

const services = [
    {
        title: "Wedding Planning",
        description: "Elegant, stress-free weddings crafted to perfection.",
        icon: "💍",
    },
    {
        title: "Birthday Events",
        description: "Fun, creative birthday celebrations for all ages.",
        icon: "🎉",
    },
    {
        title: "Corporate Events",
        description: "Professional event coordination for brands and teams.",
        icon: "🏢",
    },
    {
        title: "Decoration & Styling",
        description: "Beautiful décor setups that elevate any event.",
        icon: "🌸",
    },
    {
        title: "Bridal Shower",
        description: "Soft, intimate designs for unforgettable pre-wedding moments.",
        icon: "👰",
    },
    {
        title: "Kids Party Setup",
        description: "Colorful, exciting themes that children love!",
        icon: "🎈",
    },
];


function Services() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-xl md:text-3xl font-semibold text-center mb-10">
                    Our Services
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                        >
                            {/* Icon */}
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-2">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-neutral-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default Services