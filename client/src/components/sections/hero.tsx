import { motion } from "framer-motion";
import generatedImage from "@assets/generated_images/cinematic_camera_cyberpunk_silhouette.jpg";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 md:pt-20 md:pb-0 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent">
      {/* Ambient Background Glows */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] opacity-30 animate-pulse hidden md:block"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] opacity-30 hidden md:block"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="order-2 lg:order-1 text-center lg:text-left relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
              <span className="h-px w-8 bg-primary"></span>
              <h2 className="text-sm md:text-xl font-mono text-primary font-bold tracking-[0.2em] uppercase glow-text">
                Creative Content Producer
              </h2>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-sans font-black leading-[0.9] tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white/80 drop-shadow-[0_0_15px_rgba(0,243,255,0.3)] max-w-full relative z-30">
              THANIESH<br/>
              <span className="text-gradient bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">K.MOORTHI</span>
            </h1>
            
            <p className="text-base md:text-xl text-muted-foreground max-w-md font-mono mb-10 leading-relaxed border-l-2 border-secondary pl-6 mx-auto lg:mx-0 text-left break-words">
              Digital Storyteller & Editor. Merging cinematic narrative with Generative AI to create compelling visual experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#work"
                className="bg-primary/10 text-primary px-8 py-4 text-lg font-bold hover:bg-primary hover:text-black hover:shadow-[0_0_20px_hsl(var(--primary))] transition-all border border-primary cyber-border relative overflow-hidden group w-full sm:w-auto text-center"
              >
                <span className="relative z-10">VIEW WORK</span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out -z-0"></div>
              </a>
              <a 
                href="#contact"
                className="bg-transparent text-foreground px-8 py-4 text-lg font-bold hover:text-secondary hover:border-secondary hover:shadow-[0_0_20px_hsl(var(--secondary))] transition-all border border-foreground/30 cyber-border w-full sm:w-auto text-center"
              >
                CONTACT ME
              </a>
            </div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-[500px] aspect-square"
          >
            {/* Cyberpunk Decorative Elements */}
            <div className="absolute inset-0 border border-primary/30 translate-x-4 translate-y-4 z-0 cyber-border"></div>
            <div className="absolute inset-0 border border-secondary/30 -translate-x-4 -translate-y-4 z-0 cyber-border"></div>
            
            {/* Glitchy Image Container */}
            <div className="relative z-10 w-full h-full cyber-border overflow-hidden group">
              <img 
                src={generatedImage} 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale-[20%] contrast-110 brightness-110 group-hover:grayscale-0 group-hover:brightness-125 transition-all duration-700"
              />
              {/* Overlay Scanline */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-full w-full pointer-events-none opacity-50 bg-[length:100%_4px]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
