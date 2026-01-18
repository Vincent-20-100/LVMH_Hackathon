import { list } from "postcss";

// Types
export interface ProductImage {
  src: string;
  alt: string;
  view: 'front' | 'back' | 'side' | 'detail' | 'interior';
}


export interface Product {
  // Identifiants
  id: string;                    // SKU (ex: "M25877")
  slug: string;                 // URL-friendly (ex: "again-bag")

  // Infos de base
  name: string;                  // "Again Bag"
  category: string;             // "Leather Goods"
  model: string;               // "Monogram"
  size?: string;               // "45 x 33 x 13 cm"
  price?: number;            // Optionnel pour démo

  // Description
  shortDescription?: string;     // 1-2 phrases
  Description: string;          // Paragraphe complet
  Details?: string[];          // Détails techniques
  fits?: string[];            // Ce que le produit peut contenir
  Sustainability?: string;   // Infos durabilité
  ProductCare?: string;     // Conseils d'entretien


  // Médias
  images: ProductImage[];
  thumbnailPath: string;         // Pour grille collection

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
    slug: 'again',
    name: 'Again',
    category: 'Leather Goods',
    model: 'Monogram',
    size: '17.7 x 13 x 5.1 inches',
    price: 2950,

    Details: ['Monogram',
              'Coated canvas',
              'Cowhide-leather trim',
              'Microfiber lining',
              'Gold-toned hardware',
              'Magnetic closure',
              '1 customizable VVN name tag',
              '1 LV round charm',
              '1 hook',
              '1 inside zipped pocket',
              '2 inside flat pockets',
              '4 protective metal base feet',
              'Strap:Not removable, not adjustable',
              'Strap drop:7.9 inches'],
    fits: ['15-inch laptop', 'smartphone', 'notebook', 'Zippy long wallet', 'sunglasses', 'lipstick'],

    Description: 'Introducing the Again handbag, a fresh interpretation of the iconic Artsy design that first launched in 2010, now more supple, more iconic, and more meticulously crafted. This edition is rooted in LV DNA, paying tribute to the House’s savoir-faire with a classic Monogram canvas base, a hand-braided handle, and a customizable name tag. It is generously sized to store a laptop and opens to reveal several pockets. The gold-tone hook can be used to attach playful charms.',
    Sustainability: 'The leather used in this product comes from a tannery audited and certified by the Leather Working Group (LWG), which is the highest environmental standard in terms of leather tanning. This standard requires tanneries to reduce their water and energy consumption, as well as their use of potentially hazardous substances. The tanneries we work with are located in Europe and are committed partners who work with us in our efforts for responsible sourcing and continuous improvement (implementation of material traceability systems, fighting against deforestation practices).',
    ProductCare: '',

    images: [
      { src: getProductImagePath('M25877', 'front.avif'), alt: 'Again - Front view', view: 'front' },
      { src: getProductImagePath('M25877', 'back.avif'), alt: 'Again - Back view', view: 'back' },
      { src: getProductImagePath('M25877', 'side.avif'), alt: 'Again - Side view', view: 'side' },
      { src: getProductImagePath('M25877', 'detail.avif'), alt: 'Again - Detail view', view: 'detail' },
      { src: getProductImagePath('M25877', 'interior.avif'), alt: 'Again - Interior view', view: 'interior' },
    ],
    thumbnailPath: getProductImagePath('M25877', 'thumbnail.png'),

    createdAt: '2026-01-18',
    updatedAt: '2026-01-18',
  },

  'M46978': {
    id: 'M46978',
    slug: 'neverfull-gm',
    name: 'Neverfull GM',
    category: 'Leather Goods',
    model: 'Monogram',
    size: '15.4 x 12.6 x 7.5 inches',
    price: 2240,

    Details: ['Beige',
            'Monogram coated canvas',
            'Natural cowhide-leather trim',
            'Striped textile lining',
            'Gold-color hardware',
            '4 side laces',
            'Hook closure',
            'Flat, textile-lined zipped inside pocket',
            'Removable zipped pouch',
            'D-ring',
            'Fits: 15-inch laptop, 13-inch tablet, smartphone, Zippy Long Wallet, book, sunglasses, lipstick, keys, tissues',
            'Handle:Double'],
    fits: ['15-inch laptop', 'smartphone', 'notebook', 'Zippy long wallet', 'sunglasses', 'lipstick'],

    Description: 'The Neverfull GM tote unites timeless design with heritage details. Made from supple Monogram canvas with natural cowhide trim, it is ultra-roomy but never bulky, with side laces that cinch for a sleek allure or loosen for a more casual look. Slim, comfortable handles slip easily over the shoulder or arm. Lined in colorful textile, it features a removable pouch which can serve as a clutch or an extra pocket.',
    Sustainability: 'The leather used in this product comes from a tannery audited and certified by the Leather Working Group (LWG), which is the highest environmental standard in terms of leather tanning. This standard requires tanneries to reduce their water and energy consumption, as well as their use of potentially hazardous substances. The tanneries we work with are located in Europe and are committed partners who work with us in our efforts for responsible sourcing and continuous improvement (implementation of material traceability systems, fighting against deforestation practices).',
    ProductCare: ''

    images: [
      { src: getProductImagePath('M46978', 'front.avif'), alt: 'Neverfull GM - Front view', view: 'front' },
      { src: getProductImagePath('M46978', 'side.avif'), alt: 'Neverfull GM - Side view', view: 'side' },
      { src: getProductImagePath('M46978', 'detail.avif'), alt: 'Neverfull GM - Detail view', view: 'detail' },
      { src: getProductImagePath('M46978', 'interior.avif'), alt: 'Neverfull GM - Interior view', view: 'interior' },
    ],
    thumbnailPath: getProductImagePath('M46978', 'thumbnail.png'),

    createdAt: '2026-01-18',
    updatedAt: '2026-01-18',
  },

    'M42616': {
    id: 'M42616',
    slug: 'zippy-wallet',
    name: 'Zippy Wallet',
    category: 'Leather Goods',
    model: 'Monogram',
    price: 915,

    Details: ['Monogram',
              'Coated canvas',
              'Cowhide-leather trim',
              'Microfiber lining',
              'Gold-toned hardware',
              'Magnetic closure',
              '1 customizable VVN name tag',
              '1 LV round charm',
              '1 hook',
              '1 inside zipped pocket',
              '2 inside flat pockets',
              '4 protective metal base feet',
              'Strap:Not removable, not adjustable',
              'Strap drop:7.9 inches'],
    fits: ['15-inch laptop', 'smartphone', 'notebook', 'Zippy long wallet', 'sunglasses', 'lipstick'],

    Description: 'Introducing the Again handbag, a fresh interpretation of the iconic Artsy design that first launched in 2010, now more supple, more iconic, and more meticulously crafted. This edition is rooted in LV DNA, paying tribute to the House’s savoir-faire with a classic Monogram canvas base, a hand-braided handle, and a customizable name tag. It is generously sized to store a laptop and opens to reveal several pockets. The gold-tone hook can be used to attach playful charms.',
    Sustainability: 'The leather used in this product comes from a tannery audited and certified by the Leather Working Group (LWG), which is the highest environmental standard in terms of leather tanning. This standard requires tanneries to reduce their water and energy consumption, as well as their use of potentially hazardous substances. The tanneries we work with are located in Europe and are committed partners who work with us in our efforts for responsible sourcing and continuous improvement (implementation of material traceability systems, fighting against deforestation practices).',
    ProductCare: '',

    images: [
      { src: getProductImagePath('M42616', 'front.avif'), alt: 'Again - Front view', view: 'front' },
      { src: getProductImagePath('M42616', 'back.avif'), alt: 'Again - Back view', view: 'back' },
      { src: getProductImagePath('M42616', 'side.avif'), alt: 'Again - Side view', view: 'side' },
      { src: getProductImagePath('M42616', 'detail.avif'), alt: 'Again - Detail view', view: 'detail' },
      { src: getProductImagePath('M42616', 'interior.avif'), alt: 'Again - Interior view', view: 'interior' },
    ],
    thumbnailPath: getProductImagePath('M42616', 'thumbnail.png'),

    createdAt: '2026-01-18',
    updatedAt: '2026-01-18',
  },


  // Ajouter d'autres produits ici...
};

// Helpers
export const getProductById = (id: string): Product | undefined => products[id];
export const getProductBySlug = (slug: string): Product | undefined =>
  Object.values(products).find(p => p.slug === slug);
export const getAllProducts = (): Product[] => Object.values(products);
export const getProductIds = (): string[] => Object.keys(products);