"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react"; // Hamburger and Close icons
import logo from "@/assets/images/logo.png"; // Your logo

// LogoImage Component
const LogoImage = (
    <Link href="/" className="flex items-center space-x-2">
        <Image src={logo} alt="Q3M Wanda Logo" width={50} height={50} />
        <span className="text-2xl font-bold">
            Q3M Wanda<br />Solutions
        </span>
    </Link>
);

// Desktop Navigation
const DesktopNav = (
    <nav className="hidden md:flex space-x-6">
        <Link href="/" passHref>
            <Button variant="ghost" className="hover:text-red-500">Home</Button>
        </Link>
        <Link href="/about" passHref>
            <Button variant="ghost" className="hover:text-green-500">About</Button>
        </Link>
        <Link href="/services" passHref>
            <Button variant="ghost" className="hover:text-blue-500">Services</Button>
        </Link>
        <Link href="/blog" passHref>
            <Button variant="ghost" className="hover:text-yellow-500">Blog</Button>
        </Link>
        <Link href="/solutions-showcase" passHref>
            <Button variant="ghost" className="hover:text-purple-500">Solutions Showcase</Button>
        </Link>
        <Link href="/contact" passHref>
            <Button variant="ghost" className="hover:text-orange-500">Contact</Button>
        </Link>
    </nav>
);

// TypeScript interface for props
interface MenuToggleProps {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
}

interface OverlayProps {
    closeMobileMenu: () => void;
}

interface SidebarNavProps {
    isMobileMenuOpen: boolean;
    closeMobileMenu: () => void;
}

// MenuToggle Component
function MenuToggle({ isMobileMenuOpen, toggleMobileMenu }: MenuToggleProps) {
    return (
        <button className="block md:hidden focus:outline-none" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
    );
}

// Overlay Component
function Overlay({ closeMobileMenu }: OverlayProps) {
    return <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeMobileMenu}></div>;
}

// SidebarNav Component
const navItems = [
    { path: "/", label: "Home", hoverColor: "hover:text-red-500" },
    { path: "/about", label: "About", hoverColor: "hover:text-green-500" },
    { path: "/services", label: "Services", hoverColor: "hover:text-blue-500" },
    { path: "/blog", label: "Blog", hoverColor: "hover:text-yellow-500" },
    { path: "/solutions-showcase", label: "Solutions Showcase", hoverColor: "hover:text-purple-500" },
    { path: "/contact", label: "Contact", hoverColor: "hover:text-orange-500" },
];

function SidebarNav({ isMobileMenuOpen, closeMobileMenu }: SidebarNavProps) {
    return (
        <nav
            className={`fixed top-0 left-0 w-64 h-full bg-white z-20 shadow-lg transform transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="p-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                    <Link key={item.path} href={item.path} passHref>
                        <Button variant="ghost" className={item.hoverColor} onClick={closeMobileMenu}>
                            {item.label}
                        </Button>
                    </Link>
                ))}
            </div>
        </nav>
    );
}


// Navbar Component
const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Toggle the mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close the mobile menu
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="border-b shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo Section */}
                {LogoImage}

                {/* Desktop Navigation */}
                {DesktopNav}
                
                {/* Theme Toggle */}
                <ThemeToggle />

                {/* Mobile Menu Toggle Button */}
                <MenuToggle isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />

                {/* Mobile Sidebar Overlay */}
                {isMobileMenuOpen && (
                    <>
                        {/* Overlay */}
                        <Overlay closeMobileMenu={closeMobileMenu} />

                        {/* Sidebar */}
                        <SidebarNav isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={closeMobileMenu} />
                    </>
                )}

                
            </div>
        </header>
    );
};

export default Navbar;
