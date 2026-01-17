"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useScroll,
} from "motion/react";
import { useUser } from "@/contexts/user-context";
import { cn } from "@/lib/utils";

// --- UTILITAIRES ---
const getAssetPath = (path: string) => `/LVMH_Hackathon/${path.startsWith('/') ? path.slice(1) : path}`;

const LV_URL = "https://account.louisvuitton.com/eng-us/mylv/registration/";
const product_image = getAssetPath("SML-louis-vuitton-sac-again--M25877_PM1_Side_view.png");

export function AuraCertificateCard() {
  const [isHovered, setIsHovered] = useState(false); // État pour le flou
  const { user } = useUser();

  const product = user?.products.find(p => p.id === 'M25877');
  const isOwner = product?.isOwner ?? false;
  
  const handleRedirect = () => {
    window.open(LV_URL, '_blank', 'noopener,noreferrer');
  };

  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="bg-white flex flex-col items-center p-2 relative">
      
      {/* 1. LE FLOU DE FOND : S'anime sur toute la page quand isHovered est vrai */}
        { !isMobile && (
        <motion.div 
          className="fixed inset-0 z-10 pointer-events-none backdrop-blur-[4px] bg-black/25"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
      />
      )}
      {/* 2. LE CONTENEUR DE LA CARTE : Gère le changement d'état au survol */}
      <div 
        className="relative z-20" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <CometCard className="w-[280px] h-[400px] sm:w-[330px] sm:h-[470px] cursor-pointer" onClick={handleRedirect}>
          <div className="relative h-full w-full bg-[#3d3d3d] rounded-[16px] p-0">
            <div className="relative h-full w-full bg-[#d5d3d0] rounded-[13px] overflow-hidden">
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `url('${getAssetPath("card_background-2.png")}')`,
                  backgroundSize: '120%',
                  backgroundPosition: 'center',
                  filter: 'grayscale(1) brightness(4) '
                }}
              />
              <div 
                className="absolute inset-0 z-[5] opacity-40 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.8) 20%, rgba(150,150,150,0.1) 50%, rgba(255,255,255,0.8) 100%)",
                  mixBlendMode: "color-dodge"
                }}
              />
              <div className="relative h-full flex flex-col px-8 pt-10 pb-6">
                <div className="text-center mb-3 h-6 relative"> 
                  <h1 className="text-[20px] sm:text-2xl whitespace-nowrap tracking-[0.15em] sm:tracking-[0.1em] text-[#2d2d2d] luxury-brand font-bold absolute left-1/2 -translate-x-1/2 w-full">
                    LOUIS VUITTON
                  </h1>
                </div>

               <div className="text-center mb-4 relative"> 
                  <h1 className="text-[16px] sm:text-md whitespace-nowrap tracking-[0.15em] sm:tracking-[0.1em] text-[#2d2d2d] luxury-brand font-bold absolute left-1/2 -translate-x-1/2 w-full">
                    Again
                  </h1>
                </div>

                <div className="flex-1 flex items-center justify-center my-4">
                  <div className="absolute w-35 h-35 bg-[#09dcba]/15 rounded-full blur-[40px] z-0 pointer-events-none" />
                  <img
                    src={product_image}
                    alt="Aura Logo"
                    className="w-[250px] h-auto object-contain z-1 opacity-90 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                  />
                </div>

                <div className="flex flex-col items-center justify-center mt-6 pt-0.5 space-y-4 w-full overflow-hidden">
                  <span className="text-[10px] sm:text-[12px] leading-tight whitespace-nowrap text-[#3d3d3d] uppercase font-bold tracking-[0.2em] sm:tracking-[0.3em] luxury-brand">
                   Digital Product Passeport N°
                  </span>
                  <span className={cn(
                    "text-[16px] sm:text-[18px] text-[#3d3d3d] uppercase font-bold tracking-[0.15em] sm:tracking-[0.3em] luxury-brand font-mono select-none whitespace-nowrap",
                    !isOwner && "blur-[2px] sm:blur-[4px]"
                  )}>
                    M25877-RA598-BX498
                  </span>
                </div>

              </div>
            </div>
          </div>
        </CometCard>
      </div>
    </div>
  );
}


const CometCard = ({
  rotateDepth = 40,
  translateDepth = 50,
  className,
  children,
  onClick,
}: {
  rotateDepth?: number;
  translateDepth?: number;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    if (isMobile) {
      return scrollYProgress.onChange((v) => {
        const frequence = 1.2; 
        const intensite = 0.3; 
        const wave = Math.sin(v * Math.PI * 2 * frequence); 
        y.set(wave * intensite); 
        x.set(wave * (intensite * 0.4)); 
      });
    }
  }, [isMobile, scrollYProgress, x, y]);

  const springConfig = { stiffness: 150, damping: 20 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`-${rotateDepth}deg`, `${rotateDepth}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`${rotateDepth}deg`, `-${rotateDepth}deg`]);
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [`-${translateDepth}px`, `${translateDepth}px`]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [`${translateDepth}px`, `-${translateDepth}px`]);

  const staticShadow = "10px 50px 100px -10px rgba(0, 0, 0, 0.3)";
  const shadowX = useTransform(mouseXSpring, [-0.6, 0.6], [30, -30]);
  const shadowY = useTransform(mouseYSpring, [-0.6, 0.6], [60, -40]);
  const shadowBlur = useTransform(mouseYSpring, [-0.7, 0.7], [60, 90]);
  const shadowOpacity = useTransform(mouseYSpring, [-0.7, 0, 0.7], [0.3, 0.1, 0.4]);
  
  const dynamicShadow = useMotionTemplate`
    ${shadowX}px ${shadowY}px ${shadowBlur}px -5px rgba(0, 0, 0, ${shadowOpacity}),
    calc(${shadowX}px) calc(${shadowY}px) calc(${shadowBlur}px) -8px 
    rgba(0, 0, 0, ${shadowOpacity})
  `;
  const shadowTransform = useMotionTemplate`${staticShadow}, ${dynamicShadow}`;

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const touch = e.touches[0];
    const tX = (touch.clientX - rect.left) / rect.width - 0.5;
    const tY = (touch.clientY - rect.top) / rect.height - 0.5;
    
    // Limitation pour rester dans les bornes de tes calculs
    if (tX >= -0.5 && tX <= 0.5 && tY >= -0.5 && tY <= 0.5) {
      x.set(tX);
      y.set(tY);
    }
  };

  const reset = () => { x.set(0); y.set(0); };

  return (
    <div className={cn("perspective-distant transform-3d", className)} onClick={onClick}>
      <motion.div
        ref={ref}
        className="relative rounded-[16px] bg-transparent"
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        onTouchMove={handleTouchMove} // Active le mouvement au doigt
        onTouchEnd={reset}           // Remet à zéro quand on lâche
        style={{ 
          rotateX, rotateY, translateX, translateY,
          transformStyle: "preserve-3d",
          boxShadow: shadowTransform
        }}
        initial={{scale: isMobile ? 0.6 : 1, z: 0}}
        whileHover={{ 
          scale: isMobile ? 1.1 : 1.5, 
          z: 50,
          transition: { duration: 0.3 }
        }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 z-[100] h-full w-full rounded-[16px]"
          style={{
            background: useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 30%, transparent 60%)`,
            mixBlendMode: "color-dodge",
          }}
        />
        {children}
      </motion.div>
    </div>
  );
};