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
      <motion.div
        className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {/* Bandeau avec dégradé transparent → opaque → transparent */}
        <div
          className="w-full py-8 md:py-10 pointer-events-auto"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.97) 20%, rgba(255,255,255,0.97) 80%, transparent 100%)",
          }}
        >
          <div className="relative max-w-lg mx-auto px-8 text-center">
            {/* Bouton fermer */}
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute -top-2 right-4 md:right-0 p-1.5 text-neutral-400 hover:text-neutral-600 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Contenu */}
            <h3 className="text-base md:text-lg font-serif mb-2 tracking-wide text-foreground">
              Débloquez votre Certificat
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
              Connectez-vous pour accéder à votre preuve de propriété.
            </p>
            <button
              onClick={handleConnect}
              className="px-6 py-2 bg-black text-white text-[10px] md:text-xs tracking-[0.3em] uppercase hover:bg-neutral-800 transition-colors duration-300"
            >
              Se connecter
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
