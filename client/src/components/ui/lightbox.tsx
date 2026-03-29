import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] w-full h-[95vh] bg-black/95 border-none p-0 flex items-center justify-center overflow-hidden">
        {/* Close Button */}
        <div className="absolute top-4 right-4 z-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:text-primary rounded-full bg-black/50 hover:bg-black/80"
          >
            <X size={24} />
          </Button>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 z-40">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrev}
            className="text-white hover:text-primary rounded-full bg-black/50 hover:bg-black/80 w-12 h-12"
          >
            <ChevronLeft size={32} />
          </Button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center pr-4 z-40">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="text-white hover:text-primary rounded-full bg-black/50 hover:bg-black/80 w-12 h-12"
          >
            <ChevronRight size={32} />
          </Button>
        </div>

        {/* Image Container */}
        <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
            <span className="text-white font-mono text-sm">
              IMG_DATA_{currentIndex + 1} // {currentIndex + 1} of {images.length}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
