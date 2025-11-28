"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { navLinks } from "@/utils/data";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const openMenu = () => {
    setIsMenuOpen(true);

    const tl = gsap.timeline();

    // Animate overlay
    tl.to(menuOverlayRef.current, {
      duration: 0.5,
      opacity: 1,
      display: "block",
      ease: "power2.out",
    })
      // Animate menu content
      .to(
        menuContentRef.current,
        {
          duration: 0.6,
          opacity: 1,
          y: 0,
          ease: "power2.out",
        },
        "-=0.2"
      )
      // Stagger animation for menu items
      .to(
        menuItemsRef.current,
        {
          duration: 0.4,
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3"
      );
  };

  const closeMenu = () => {
    const tl = gsap.timeline();

    // Animate out menu items
    tl.to(menuItemsRef.current, {
      duration: 0.3,
      y: 20,
      opacity: 0,
      stagger: 0.05,
      ease: "power2.in",
    })
      // Animate out menu content
      .to(
        menuContentRef.current,
        {
          duration: 0.4,
          y: -50,
          opacity: 0,
          ease: "power2.in",
        },
        "-=0.2"
      )
      // Animate out overlay
      .to(menuOverlayRef.current, {
        duration: 0.5,
        opacity: 0,
        display: "none",
        ease: "power2.in",
        onComplete: () => {
          setIsMenuOpen(false);
          document.body.style.overflow = "auto";
        },
      });
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // Function to add ref to menu items array
  const addToMenuRefs = (el: HTMLAnchorElement | null, index: number) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current[index] = el;
    }
  };

  return (
    <nav>
      {/* Menu Button */}
      <div className="font-mardon text-primary-accent px-12 py-4 flex justify-end">
        <p
          className="cursor-pointer select-none hover:opacity-70 transition-opacity z-90 fixed top-10"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </p>
      </div>

      {/* Full Page Menu Overlay */}
      <div
        ref={menuOverlayRef}
        className="nav-menu fixed inset-0 bg-black bg-opacity-95 z-50 hidden opacity-0"
        onClick={closeMenu}
      >
        {/* Menu Content Container */}
        <div
          ref={menuContentRef}
          className="h-full flex flex-col justify-center items-center opacity-0 transform translate-y-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Navigation Links */}
          <div className="space-y-8 text-center">
            {navLinks.map((link, index) => (
              <div key={link.href} className="overflow-hidden">
                <Link
                  ref={(el) => addToMenuRefs(el, index)}
                  href={link.href}
                  className="block text-4xl md:text-6xl lg:text-7xl font-mardon text-white hover:text-primary-accent transition-colors duration-300 transform translate-y-10 opacity-0"
                  onClick={closeMenu}
                >
                  {link.link}
                </Link>
              </div>
            ))}
          </div>

          {/* Optional: Additional Content */}
          <div className="mt-16 text-center text-gray-400">
            <p className="text-lg">
              Let&apos;s create something amazing together
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
