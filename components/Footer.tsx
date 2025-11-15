"use client"

import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"
import { media, navLinks } from "@/utils/data"

const Footer = () => {
    useTextRevealAnimation({ trigger: ".footer", ele: ".mediaLink" })
    useTextRevealAnimation({ trigger: ".footer", ele: ".link" })
    useTextRevealAnimation({ trigger: ".footer", ele: ".footerTag" })

    return (
        <footer className="footer bg-black text-white pt-20 pb-8 min-h-[60vh] flex flex-col justify-between font-mardon">
        <div className="md:container mx-auto px-4 sm:px-6 lg:px-12 flex justify-around gap-12 text-center sm:text-left">
            {/* Left column */}
            <div>
            <h1 className="pb-6 text-xl  tracking-wide">INTERESTING</h1>
            <ul className="flex flex-col space-y-3 text-gray-300">
                {navLinks.map((link) => (
                <li className="link hover:text-white transition-colors" key={link.link}>
                    {link.link}
                </li>
                ))}
            </ul>
            </div>

            {/* Right column */}
            <div>
            <h1 className="pb-6 text-xl  tracking-wide">MORE ABOUT ME</h1>
            <ul className="flex flex-col space-y-3 text-gray-300">
                {media.map((m) => (
                <li className="mediaLink hover:text-white transition-colors" key={m.media}>
                    {m.media}
                </li>
                ))}
            </ul>
            </div>
        </div>

        {/* Footer tag */}
        <div className="text-center pt-16 font-mardon text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] tracking-wider text-white/90">
            <h1 className="footerTag">✶ LENSE & LIGHT ✶</h1>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm sm:text-base mt-8 font-sans">
            <p>© {new Date().getFullYear()} HML Photography. All rights reserved.</p>
        </div>
        </footer>
    )
}

export default Footer
