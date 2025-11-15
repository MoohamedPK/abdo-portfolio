"use client"

import { ArrowRight } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const ContactForm = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            {
            from_name: formData.name,
            from_email: formData.email,  // This becomes the reply-to
            reply_to: formData.email,     // Explicitly set reply-to
            phone: formData.phone || 'Not provided',
            message: formData.message,
            to_email: 'your@email.com'   // Your email (optional, can set in template)
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        setSubmitStatus("success")
        setFormData({ name: '', email: '', phone: '', message: '' })

        setTimeout(() => { setSubmitStatus("idle")}, 2000)
    } catch (error) {
        console.error("error to send email : ", error)
        setSubmitStatus('error')
    } finally {
        setIsSubmitting(false)
    }
    }

    return (
    <form onSubmit={handleSubmit} className="contactInputs font-outfit-medium space-y-6 ">

        <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name *
            </label>
            <input name="name" required onChange={handleChange} value={formData.name} type="text" className="w-full px-4 py-3 border-b border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition duration-300"/>
        </div>

        <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
            </label>
            <input name="email" required onChange={handleChange} value={formData.email} type="email" className="w-full px-4 py-3 border-b border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition duration-300"/>
        </div>

        <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number (Optional) *
            </label>
            <input name="phone" onChange={handleChange} value={formData.phone} type="phone" className="w-full px-4 py-3 border-b border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition duration-300"/>
        </div>

        <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
                Tell Me About Your Project *
            </label>
            <textarea name="message" required onChange={handleChange} value={formData.message} className="w-full px-4 py-3 border-b border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition duration-300" />
        </div>

        {submitStatus === 'success' && (
            <div className="p-4 bg-green-50 border border-green-200 rounded">
                <p className="text-green-800 text-center">
                    ✓ Message sent successfully! I&lsquo;ll get back to you soon.
                </p>
            </div>
            )}

            {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded">
                <p className="text-red-800 text-center">
                    ✗ Something went wrong. Please try again or email me directly.
                </p>
                </div>
            )}

        <div className="flex justify-end w-full">
            <button disabled={isSubmitting} type="submit" className="flex items-center space-x-5 group cursor-pointer px-5">
                <p className="text-[1.5rem] group-hover:text-black font-mardon transition-colors duration-300">Send</p>
                <div className="size-12 bg-primary-accent text-white centerlizeItems rounded-full">
                    <ArrowRight size={38} className="group-hover:-rotate-45 transition-transform duration-300 "/>
                </div>
            </button>
        </div>

    </form>
    )
}

export default ContactForm