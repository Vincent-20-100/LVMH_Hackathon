"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/user-context";

export function ConnectionBanner() {
  const [isDismissed, setIsDismissed] = useState(false);
  const { isConnected } = useUser();
  const router = useRouter();

  // Ne pas afficher si connecté ou fermé
  if (isConnected || isDismissed) return null;

  const handleConnect = () => {
    router.push("/account-creation");
  };

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Bandeau Glass - Pleine largeur avec dégradé transparent sur les bords */}
          <div
            className="w-full pointer-events-auto"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 90%, transparent 100%)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <div className="relative max-w-2xl mx-auto px-8 py-10 md:py-14 text-center">

              {/* Bouton Fermer */}
              <button
                onClick={() => setIsDismissed(true)}
                className="absolute top-4 right-4 p-1.5 text-neutral-500 hover:text-neutral-800 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-6 h-6 stroke-[1.5px]" />
              </button>

              {/* Contenu */}
              <h3 className="text-2xl md:text-4xl font-light tracking-[0.1em] text-neutral-800 uppercase mb-4">
                Débloquez votre Certificat
              </h3>
              <p className="text-sm md:text-base text-neutral-600 font-light tracking-wide mb-8">
                Votre collection, votre histoire.
              </p>

              <button
                onClick={handleConnect}
                className="px-10 py-3 bg-black text-white text-[11px] md:text-xs tracking-[0.4em] uppercase hover:bg-neutral-800 transition-all duration-300"
              >
                Se connecter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
