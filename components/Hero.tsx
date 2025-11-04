"use client"

import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText";
import gsap from "gsap"
import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"

gsap.registerPlugin(SplitText);
const Hero = () => {
    
    useGSAP(() => {
        
        const tl = gsap.timeline({
            defaults:{
            duration: 1,
            ease: "power3.out",
            stagger: 0.05,
            }
        });
        
        // const initialText = gsap.utils.toArray(".initialText") as HTMLElement
        const HeroTextSplit = new SplitText(".HeroName", {type: "chars", mask: "chars"})
        const paraTextSplit = new SplitText(".heroParagraph", {type: "words", mask: "words"})
        
        tl.fromTo(HeroTextSplit.chars, {
            yPercent: 125,
            skewY: 25
        }, {
            yPercent: 0,
            skewY: 0,
        }, "<0.5")

        .fromTo(paraTextSplit.words, {
            yPercent: 125,
            skewY: 25,
            lineHeight: 4
        }, {
            yPercent: 0,
            skewY: 0,
        }, "<0.7")

        .fromTo(".hero-btn", {
            opacity: 0,
            yPercent: 100,
        }, {
            opacity: 1,
            yPercent: 0,
        }, "<0.7")
    }, [])
    
    useTextRevealAnimation({trigger: ".heroText", ele: ".initialText"})

return (
<section className="h-screen space-y-8 font-outfit-medium flex flex-col justify-center">
    <div className="heroText uppercase  font-outfit-light space-y-5">
        <div className="flex justify-around items-center text-[4rem]">
            <div className="initialText">This</div>
            <div className="initialText">Is</div>
            <div className="initialText">Me</div>
        </div>

        <div className="text-center">
            <h1 className="HeroName text-[10rem] font-satushi-bold italic tracking-widest text-black">Abdorahman</h1>
            <p className="heroParagraph font-outfit-light lowercase text-[1.2rem]">Welcome to my lens  where light, emotion, and creativity come to life</p>
        </div>
    </div>

    <div className="heroBtns text-center space-x-8">
        <button className="hero-btn bg-black rounded-full py-2 px-6 cursor-pointer">Contact Me</button>
        <button className="hero-btn bg-black rounded-full py-2 px-6 cursor-pointer">My Work</button>
    </div>
</section>
)
}

export default Hero