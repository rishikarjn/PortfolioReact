import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles: {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
  }[] = [];

  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 - 0.5,
      opacity: Math.random(),
    });
  }

  let animationFrameId: number;

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;

      // Wrap around edges
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      ctx.fill();
    });

    animationFrameId = requestAnimationFrame(animate);
  };

  animate(); // start the animation

  // ✅ cleanup on unmount
  return () => cancelAnimationFrame(animationFrameId);
}, []);


     

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#0B1D51] via-[#725CAD] to-[#0B1D51] flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#8CCDEB] to-[#FFE3A9] p-1">
              <div className="w-full h-full rounded-full bg-[#0B1D51] flex items-center justify-center">
                <span className="text-4xl font-bold text-white">JD</span>
              </div>
            </div>
          </div>
          
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-[#FFE3A9]">Rishika Ranjan</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl text-[#8CCDEB] mb-6 font-light">
             Frontend Developer
          </h2>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web applications and solving complex problems through code. 
            Currently pursuing B.Tech in CSE with expertise in React.js, JavaScript, and modern web technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-[#725CAD] to-[#8CCDEB] text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View My Work
              <ChevronDown className="inline ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#0B1D51] transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/rishikarjn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFE3A9] transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rishika-ranjan-6980562aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFE3A9] transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="rishikasingh2109@gmail.com"
              className="text-white hover:text-[#FFE3A9] transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;