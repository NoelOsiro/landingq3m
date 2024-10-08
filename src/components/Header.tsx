import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <header className="border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    Q3M Wanda Solutions
                </Link>
                <nav className="hidden md:flex space-x-4">
                    <Link href="/" passHref>
                        <Button variant="ghost">Home</Button>
                    </Link>
                    <Link href="/about" passHref>
                        <Button variant="ghost">About</Button>
                    </Link>
                    <Link href="/services" passHref>
                        <Button variant="ghost">Services</Button>
                    </Link>
                    <Link href="/blog" passHref>
                        <Button variant="ghost">Blog</Button>
                    </Link>
                    <Link href="/solutions-showcase" passHref>
                        <Button variant="ghost">Solutions Showcase</Button>
                    </Link>
                    <Link href="/contact" passHref>
                        <Button variant="ghost">Contact</Button>
                    </Link>
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Navbar;

