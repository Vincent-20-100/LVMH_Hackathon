# Feuille de Route : Multi-Produits DPP

## Objectif

Transformer l'app single-product en multi-product avec routing dynamique.

---

## 1. Organisation du Repo (Cible)

```
lib/
└── products.ts              # Données de tous les produits + types

public/products/
├── M25877/                  # Again Bag (existant)
│   ├── front.avif
│   ├── back.avif
│   ├── detail.avif
│   ├── interior.avif
│   ├── side.avif
│   └── thumbnail.png        # Pour la grille collection
├── M12345/                  # Produit 2
│   └── ...
└── M67890/                  # Produit 3
    └── ...

app/
├── page.tsx                 # Landing ou redirect vers /product/M25877
├── product/
│   └── [productId]/
│       └── page.tsx         # Page DPP dynamique
├── collection/
│   └── page.tsx             # Inchangé (utilise lib/products.ts)
└── account-creation/
    └── page.tsx             # Inchangé
```

---

## 2. Template : `lib/products.ts`

```typescript
// Types
export interface ProductImage {
  src: string;
  alt: string;
  view: 'front' | 'back' | 'side' | 'detail' | 'interior';
}

export interface ServiceEntry {
  date: string;
  type: string;
  location: string;
  description: string;
}

export interface TraceabilityStep {
  step: number;
  title: string;
  location: string;
  description: string;
  date?: string;
}

export interface Product {
  // Identifiants
  id: string;                    // SKU (ex: "M25877")
  slug: string;                  // URL-friendly (ex: "again-bag")

  // Infos de base
  name: string;                  // "Again Bag"
  category: string;              // "Leather Goods"
  model: string;                 // "Monogram"
  size: string;                  // "45 x 33 x 13 cm"
  price?: number;                // Optionnel pour démo

  // Description
  shortDescription: string;      // 1-2 phrases
  longDescription?: string;      // Paragraphe complet

  // Médias
  images: ProductImage[];
  thumbnailPath: string;         // Pour grille collection

  // Certificat Aura
  certificateCode: string;       // "LV-2024-XXXX-XXXX"
  blockchainId: string;          // Hash Aura
  authenticity: {
    verified: boolean;
    verificationDate: string;
    nfcChipId: string;
  };

  // Traçabilité
  traceability: TraceabilityStep[];

  // Service Ledger (historique entretien)
  serviceLedger: ServiceEntry[];

  // Métadonnées
  createdAt: string;
  updatedAt: string;
}

// Helper pour les chemins d'images
const getProductImagePath = (productId: string, filename: string) =>
  `/LVMH_Hackathon/products/${productId}/${filename}`;

// Données produits
export const products: Record<string, Product> = {
  'M25877': {
    id: 'M25877',
    slug: 'again-bag',
    name: 'Again Bag',
    category: 'Leather Goods',
    model: 'Monogram',
    size: '45 x 33 x 13 cm',

    shortDescription: 'This authentic piece has been verified through our secure blockchain-enabled traceability system.',

    images: [
      { src: getProductImagePath('M25877', 'front.avif'), alt: 'Again Bag - Front view', view: 'front' },
      { src: getProductImagePath('M25877', 'back.avif'), alt: 'Again Bag - Back view', view: 'back' },
      { src: getProductImagePath('M25877', 'side.avif'), alt: 'Again Bag - Side view', view: 'side' },
      { src: getProductImagePath('M25877', 'detail.avif'), alt: 'Again Bag - Detail view', view: 'detail' },
      { src: getProductImagePath('M25877', 'interior.avif'), alt: 'Again Bag - Interior view', view: 'interior' },
    ],
    thumbnailPath: getProductImagePath('M25877', 'thumbnail.png'),

    certificateCode: 'LV-2024-8847-2951',
    blockchainId: '0x7a3b...4f2e',
    authenticity: {
      verified: true,
      verificationDate: '2024-03-15',
      nfcChipId: 'NFC-LV-M25877-001',
    },

    traceability: [
      { step: 1, title: 'Raw Materials', location: 'Tannery, Italy', description: 'Premium leather sourcing', date: '2024-01' },
      { step: 2, title: 'Craftsmanship', location: 'Atelier, France', description: 'Handcrafted assembly', date: '2024-02' },
      { step: 3, title: 'Quality Control', location: 'Paris, France', description: 'Final inspection', date: '2024-03' },
      { step: 4, title: 'Authentication', location: 'Aura Blockchain', description: 'Digital certificate minted', date: '2024-03' },
    ],

    serviceLedger: [
      { date: '2024-06-15', type: 'Cleaning', location: 'LV Store Paris', description: 'Professional leather cleaning' },
      { date: '2024-09-20', type: 'Repair', location: 'LV Store London', description: 'Handle reinforcement' },
    ],

    createdAt: '2024-03-15',
    updatedAt: '2024-09-20',
  },

  // Ajouter d'autres produits ici...
};

// Helpers
export const getProductById = (id: string): Product | undefined => products[id];
export const getProductBySlug = (slug: string): Product | undefined =>
  Object.values(products).find(p => p.slug === slug);
export const getAllProducts = (): Product[] => Object.values(products);
export const getProductIds = (): string[] => Object.keys(products);
```

---

## 3. Étapes d'Implémentation

### Phase 1 : Setup Data (30 min)

- [ ] Créer `lib/products.ts` avec le type `Product`
- [ ] Migrer les données du Again Bag (M25877) depuis les composants
- [ ] Créer `public/products/M25877/` et y déplacer les images existantes
- [ ] Ajouter 2-3 produits manuellement (copier-coller depuis LV)

### Phase 2 : Route Dynamique (45 min)

- [ ] Créer `app/product/[productId]/page.tsx`
- [ ] Récupérer le produit via `params.productId`
- [ ] Passer `product` en prop aux sections DPP
- [ ] Gérer le cas produit non trouvé (404)

### Phase 3 : Adapter les Composants (1h)

- [ ] `Page-DPP-section-1.tsx` : accepter `product` en prop
- [ ] `Page-DPP-section-2.tsx` : idem
- [ ] `Page-DPP-section-3.tsx` : idem
- [ ] `Page-DPP-section-4.tsx` : idem
- [ ] `Feature-certificate-card-v2.tsx` : utiliser `product.certificateCode`
- [ ] `Feature-product-carousel.tsx` : utiliser `product.images`

### Phase 4 : Collection Grid (30 min)

- [ ] Modifier `feature-collection-grid.tsx` pour utiliser `getAllProducts()`
- [ ] Lien vers `/product/[id]` au lieu de `/`
- [ ] Afficher thumbnail depuis `product.thumbnailPath`

### Phase 5 : Nettoyage (15 min)

- [ ] Supprimer les données hardcodées des composants
- [ ] Mettre à jour `user-context.tsx` si nécessaire
- [ ] Décider du comportement de `/` (redirect ou landing)

---

## 4. Données à Collecter par Produit

Pour chaque nouveau produit, récupérer manuellement depuis louisvuitton.com :

| Champ | Où le trouver |
|-------|---------------|
| `id` / SKU | URL ou fiche produit (ex: M25877) |
| `name` | Titre de la page |
| `category` | Breadcrumb ou filtre |
| `model` | Description ou variantes |
| `size` | Section "Caractéristiques" |
| `shortDescription` | Premier paragraphe |
| `images` (5-6) | Clic droit > Enregistrer (format .avif ou .webp) |

Pour `traceability` et `serviceLedger` : inventer des données réalistes (c'est une démo).

---

## 5. Produits Suggérés pour la Démo

1. **M25877** - Again Bag (déjà fait)
2. **M46197** - Speedy Bandoulière 20
3. **M45811** - Neverfull MM
4. **M44875** - Petit Sac Plat

Ces 4 produits couvrent différentes gammes et montrent bien la versatilité du DPP.

---

## Notes

- **Pas de scraping** : données manuelles pour éviter les blocages
- **Images** : télécharger en haute qualité, convertir en .avif si besoin
- **Performance** : les images dans `/public` sont servies statiquement par Next.js
- **SEO** : le routing dynamique permet des URLs propres `/product/M25877`
