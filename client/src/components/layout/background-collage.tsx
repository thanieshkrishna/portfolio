import { useEffect, useState } from "react";

// Import a diverse set of images for the background
import clapboard from "@assets/generated_images/cyberpunk_film_clapboard.jpg";
import mic from "@assets/generated_images/cyberpunk_studio_microphone.jpg";
import camera from "@assets/generated_images/cyberpunk_cinema_camera.jpg";
import lights from "@assets/generated_images/cyberpunk_studio_lights.jpg";
import laptop from "@assets/generated_images/cyberpunk_editing_laptop.jpg";
import equalizer from "@assets/generated_images/cyberpunk_audio_equalizer.jpg";
import reel from "@assets/generated_images/cyberpunk_film_reel.jpg";
import drone from "@assets/generated_images/cyberpunk_camera_drone.jpg";

const bgImages = [
  clapboard, mic, camera, lights, 
  laptop, equalizer, reel, drone,
  camera, equalizer, clapboard, lights 
];

export function BackgroundCollage() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* The Background Grid - Blurred and Blended for seamlessness */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 w-full h-full">
        {/* Repeat images to fill screen */}
        {[...bgImages, ...bgImages].map((img, i) => (
          <div key={i} className="aspect-square relative overflow-hidden">
            <img 
              src={img} 
              alt="" 
              className="w-full h-full object-cover opacity-60 blur-[1px] scale-110 transform transition-transform duration-[10s] hover:scale-125"
            />
          </div>
        ))}
      </div>
      
      {/* Overlay for Text Clarity - Reduced opacity to let background show through more */}
      <div className="absolute inset-0 bg-background/75 backdrop-blur-[0.5px] z-10"></div>
      
      {/* Vignette to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_90%)] z-20"></div>
      
      {/* Subtle Cyberpunk Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5 z-30 mix-blend-overlay"></div>
    </div>
  );
}
