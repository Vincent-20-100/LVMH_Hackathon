"use client";

import { AuraCertificateCard } from "./feature-certificate-card-v2";

const PlaceholderCard = () => (
  <div className="w-[280px] h-[400px] sm:w-[330px] sm:h-[470px] bg-gray-100 rounded-2xl flex items-center justify-center p-8 text-center">
    <p className="text-gray-400">
      Vos prochaines produits de la maison apparaitron ici
    </p>
  </div>
);

export function FeatureCollectionGrid() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
      <AuraCertificateCard />
      <PlaceholderCard />
      <PlaceholderCard />
      <PlaceholderCard />
    </div>
  );
}
