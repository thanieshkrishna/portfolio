import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let reqId: number;

    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      // Direct DOM manipulation using requestAnimationFrame for maximum performance
      // Bypasses React entirely and syncs with browser paints
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Use passive listener for better scroll performance
    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Initialize cursor out of view
    if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(-100px, -100px, 0)`;
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (reqId) cancelAnimationFrame(reqId);
    };
  }, [isVisible]);

  // Only show on non-touch devices (roughly)
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <style>{`
        body, a, button, input, textarea {
          cursor: none !important;
        }
      `}</style>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[100] text-primary"
        style={{
          willChange: 'transform', // Force GPU acceleration
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.4 : 1,
          }}
          transition={{
            type: "spring", stiffness: 400, damping: 25 
          }}
        >
          {/* Soft Upward Arrow / Play Button Cursor */}
          <div className="relative w-6 h-6 flex items-center justify-center">
             {!isHovering ? (
               // Default Cursor: Soft Upward Arrow
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_2px_rgba(0,0,0,0.8)] filter drop-shadow-[0_0_8px_hsl(var(--primary))]">
                 <path 
                   d="M10.5 4.5L4.5 16.5C3.8 17.8 4.8 19.5 6.3 19.5H17.7C19.2 19.5 20.2 17.8 19.5 16.5L13.5 4.5C12.8 3.2 11.2 3.2 10.5 4.5Z" 
                   fill="currentColor"
                   stroke="white"
                   strokeWidth="1.5"
                   strokeLinejoin="round"
                 />
               </svg>
              ) : (
                 // Hover Cursor: Animated Clapboard
                 <div className="relative flex flex-col items-center justify-center">
                   {/* Pulsing Background Circle - Solid Background for visibility */}
                   <motion.div
                     className="absolute inset-0 bg-black/80 rounded-full -z-10 border border-primary/50"
                     animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.4, 0.8] }}
                     transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                     style={{ width: '40px', height: '40px', top: '-8px', left: '-8px' }}
                   />
                   
                   {/* Clapboard Icon - High Contrast */}
                   <motion.div
                       animate={{ rotate: [0, -10, 0] }}
                       transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                   >
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-primary drop-shadow-[0_0_5px_rgba(0,0,0,1)]">
                          <path d="M20.2 6L18.2 2H16.2L18.2 6H15.2L13.2 2H11.2L13.2 6H10.2L8.2 2H.6.2L8.2 6H4C2.9 6 2 6.9 2 8V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V8C22 6.9 21.1 6 20.2 6Z" fill="currentColor" stroke="white" strokeWidth="1"/>
                      </svg>
                   </motion.div>
  
                   {/* Action Text - High Visibility Box */}
                   <motion.div
                     initial={{ opacity: 0, y: 5 }}
                     animate={{ opacity: 1, y: -28 }}
                     className="absolute bg-primary text-black text-[10px] font-black px-2 py-1 rounded whitespace-nowrap tracking-wider border-2 border-white shadow-[0_0_15px_rgba(0,0,0,0.8)] z-50"
                   >
                     ACTION!
                   </motion.div>
                </div>
             )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
