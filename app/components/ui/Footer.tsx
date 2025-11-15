"use client";

function Footer() {
    return (
        <footer className="bg-neutral-900 text-neutral-300 py-10 mt-20">
            <div className="max-w-6xl mx-auto px-4 text-center">

                {/* Business Name */}
                <h3 className="text-xl font-semibold text-white mb-3">
                    The Asael Experience
                </h3>

                {/* Contact Info */}
                <div className="space-y-2">
                    <p className="hover:text-white transition">
                        <a href="mailto:theasaelexperience@gmail.com">theasaelexperience@gmail.com</a>
                    </p>

                    <p className="hover:text-white transition">
                        <a href="tel:+2348035837203">+234 8035837203</a>
                    </p>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-700 mt-6 pt-4 text-sm text-neutral-400">
                    © {new Date().getFullYear()}    The Asael Experience. All rights reserved.
                </div>

            </div>
        </footer>
    );
}

export default Footer;
