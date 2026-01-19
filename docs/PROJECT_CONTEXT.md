# LVMH Digital Product Passport - Contexte Projet

## 🎯 Intention du Projet

**Hackathon LVMH Alberthon** - Transformer l'obligation réglementaire du Digital Product Passport (DPP) en un **levier de prestige, confiance et engagement client long-terme** pour Louis Vuitton.

## 🏗️ Architecture Technique

### Stack
- **Frontend**: Next.js 16 + React 19 + TypeScript
- **Styling**: TailwindCSS 4 + Motion (animations)
- **UI Components**: Radix UI (dialog, separator, slot uniquement)
- **Blockchain**: Aura Blockchain (pour authenticité)
- **Auth**: localStorage (MVP/démo)

### Framework DPP
```
NFC Chip → Aura Blockchain → Database → DPP Page Dynamique
```

## 📁 Structure du Projet

```
app/
├── page.tsx                    # Redirige vers /collection
├── products/[slug]/page.tsx    # Page DPP dynamique par produit
├── account-creation/           # Formulaire création compte
└── collection/                 # Page Collection (dashboard user)

components/
├── page-dpp-section-1.tsx      # Hero + Info produit + Carrousel
├── page-dpp-section-2.tsx      # Carte Aura 3D + Traçabilité + Banner connexion
├── page-dpp-section-3.tsx      # Aftercare + Service Ledger
├── page-dpp-section-4.tsx      # Section finale
├── feature-certificate-card.tsx   # Carte 3D interactive (Motion)
├── feature-connection-banner.tsx     # Banner de connexion (glassmorphism)
├── feature-collection-grid.tsx       # Grille produits + emplacements vides
├── feature-product-carousel.tsx      # Carrousel images produit
├── feature-sticky-header.tsx         # Header personnalisable (left/right content)
├── page-account-creation.tsx         # Formulaire connexion
├── theme-provider.tsx                # Provider Next-themes
└── ui/                               # Composants Radix (button, separator, dialog)

contexts/
└── user-context.tsx            # Gestion état utilisateur (localStorage)

lib/
└── products.ts                 # Données et fonctions pour les produits

docs/
├── PROJECT_CONTEXT.md          # Ce fichier
├── workflow-produit.md         # Flow utilisateur détaillé
└── LVMH_Alberthon_*.txt        # Présentation framework DPP
```

## 🔄 Workflow Utilisateur

### Flow Implémenté
1. **Visiteur anonyme** arrive sur le site :
   - Redirection vers `/collection`
   - Si non connecté, redirection vers la page de création de compte.

2. **Connexion** :
   - Formulaire pré-rempli (John Doe)
   - Redirection vers `/collection`

3. **Page Collection** :
   - Header sticky avec "Retour au produit" + "Déconnexion"
   - Titre personnalisé : "Bienvenue chez vous, [Nom]"
   - Grille avec carte produit + emplacements vides
   - Clic sur une carte produit → `/products/[slug]`

4. **Utilisateur connecté** sur une page produit DPP :
   - Numéro de carte **visible**
   - Service Ledger **visible**
   - Banner de connexion **masqué**
   - Clic sur carte → `/collection`

## 🎨 Produits

Le projet supporte maintenant plusieurs produits. Les données sont gérées dans `lib/products.ts`.

- Louis Vuitton "Again Bag" (M25877)
- Neverfull GM (M46978)
- Zippy Wallet (M42616)
- Sarah Wallet (M60531)
- All In One MM (M25860)
- Wallet On Chain LV Bloom (M14564)

## 🔑 Composants Clés

| Composant | Rôle | État |
|-----------|------|------|
| `user-context.tsx` | Gestion état user + products (localStorage) | ✅ |
| `feature-certificate-card.tsx` | Carte 3D avec flou conditionnel + redirection | ✅ |
| `feature-connection-banner.tsx` | Banner glassmorphism pour engagement | ✅ |
| `feature-collection-grid.tsx` | Grille produits + slots vides cliquables | ✅ |
| `feature-sticky-header.tsx` | Header avec props `leftContent`/`rightContent` | ✅ |
| `feature-product-carousel.tsx` | Carrousel images produit | ✅ |
| `page-dpp-section-2.tsx` | Assemblage carte + banner + traçabilité | ✅ |
| `page-dpp-section-3.tsx` | Service Ledger conditionnel | ✅ |
| `products/[slug]/page.tsx` | Page produit dynamique | ✅ |


## ✅ Fonctionnalités Complétées

- [x] Routing dynamique pour les pages produits
- [x] Gestion d'état utilisateur via `UserContext` (localStorage)
- [x] Page `/collection` avec grille de produits
- [x] Emplacements vides cliquables vers louisvuitton.com
- [x] Titre personnalisé sur page collection
- [x] Header sticky réutilisable avec contenu personnalisable
- [x] Code carte flouté si non connecté
- [x] Service Ledger masqué si non connecté
- [x] Banner de connexion glassmorphism
- [x] Navigation carte ↔ collection ↔ connexion
- [x] Bouton déconnexion fonctionnel

## 🧹 Codebase (Audit du 18/01/2026)

**Nettoyage effectué :**
- 3 composants custom inutilisés supprimés
- 52 composants UI shadcn supprimés (gardé: button, separator, dialog)
- ~30 dépendances npm retirées
- 13 images inutilisées supprimées

**Dépendances actuelles (essentielles) :**
- next, react, react-dom
- motion (animations)
- @radix-ui (dialog, separator, slot)
- lucide-react (icônes)
- tailwind-merge, class-variance-authority
- next-themes

## 📝 Notes Importantes

- **MVP/Démo** : Pas de vrai backend, simulation localStorage
- **Données fictives** : John Doe pré-rempli pour démo rapide
- **Déconnexion** : `localStorage.clear()` ou bouton sur page collection
- **Animations** : Motion pour la carte 3D et transitions
- **Responsive** : Mobile-first design

## 🚧 Points à Améliorer (Prochaine Session)

### 1. Internationalisation et Traduction
- [ ] Vérifier tous les textes en français
- [ ] Traduire les éléments encore en anglais (UI, messages, labels)
- [ ] Standardiser la langue de l'interface

### 2. Fonctionnalité Transfert de Propriété
- [ ] Ajouter un onglet/bouton "Transférer ma propriété" dans la page collection
- [ ] Ajouter un onglet/bouton "Transférer ma propriété" dans la page produit DPP
- [ ] Créer une page ou pop-up de transfert (modal Dialog)
- [ ] Formulaire de transfert demandant l'email du destinataire
- [ ] Simulation du processus de transfert (MVP/démo)

### 3. Amélioration des Textes et UX
- [ ] Améliorer les textes du bandeau sticky header ("Votre collection", etc.)
- [ ] Réviser tous les textes générés par IA (sections DPP, descriptions)
- [ ] Rendre les textes plus pertinents et alignés avec le ton Louis Vuitton
- [ ] Améliorer le copywriting de la section Service Ledger
- [ ] Réviser les textes de la page account-creation

### 4. Script QR Code
- [ ] Améliorer `python/QR-code_generator.py` pour intégrer une variable produit
- [ ] Générer automatiquement un QR code pour chaque produit
- [ ] Sauvegarder les QR codes dans `/public/products/{slug}/qr-code.png`
- [ ] Permet d'avoir un repo plus sérieux si fouillé (QR codes par produit)

### 5. Bugs Critiques - Fixes Déploiement (À TESTER)
- [ ] **BOUCLE INFINIE:** ✅ `app/page.tsx` redirige `/products/again` au lieu de `/collection`
- [ ] **localStorage SSG:** ✅ Protections `typeof window !== 'undefined'` + try/catch dans `user-context.tsx`
- [ ] **Images cassées:** ✅ Retiré double BASE_PATH - Next.js l'ajoute auto via `next.config.mjs` ligne 4
- [ ] **Zoom carte trop fort:** ✅ Scale réduit 1.5 → 1.4 dans `feature-certificate-card.tsx:270`
- [ ] **Cartes hors viewport:** ✅ Ajouté `px-8` à la grille pour marge latérale (`feature-collection-grid.tsx:39`)

## 🔗 Références

- Framework: `docs/LVMH_Alberthon_DDP-Framework_LAMY_MERET (1).txt`
- Workflow détaillé: `docs/workflow-produit.md`