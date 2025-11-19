"use client"

import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText";
import gsap from "gsap"
import Link from "next/link";

gsap.registerPlugin(SplitText);

const Hero = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults:{
                duration: 1.5,
                ease: "power3.out",
                stagger: 0.05,
            },
        });
        
        const initialTextSplit = new SplitText(".initialText", {type: "chars", mask: "chars"})
        const HeroTextSplit = new SplitText(".HeroName", {type: "chars", mask: "chars"})
        const paraTextSplit = new SplitText(".heroParagraph", {type: "words", mask: "words"})
        
        gsap.set(".btn-effect", {scaleX: 0})
        gsap.set(".hero-btn", {opacity: 0, yPercent: 100});
        gsap.set([paraTextSplit.words, initialTextSplit.chars, HeroTextSplit.chars], {yPercent: 100,
            rotateY: 70,
            xPercent: -20,
            opacity: 0,
            filter: "blur(5px)",})

        tl.to(initialTextSplit.chars, {
            rotateY: 0,
            opacity: 1,
            xPercent: 0,
            filter: "blur(0px)",
            yPercent: 0,
        })

        .to(HeroTextSplit.chars, {
            rotateY: 0,
            opacity: 1,
            xPercent: 0,
            filter: "blur(0px)",
            yPercent: 0,
            
        }, "<0.5")

        .to(paraTextSplit.words,{
            yPercent: 0,
            opacity: 1,
            xPercent: 0,
            rotateY: 0,
            filter: "blur(0px)",
        }, "<0.7")

        .to(".hero-btn", {
            opacity: 1,
            yPercent: 0,
        }, "<0.7")
        
        return () => {
            HeroTextSplit.revert();
            paraTextSplit.revert();
        }
    }, []);

return (
<section className="hero h-screen space-y-8 font-outfit-medium flex flex-col justify-center">

    <div className="heroText uppercase font-mardon space-y-5">
        <div className="flex justify-around items-center text-[2rem] md:text-[4rem] will-change-transform">
            <div className="initialText">This</div>
            <div className="initialText">Is</div>
            <div className="initialText">Me</div>
        </div>

        <div className="text-center space-y-5 md:space-y-0">
            <h1 className="HeroName text-[2.5rem] sm:text-[3.5rem] md:text-[6rem] lg:text-[8rem] text-primary-accent font-mardon tracking-widest leading-11 md:leading-normal will-change-transform">ABDERRAHMANE</h1>
            <p className="heroParagraph font-outfit-light lowercase text-[0.8rem] md:text-[1.3rem] leading-8 will-change-transform">Welcome to my lens  where light, emotion, and creativity come to life</p>
        </div>
    </div>

    <div className=" text-center flex justify-center items-center space-x-8 pt-8 font-mardon">
            <Link href={"#contact"} className="">
                <button className="hero-btn border-2 rounded-full py-2 text-xs px-6 cursor-pointer will-change-transform transition-colors duration-300 hover:text-primary-accent">
                    Contact Me
                </button>
            </Link>

            <Link href={"#work"} className="">
                <button className="hero-btn border-2 rounded-full py-2 text-xs px-6 cursor-pointer will-change-transform transition-colors duration-300 hover:text-primary-accent">
                    My Work
                </button>
            </Link>
    </div>
</section>
)
}

export default Hero