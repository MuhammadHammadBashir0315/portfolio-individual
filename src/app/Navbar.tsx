import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Navbar(){
    return(
        <nav className="flex container mx-auto bg-primary-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="#" className="text-black text-2xl font-bold">Hammad</Link>
            <div className="md:hidden">
                <button id="mobile-menu-button" className="text-white">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className="hidden md:flex space-x-4 items-center">
                <Link href="#hero" className="text-black">Home</Link>
                <Link href="#technology" className="text-black">Technology</Link>
                <Link href="#services" className="text-black">Services</Link>
                <Button asChild>
                    <Link href="/contact" className="bg-blue">Contact</Link>
                </Button>

            </div>
        </div>
    </nav>
    )
}