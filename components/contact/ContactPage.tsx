"use client"

import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"
import ContactForm from "./ContactForm"

const ContactPage = () => {

    useTextRevealAnimation({trigger: ".contactSection", ele:".contactTitle"})
    useTextRevealAnimation({trigger: ".contactSection", ele:".contactQuote"})

    return (
        <section className="contactSection h-screen container grid grid-cols-2 gap-x-12">

            <div className="space-y-12 text-center">
                <div className="text-[3.5rem]  font-satushi-bold">
                    <h1 className="contactTitle">⬤ Let&apos;s Get In Touch</h1>
                </div>

                <div className="contactQuote text-[3rem] font-roleya uppercase text-black/75">
                    <p>𓏲𝄢 Your vision, my lens. Let&apos;s make magic happen. 𓏲𝄢</p>
                </div>
            </div>

            <ContactForm/>
        </section>
    )
}

export default ContactPage