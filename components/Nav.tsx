import { navLinks } from "@/utils/data"
import Link from "next/link"


const Nav = () => {
  return (
    <nav className="flex justify-center pt-3 fixed w-full z-90">
        <div className="links bg-secondary-text/70 max-w-1/3 px-8 py-4 rounded-full">
            <ul className="flex justify-center items-center space-x-8 capitalize font-outfit-medium">
                {navLinks.map((link) => (
                    <Link key={link.link} href={link.href}>
                        <li >{link.link}</li>
                    </Link>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Nav