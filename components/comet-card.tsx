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
import { cn } from "@/lib/utils";

export const CometCard = ({
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
          scale: isMobile ? 1.1 : 1.4, 
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
