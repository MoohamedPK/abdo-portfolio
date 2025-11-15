"use client"

import { useTextRevealAnimation } from "@/hooks/useTextRevealAnimation"
import ContactForm from "./ContactForm"

const ContactPage = () => {
    useTextRevealAnimation({ trigger: ".contactSection", ele: ".contactTitle" })
    useTextRevealAnimation({ trigger: ".contactSection", ele: ".contactQuote" })

    return (
        <section
        id="contact"
        className="contactSection  min-h-screen md:container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-12 py-16"
        >
        <div className="space-y-8 text-center lg:text-left">
            <div className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-satushi-bold">
            <h1 className="contactTitle">⬤ Let&apos;s Get In Touch</h1>
            </div>

            <div className="contactQuote text-[1.5rem] sm:text-[2rem] lg:text-[3rem] font-mardon italic text-primary-accent uppercase">
            <p>𓏲𝄢 Your vision, my lens. Let&apos;s make magic happen. 𓏲𝄢</p>
            </div>
        </div>

        <div className="w-full max-w-xl mx-auto lg:max-w-none">
            <ContactForm />
        </div>
        </section>
    )
}

export default ContactPage
