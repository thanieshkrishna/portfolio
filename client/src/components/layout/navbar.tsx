import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about", label: "ABOUT" },
    { href: "#work", label: "WORK" },
    { href: "#experience", label: "EXP" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/20 shadow-[0_0_15px_rgba(0,243,255,0.1)]" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-sans font-bold tracking-widest hover:text-primary transition-colors text-shadow-glow">
            PORTFOLIO<span className="text-primary">_</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-lg font-mono font-medium text-muted-foreground hover:text-primary hover:shadow-[0_0_8px_currentColor] transition-all tracking-widest relative group"
            >
              <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity text-secondary">&gt;</span>
              {link.label}
            </a>
          ))}
          <a href="/Thaniesh_CV.pdf" download target="_blank" rel="noreferrer">
            <Button className="bg-transparent text-primary border border-primary hover:bg-primary hover:text-background hover:shadow-[0_0_15px_hsl(var(--primary))] transition-all font-bold tracking-widest cyber-border rounded-none">
              DOWNLOAD CV
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-primary hover:bg-primary/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-background-95 backdrop-blur-xl border-b border-primary/30 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5 overflow-y-auto z-40">
          {links.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-3xl font-sans font-bold text-foreground hover:text-primary hover:pl-4 transition-all py-2 border-b border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="/Thaniesh_CV.pdf" download target="_blank" rel="noreferrer" className="mt-4">
            <Button className="w-full bg-primary text-background hover:bg-secondary hover:text-white font-bold h-14 text-lg tracking-widest cyber-border rounded-none shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
              DOWNLOAD CV
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}