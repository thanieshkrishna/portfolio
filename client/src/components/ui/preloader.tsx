import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mascotImage from "@assets/generated_images/cute_alien_filmmaker_mascot.png";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Lights, Camera... Action!";

  useEffect(() => {
    // Typewriter effect
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 75);

    // Finish loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center font-mono"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <div className="relative flex flex-col items-center">
             <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.5, ease: "easeOut" }}
               className="mb-8 relative w-48 h-48 md:w-64 md:h-64"
             >
                <img 
                  src={mascotImage} 
                  alt="Welcome Mascot" 
                  className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(0,243,255,0.3)]"
                />
             </motion.div>

            <h2 className="text-xl md:text-3xl text-primary tracking-widest font-bold mb-2 text-center">
              {text}
              <span className="animate-pulse">_</span>
            </h2>
            
            <p className="text-muted-foreground text-sm tracking-widest animate-pulse mt-2">
              THANKS FOR STOPPING BY!
            </p>

            {/* Loading Bar */}
            <div className="mt-8 w-48 h-1 bg-white/10 overflow-hidden relative rounded-full">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
