import { navLinks } from "@/utils/data"
import Link from "next/link"

const Nav = () => {
    return (

        <nav className="flex justify-center pt-3 fixed w-full z-50 px-4 sm:px-6 md:px-8">
            <div className="
                links 
                bg-secondary-text/70 
                w-full max-w-sm sm:max-w-md md:max-w-lg 
                px-6 py-3 
                md:px-8 md:py-4 
                rounded-full 
                backdrop-blur-md
                ">
                
                <ul className="flex justify-between sm:justify-center items-center space-x-2 md:space-x-8 capitalize font-outfit-medium">
                    {navLinks.map((link) => (
                        <Link key={link.link} href={link.href}>
                            
                            <li className="
                                bg-white/60 
                                text-black 
                                text-xs sm:text-sm md:text-base 
                                px-2 py-0.5 sm:px-3 sm:py-1 
                                rounded-full 
                                transition-colors duration-200
                                hover:bg-white
                                ">
                                {link.link}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Nav