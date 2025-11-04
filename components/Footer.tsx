"use client"

import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"
import { media, navLinks } from "@/utils/data"

const Footer = () => {

    useTextRevealAnimation({trigger: ".footer", ele: ".mediaLink"})
    useTextRevealAnimation({trigger: ".footer", ele: ".link"})
    useTextRevealAnimation({trigger: ".footer", ele: ".footerTag"})

  return (
    <footer className="footer h-[75dvh] bg-black pt-20 ">
        <div className="flex justify-around">
            <div className="">
                <h1 className="pb-10">INTERASTING</h1>

                <ul className="flex flex-col space-y-3">
                    {navLinks.map((link) => (
                        <li className="link" key={link.link}>{link.link}</li>
                    ))}
                </ul>
            </div>

            <div className="">
                <h1 className="pb-10">MORE ABOUT ME</h1>
                <ul className="flex flex-col space-y-3">
                    {media.map((media) => (
                        <li className="mediaLink" key={media.media}>{media.media}</li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="text-center pt-10 font-roleya text-[6rem]">
            <h1 className="footerTag">✶ LENSE & LIGHT ✶</h1>
        </div>

        <div className="text-center">
            <p>© {new Date().getFullYear()} HML Photography. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer