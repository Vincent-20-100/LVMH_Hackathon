"use client";

import { AuraCertificateCard } from "./feature-certificate-card-v2";
import { Plus } from "lucide-react";

const EmptySlot = () => (
  <a
    href="https://eu.louisvuitton.com/fra-fr/homepage"
    target="_blank"
    rel="noopener noreferrer"
    className="group w-[280px] h-[400px] sm:w-[330px] sm:h-[470px] bg-neutral-100 rounded-2xl flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-neutral-300 hover:border-neutral-400 hover:bg-neutral-200/50 transition-all duration-300 cursor-pointer"
  >
    <Plus className="w-12 h-12 text-neutral-400 group-hover:text-neutral-500 mb-4 transition-colors" />
    <p className="text-neutral-500 group-hover:text-neutral-600 text-sm md:text-base transition-colors">
      Agrandir ma collection
    </p>
    <p className="text-neutral-400 text-xs mt-2">
      louisvuitton.com
    </p>
  </a>
);

interface FeatureCollectionGridProps {
  showTitle?: boolean;
}

export function FeatureCollectionGrid({ showTitle = true }: FeatureCollectionGridProps) {

return (
  <div className="flex flex-col items-center">
      {/* Grille de produits */}
      <div className="flex flex-wrap items-center justify-center py-10 gap-6 lg:gap-10 max-w-[1600px]">
        <AuraCertificateCard variant="collection" />
        <EmptySlot />
        <EmptySlot />
        <EmptySlot />
        <EmptySlot />
        <EmptySlot />
        <EmptySlot />
        <EmptySlot />
        <EmptySlot />
        <EmptySlot />
        <EmptySlot />
        <EmptySlot />
      </div>
    </div>
  );
}
