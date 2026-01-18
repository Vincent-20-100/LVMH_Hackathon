"use client";

import { useState } from "react";
import { AuraCertificateCard } from "./feature-certificate-card";
import { Plus } from "lucide-react";
import { AddProductModal } from "./feature-add-product-modal";
import { useUser } from "@/contexts/user-context";

const EmptySlot = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="group w-[280px] h-[400px] sm:w-[330px] sm:h-[470px] bg-neutral-100 rounded-2xl flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-neutral-300 hover:border-neutral-400 hover:bg-neutral-200/50 transition-all duration-300 cursor-pointer"
  >
    <Plus className="w-12 h-12 text-neutral-400 group-hover:text-neutral-500 mb-4 transition-colors" />
    <p className="text-neutral-500 group-hover:text-neutral-600 text-sm md:text-base transition-colors">
      Agrandir ma collection
    </p>
    <p className="text-neutral-400 text-xs mt-2">
      Ajouter une pièce
    </p>
  </button>
);

interface FeatureCollectionGridProps {
  showTitle?: boolean;
}

export function FeatureCollectionGrid({ showTitle = true }: FeatureCollectionGridProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { products } = useUser();

  const totalSlots = 12; // Total d'emplacements dans la grille
  const emptySlots = totalSlots - products.length; // Nombre d'emplacements vides

  return (
    <>
      <div className="flex flex-col items-center">
        {/* Grille de produits */}
        <div className="flex flex-wrap items-center justify-center py-10 gap-6 lg:gap-10 max-w-[1600px]">
          {/* Afficher les produits possédés */}
          {products.map((product) => (
            <AuraCertificateCard
              key={product.id}
              variant="collection"
              productId={product.id}
            />
          ))}

          {/* Afficher les emplacements vides */}
          {Array.from({ length: emptySlots }).map((_, i) => (
            <EmptySlot key={`empty-${i}`} onClick={() => setIsModalOpen(true)} />
          ))}
        </div>
      </div>

      {/* Modal d'ajout de produit */}
      <AddProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
