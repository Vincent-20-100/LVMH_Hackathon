"use client";

import { useUser } from "@/contexts/user-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CollectionPage() {
  const { user, isConnected, isLoading } = useUser();
  const router = useRouter();

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
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-light tracking-wide">Ma Collection</h1>
          <p className="text-sm text-gray-600">
            Bienvenue, {user?.firstName}
          </p>
        </div>
      </header>

      {/* Contenu principal - placeholder */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-gray-500 text-center">
          Vos produits apparaîtront ici.
        </p>
      </section>
    </main>
  );
}
