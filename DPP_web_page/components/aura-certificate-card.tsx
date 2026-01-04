"use client"

import { CometCard } from "./comet-card"

const getAssetPath = (path: string) => `/LVMH_Hackathon/${path.startsWith('/') ? path.slice(1) : path}`;

export function AuraCertificateCard() {
  return (
    <div className="bg-white flex flex-col items-center p-2">
      
      <CometCard className="w-[330px] h-[470px] cursor-pointer">
        {/* Contour noir intégré dans la carte */}
        <div className="relative h-full w-full bg-[#3d3d3d] rounded-[16px] p-0"> {/* CHANGER A p-1.5 POUR AVOIR LA BORDURE */}
          {/* Carte principale */}
          <div className="relative h-full w-full bg-[#d5d3d0] rounded-[13px] overflow-hidden">

            {/* Pattern LV en background (image) */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `url('${getAssetPath("card_background-2.png")}')`,
                backgroundSize: '120%',
                backgroundPosition: 'center',
                filter: 'grayscale(1) brightness(1)'
              }}
            />

            {/* Contenu de la carte */}
            <div className="relative h-full flex flex-col px-8 pt-10 pb-6">

              {/* LOUIS VUITTON en haut */}
              <div className="text-center mb-8">
                <h1 className="text-2xl whitespace-nowrap tracking-[0.1em] text-[#2d2d2d] luxury-brand font-bold absolute left-1/2 -translate-x-1/2">
                  LOUIS VUITTON
                </h1>
              </div>

              {/* Logo Aura central (image) */}
              <div className="flex-1 flex items-center justify-center my-4">

                {/* Le Halo (ajuste 'bg-white' ou 'bg-gray-400' selon l'intensité voulue) */}
                <div className="absolute w-35 h-35 bg-[#09dcba]/15 rounded-full blur-[40px] z-0 pointer-events-none" />
                              {/* ANGMENTER LA TRANSPARENCE ICI ^^ POUR LE HALO */}
                {/* L'image du logo */}
                <img
                  src={getAssetPath("card-aura-logo-2.png")}
                  alt="Aura Logo"
                  className="w-[160px] h-auto object-contain z-1 opacity-80"
                />
              </div>

              {/* AURA BLOCKCHAIN CONSORTIUM */}
              <div className="text-center mb-8">
                <h2 className="text-[22px] font-light tracking-[0.18em] text-[#2d2d2d] leading-[1.3]" style={{ fontFamily: 'serif' }}>
                  AURA
                </h2>
                <h2 className="text-[22px] font-light tracking-[0.18em] text-[#2d2d2d] leading-[1.3]" style={{ fontFamily: 'serif' }}>
                  BLOCKCHAIN
                </h2>
                <h2 className="text-[22px] font-light tracking-[0.18em] text-[#2d2d2d] leading-[1.3]" style={{ fontFamily: 'serif' }}>
                  CONSORTIUM
                </h2>
              </div>

              {/* Footer - superposé et flouté */}
              <div className="flex flex-col items-center justify-center pt-0.5 space-y-1">
                {/* Texte du haut */}
                <span className="text-[14px] whitespace-nowrap text-[#3d3d3d] uppercase font-bold tracking-[0.3em] luxury-brand" >
                  Authenticity Certificate
                </span>
                
                {/* Code flouté (simule le besoin d'authentification) */}
                <span className="text-[26px] text-[#3d3d3d]  uppercase font-bold tracking-[0.3em] luxury-brand font-mono blur-[4px] select-none">
                  #F7-RA598-LV
                </span>

              </div>
            </div>
          </div>
        </div>
      </CometCard>
    </div>
  )
}