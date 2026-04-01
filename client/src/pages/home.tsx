import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { useToast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";

export default function Home() {
  const { toast } = useToast();

  const handleCopyEmail = (e: React.MouseEvent) => {
    // Prevent default if we want to stop navigation, but user wants both options available.
    // However, if the button is separate, no need to prevent default on the link.
    // If this is called from the button, it just copies.
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("thanieshwork@gmail.com");
    toast({
      title: "Email Copied",
      description: "thanieshwork@gmail.com copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-transparent text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        
        <section id="contact" className="py-24 bg-background border-t border-primary/20 relative overflow-hidden">
          {/* Scanlines overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,2px_100%]"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-6xl md:text-9xl font-sans font-black tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 hover:text-stroke transition-all cursor-default drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              LET'S TALK
            </h2>
            <div className="flex flex-col items-center gap-4">
              <div className="group flex items-center gap-4 relative">
                <a 
                  href="mailto:thanieshwork@gmail.com" 
                  className="inline-block text-2xl md:text-4xl font-mono text-primary border-b-2 border-primary/50 hover:border-primary hover:text-white hover:shadow-[0_0_20px_hsl(var(--primary))] transition-all pb-1"
                >
                  thanieshwork@gmail.com
                </a>
                <button 
                  onClick={handleCopyEmail}
                  className="p-2 text-muted-foreground hover:text-primary transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110 active:scale-95 absolute -right-12 md:-right-14"
                  aria-label="Copy email address"
                  title="Copy email address"
                >
                  <Copy size={24} />
                </button>
              </div>
              <a 
                href="tel:+16475227001" 
                className="inline-block text-xl md:text-2xl font-mono text-muted-foreground hover:text-primary transition-all mt-2"
              >
                +1 (647) 522-7001
              </a>
              <div className="flex gap-6 mt-8">
                <a href="https://linkedin.com/in/thaniesh" target="_blank" className="text-lg font-mono text-muted-foreground hover:text-secondary hover:scale-110 transition-all">LINKEDIN</a>
                <a href="https://ridicolab.framer.website/" target="_blank" className="text-lg font-mono text-muted-foreground hover:text-secondary hover:ssale-110 transition-all">FREELANCE SITE</a>
              </div>
            </div>
            
            <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm font-mono text-muted-foreground">
              <p>© 2025 THANIESH K.MOORTHK</p>
              <p className="text-primary">SYSTEM_STATUS: <span className="text-green-500">ONLINE</span></p>
              <p>CREATIVE CONTENT PRODUCER</p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}