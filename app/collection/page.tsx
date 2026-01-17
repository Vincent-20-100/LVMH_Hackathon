"use client";

import { useUser } from "@/contexts/user-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FeatureCollectionGrid } from "@/components/feature-collection-grid";
import { StickyHeader } from "@/components/feature-sticky-header";
import Link from "next/link";
import { ArrowLeft, LogOut } from "lucide-react";

export default function CollectionPage() {
  const { user, isConnected, isLoading, logout } = useUser();
  const router = useRouter();
  const fullName = user ? `${user.firstName} ${user.lastName}` : "";

  // Rediriger vers l'accueil si non connecté (après chargement)
  useEffect(() => {
    if (!isLoading && !isConnected) {
      router.push("/");
    }
  }, [isConnected, isLoading, router]);

  // Afficher un état de chargement
  if (isLoading || !isConnected) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-400">Chargement...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header Sticky */}
      <StickyHeader
        leftContent={
          <Link
            href="/"
            className="hidden md:flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au produit</span>
          </Link>
        }
        rightContent={
          <button
            onClick={logout}
            className="flex items-center gap-2 text-xs tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Déconnexion</span>
          </button>
        }
      />

      {/* Section Titre & Accroche */}
      {fullName && (
        <div className="text-center pt-32 pb-8">
          {/* L'accueil personnalisé */}
          <h2 className="text-2xl py-4 md:text-2xl lg:text-4xl font-light italic tracking-tight text-gray-900 mb-4">
            Bienvenue chez vous, {fullName}.
          </h2>
          
          {/* L'accroche émotionnelle */}
          <h3 className="text-l md:text-xl lg:text-2xl italic ">
            Chaque pièce est une histoire, voici la vôtre.
          </h3>
        </div>
      )}

      {/* Contenu principal - Grille de produits */}
      <section className="max-w-full mx-auto px-6 pb-12">
        <FeatureCollectionGrid />
      </section>
    </main>
  );
}
