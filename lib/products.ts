// Types
export interface ProductImage {
  src: string;
  alt: string;
  view: 'Front' | 'Back' | 'Side' | 'Detail' | 'Interior' | 'Interior2' | 'Other';
}


export interface Product {
  // Identifiants
  id: string;                    // SKU (ex: "M25877")
  slug: string;                 // URL-friendly (ex: "again-bag")

  // Infos de base
  name: string;                  // "Again Bag"
  link?: string;                // URL vers le site LV
  category: string;             // "Leather Goods"
  model?: string;               // "Monogram"
  size?: string;               // "45 x 33 x 13 cm"
  price?: number;            // Optionnel pour démo

  // Description
  shortDescription?: string;     // 1-2 phrases
  description: string;          // Paragraphe complet
  details?: string[];          // Détails techniques
  fits?: string[];            // Ce que le produit peut contenir
  sustainability?: string;   // Infos durabilité
  productCare?: string;     // Conseils d'entretien


  // Médias
    images: ProductImage[];
  
    // Métadonnées
    createdAt: string;
    updatedAt: string;
  }
  
  // Helper pour les chemins d'images
  // Images organisées par slug dans /public/products/{slug}/
  // Base path pour GitHub Pages deployment
  const BASE_PATH = '/LVMH_Hackathon';
  const getProductImagePath = (slug: string, view: string) =>
    `${BASE_PATH}/products/${slug}/${view.toLowerCase()}.avif`;
  
  // Helper pour créer un produit (évite de répéter id/name)
  const product = (data: {
    id: string;
    name: string;
    slug: string;
    link?: string;
    category: string;
    model?: string;
    size?: string;
    price?: number;
    shortDescription?: string;
    description: string;
    details?: string[];
    fits?: string[];
    sustainability?: string;
    productCare?: string;
    imageViews: Array<'Front' | 'Back' | 'Side' | 'Detail' | 'Interior' | 'Interior2' | 'Other'>; // 3-5 images
  }): Product => {
    const baseProduct: Product = {
      id: data.id,
      slug: data.slug,
      name: data.name,
      link: data.link,
      category: data.category,
      description: data.description,
      images: data.imageViews.map(view => ({
        src: getProductImagePath(data.slug, view),
        alt: `${data.name} - ${view} view`,
        view
      })),
      createdAt: '2026-01-18',
      updatedAt: '2026-01-18',
    };

  // Ajouter les propriétés optionnelles si elles existent
  if (data.model !== undefined) baseProduct.model = data.model;
  if (data.size !== undefined) baseProduct.size = data.size;
  if (data.price !== undefined) baseProduct.price = data.price;
  if (data.shortDescription !== undefined) baseProduct.shortDescription = data.shortDescription;
  if (data.details !== undefined) baseProduct.details = data.details;
  if (data.fits !== undefined) baseProduct.fits = data.fits;
  if (data.sustainability !== undefined) baseProduct.sustainability = data.sustainability;
  if (data.productCare !== undefined) baseProduct.productCare = data.productCare;

  return baseProduct;
};

// Données produits
export const products: Record<string, Product> = {
  'M25877': product({
    id: 'M25877',
    name: 'Again',
    slug: 'again',
    link: 'https://us.louisvuitton.com/eng-us/products/again-monogram-nvprod6550038v/M25877',
    category: 'Leather Goods',
    model: 'Monogram',
    size: '17.7 x 13 x 5.1 inches',
    price: 2950,
    imageViews: ['Front', 'Back', 'Side', 'Detail', 'Interior'], // 5 images
    fits: ['15-inch laptop', 'smartphone', 'notebook', 'Zippy long wallet', 'sunglasses', 'lipstick'],
    details: [
      'Monogram',
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
      'Strap drop:7.9 inches'
    ],
    description: "Introducing the Again handbag, a fresh interpretation of the iconic Artsy design that first launched in 2010, now more supple, more iconic, and more meticulously crafted. This edition is rooted in LV DNA, paying tribute to the House's savoir-faire with a classic Monogram canvas base, a hand-braided handle, and a customizable name tag. It is generously sized to store a laptop and opens to reveal several pockets. The gold-tone hook can be used to attach playful charms.",
    sustainability: 'The leather used in this product comes from a tannery audited and certified by the Leather Working Group (LWG), which is the highest environmental standard in terms of leather tanning. This standard requires tanneries to reduce their water and energy consumption, as well as their use of potentially hazardous substances. The tanneries we work with are located in Europe and are committed partners who work with us in our efforts for responsible sourcing and continuous improvement (implementation of material traceability systems, fighting against deforestation practices).',
    productCare: '',
  }),

  'M46978': product({
    id: 'M46978',
    name: 'Neverfull GM',
    slug: 'neverfull-gm',
    link: 'https://us.louisvuitton.com/eng-us/products/neverfull-gm-monogram-nvprod5350104v/M46978',
    category: 'Leather Goods',
    model: 'Beige',
    size: '15.4 x 12.6 x 7.5 inches',
    price: 2240,
    imageViews: ['Front', 'Side', 'Detail', 'Interior'], // 4 images
    fits: ['15-inch laptop', '13-inch tablet', 'smartphone', 'Zippy Long Wallet', 'book', 'sunglasses', 'lipstick', 'keys', 'tissues'],
    details: [
      'Beige',
      'Monogram coated canvas',
      'Natural cowhide-leather trim',
      'Striped textile lining',
      'Gold-color hardware',
      '4 side laces',
      'Hook closure',
      'Flat, textile-lined zipped inside pocket',
      'Removable zipped pouch',
      'D-ring',
      'Handle:Double'
    ],
    description: 'The Neverfull GM tote unites timeless design with heritage details. Made from supple Monogram canvas with natural cowhide trim, it is ultra-roomy but never bulky, with side laces that cinch for a sleek allure or loosen for a more casual look. Slim, comfortable handles slip easily over the shoulder or arm. Lined in colorful textile, it features a removable pouch which can serve as a clutch or an extra pocket.',
    sustainability: 'The leather used in this product comes from a tannery audited and certified by the Leather Working Group (LWG), which is the highest environmental standard in terms of leather tanning. This standard requires tanneries to reduce their water and energy consumption, as well as their use of potentially hazardous substances. The tanneries we work with are located in Europe and are committed partners who work with us in our efforts for responsible sourcing and continuous improvement (implementation of material traceability systems, fighting against deforestation practices).',
    productCare: '',
  }),

  'M42616': product({
    id: 'M42616',
    name: 'Zippy Wallet',
    slug: 'zippy-wallet',
    link: 'https://us.louisvuitton.com/eng-us/products/zippy-wallet-monogram-013178/M42616',
    category: 'Small Leather Goods',
    model: 'Brown',
    size: '7.7 x 4.1 x 1 inches',
    price: 915,
    imageViews: ['Front', 'Side', 'Detail', 'Interior', 'Interior2'], 
    details: [
          'Monogram coated canvas',
          'Grained cowhide-leather lining',
          'Gold-color hardware',
          'Zip closure',
          '3 large gusseted compartments',
          'Open compartment for banknotes',
          'Zipped coin pocket',
          '2 inside flat pockets',
          '12 card slots'
    ],
    description: 'The Zippy wallet in iconic Monogram canvas is famous for its all-round zipper, which opens to reveal a surprisingly spacious interior. Its secure, zipped coin pocket can also hold receipts or tickets, while multiple credit card slots and a billfold compartment keep cash and cards well organized.',
    sustainability: 'The leather used in this product comes from a tannery audited and certified by the Leather Working Group (LWG), which is the highest environmental standard in terms of leather tanning. This standard requires tanneries to reduce their water and energy consumption, as well as their use of potentially hazardous substances. The tanneries we work with are located in Europe and are committed partners who work with us in our efforts for responsible sourcing and continuous improvement (implementation of material traceability systems, fighting against deforestation practices).',
    productCare: '',
  }),

    'M60531': product({
    id: 'M60531',
    name: 'Sarah Wallet',
    slug: 'sarah-wallet',
    link: 'https://us.louisvuitton.com/eng-us/products/sarah-wallet-monogram-007824/M60531',
    category: 'Leather Goods',
    model: 'Brown',
    size: '7.5 x 3.9 x 0.8 inches',
    price: 2950,
    imageViews: ['Front', 'Back', 'Side', 'Detail', 'Interior'], // 5 images
    details: [
          'Brown',
          'Monogram coated canvas',
          'Grained cowhide-leather lining',
          'Gold-color hardware',
          'Press-stud closure',
          '2 large gusseted compartments',
          'Zipped coin pocket',
          'Inside flat pocket',
          'Outside flat pocket',
          '16 card slots'
    ],
    description: "One of Louis Vuitton's classic models, the Sarah wallet combines Monogram canvas with a grained-leather lining. Its elegant envelope-style design conceals a spacious interior with two large compartments, a central zipped coin pocket and multiple card slots. The perfect choice to keep all essentials in one safe place.",
    sustainability: 'The leather used in this product comes from a tannery audited and certified by the Leather Working Group (LWG), which is the highest environmental standard in terms of leather tanning. This standard requires tanneries to reduce their water and energy consumption, as well as their use of potentially hazardous substances. The tanneries we work with are located in Europe and are committed partners who work with us in our efforts for responsible sourcing and continuous improvement (implementation of material traceability systems, fighting against deforestation practices).',
    productCare: '',
  }),

  'M25860': product({
    id: 'M25860',
    name: 'All In One MM',
    slug: 'all-in-one-mm',
    link: 'https://us.louisvuitton.com/eng-us/products/all-in-one-mm-monogram-empreinte-nvprod6720111v/M25860',
    category: 'Leather Goods',
    model: 'Black',
    size: '17.7 x 13 x 5.1 inches',
    price: 3350,
    imageViews: ['Front', 'Back', 'Side', 'Detail', 'Interior', 'Other'], // 5 images
    fits: ['13-inch laptop', 'smartphone', 'earphones', 'Zippy wallet', 'notebook', 'sunglasses', 'keys'],
    details: [
        'Black',
        'Calfskin leather',
        'Cowhide-leather trim',
        'Microfiber lining',
        'Gold-toned hardware',
        'Magnet and hook closure',
        '1 decorative name tag with padlock',
        '1 inside double flat pocket',
        '1 inside zipped pocket',
        'Handle:Double, removable'
    ],
    description: "Ideal for work to weekend getaways, the All In One MM lives up to its name as a versatile design that can be styled as a tote or hobo bag. Capturing the House’s iconic heritage with a trunk-inspired handle, it is offered in Monogram Empreinte leather with gold-toned hardware, including a signature LV padlock and name tag. Lightweight yet robust, it is sized to fit a laptop amongst other everyday essentials.",
    sustainability: 'The leather used in this product comes from a tannery audited and certified by the Leather Working Group (LWG), which is the highest environmental standard in terms of leather tanning. This standard requires tanneries to reduce their water and energy consumption, as well as their use of potentially hazardous substances. The tanneries we work with are located in Europe and are committed partners who work with us in our efforts for responsible sourcing and continuous improvement (implementation of material traceability systems, fighting against deforestation practices).',
    productCare: '',
  }),

  'M14564': product({
    id: 'M14564',
    name: 'Wallet On Chain LV Bloom',
    slug: 'wallet-on-chain-lv-bloom',
    link: 'https://us.louisvuitton.com/eng-us/products/wallet-on-chain-lv-bloom-other-leathers-nvprod6260240v/M14564',
    category: 'Leather Goods',
    model: 'Black',
    size: '7.9 x 4.5 x 1.6 inches',
    price: 2020,
    imageViews: ['Front', 'Back', 'Side', 'Interior'], // 5 images
    fits: ['smartphone', 'earphones', 'Victorine wallet', 'keys'],
    details: [
          'Black',
          'Calfskin leather',
          'Calfskin-leather trim',
          'Microfiber lining',
          'Bi-galvanized gold- and silver-toned hardware',
          'Magnetic closure',
          'Decorative LV and Monogram Flower charms (non-removable)',
          '1 flat inside pocket',
          '3 card slots',
          'Chain:Sliding, removable',
          'Chain drop:9.8 inches',
          'Chain drop max:19.1 inches'
    ],
    description: "The LV Bloom collection introduces this new edition of the Wallet On Chain. With enough space to store a smartphone, this chic yet functional accessory is made from calfskin adorned with two charms that are inspired by the House’s iconic Monogram pattern. Note the contrasting gold- and silver-toned hardware, which lends a sophisticated finishing touch.",
    sustainability: 'The leather used in this product comes from a tannery audited and certified by the Leather Working Group (LWG), which is the highest environmental standard in terms of leather tanning. This standard requires tanneries to reduce their water and energy consumption, as well as their use of potentially hazardous substances. The tanneries we work with are located in Europe and are committed partners who work with us in our efforts for responsible sourcing and continuous improvement (implementation of material traceability systems, fighting against deforestation practices).',
    productCare: '',
  }),

  // Ajouter d'autres produits ici...
};

// Helpers
export const getProductById = (id: string): Product | undefined => products[id];
export const getProductBySlug = (slug: string): Product | undefined =>
  Object.values(products).find(p => p.slug === slug);
export const getAllProducts = (): Product[] => Object.values(products);
export const getProductIds = (): string[] => Object.keys(products);