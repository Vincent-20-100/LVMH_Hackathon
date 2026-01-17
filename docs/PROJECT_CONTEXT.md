# LVMH Digital Product Passport - Contexte Projet

## 🎯 Intention du Projet

**Hackathon LVMH Alberthon** - Transformer l'obligation réglementaire du Digital Product Passport (DPP) en un **levier de prestige, confiance et engagement client long-terme** pour Louis Vuitton.

## 🏗️ Architecture Technique

### Stack
- **Frontend**: Next.js 16 + React 19 + TypeScript
- **Styling**: TailwindCSS 4 + Framer Motion (animations 3D)
- **UI Components**: Radix UI + shadcn/ui
- **Blockchain**: Aura Blockchain (pour authenticité)
- **Auth**: localStorage (MVP/démo)

### Framework DPP
```
NFC Chip → Aura Blockchain → Database → DPP Page Dynamique
```

## 📁 Structure du Projet

```
app/
├── page.tsx                    # DPP Page (4 sections)
├── account-creation/          # Formulaire création compte
└── collection/                # 📌 Page Collection (dashboard user)

components/
├── page-dpp-section-1.tsx     # Hero + Info produit + Carrousel
├── page-dpp-section-2.tsx     # Carte Aura 3D + Traçabilité
├── page-dpp-section-3.tsx     # Aftercare + Service Ledger
├── page-dpp-section-4.tsx     # Section finale
├── feature-certificate-card-v2.tsx  # Carte 3D interactive
├── page-account-creation.tsx  # Form connecté au UserContext
└── feature-*.tsx              # Composants réutilisables

contexts/
└── user-context.tsx           # 📌 Gestion état utilisateur (localStorage)

docs/
├── workflow-produit.md        # 📌 FLOW UTILISATEUR COMPLET
├── PROJECT_CONTEXT.md         # Ce fichier
└── LVMH_Alberthon_*.txt      # Présentation framework DPP
```

## 🔄 Workflow Utilisateur (voir workflow-produit.md)

### État Actuel
- ✅ Gestion d'état utilisateur via `UserContext` (localStorage)
- ✅ Page `/collection` créée et fonctionnelle avec grille de produits
- ✅ Formulaire connecté au context → redirige vers `/collection`
- ✅ Liste de produits ajoutée au `UserContext` avec données démo
- ✅ Code carte déflouté pour les propriétaires (`feature-certificate-card-v2.tsx`)
- ✅ Service Ledger masqué pour les non-propriétaires (`page-dpp-section-3.tsx`)
- ✅ Header et page DPP personnalisés pour les utilisateurs connectés

### Objectif Cible
1. **Anonyme** → Carte floutée, Service Ledger masqué, popup engagement ✅
2. **Connexion** → Form pré-rempli ✅, redirection vers Collection ✅
3. **Collection** → Dashboard avec grille de produits (MVP) ✅
4. **Propriétaire** → Carte défloutée, Service Ledger visible, personnalisation ✅

## 🎨 Produit Focus

**Louis Vuitton "Again Bag"** (M25877)
- Cuir naturel traçable
- Blockchain Aura certifié
- Service Ledger d'entretien
- Carte digitale de propriété 3D

## 🔑 Composants Clés

| Composant | Rôle | État |
|-----------|------|------|
| `contexts/user-context.tsx` | Gestion état user (localStorage) | ✅ Implémenté |
| `app/collection/page.tsx` | Dashboard utilisateur | ✅ Grille de produits |
| `page-account-creation.tsx` | Authentification | ✅ Connecté au context |
| `feature-certificate-card-v2.tsx` | Carte Aura 3D avec code unique | ✅ Conditionné |
| `page-dpp-section-3.tsx` | Service Ledger maintenance | ✅ Conditionné |
| `feature-collection-grid.tsx`| Grille des produits de la collection | ✅ Implémenté (MVP) |
| `feature-sticky-header.tsx` | Header personalisé | ✅ Implémenté |

## 🚀 Prochaines Étapes

**Phase 1 (Terminée)**
1. ~~Implémenter gestion d'état (localStorage)~~ ✅
2. ~~Créer page Collection (/collection)~~ ✅
3. ~~Ajouter liste de produits au context~~ ✅
4. ~~Créer carrousel 3D de produits~~ ✅ (remplacé par une grille)
5. ~~Conditionner affichage Service Ledger~~ ✅
6. ~~Déflouter code carte pour propriétaires~~ ✅
7. ~~Personnaliser header et carrousel sur page DPP~~ ✅

**Backlog / Améliorations**
- **Améliorer la Grille Collection :**
  - Afficher plus de cartes placeholders.
  - Améliorer le texte des placeholders.
  - Rendre les placeholders plus sombres.
- **Améliorer le Header de la Collection :**
  - Réutiliser le `StickyHeader` de la page produit.
  - Adapter les textes gauche/droite pour le contexte de la collection.
- **Flux de Démonstration :**
  - Vérifier que la carte est bien floutée avant connexion.
  - Optionnel : Créer un mode "démo" où la connexion est perdue au rafraîchissement pour faciliter les présentations.
- **Engagement Utilisateur :**
  - Remplacer le CTA statique du Service Ledger par une pop-up (`Dialog`) apparaissant au-dessus de la carte 3D pour les utilisateurs non-connectés.


## 📝 Notes Importantes

- **MVP/Démo** : Pas de vrai backend, simulation localStorage
- **Données fictives** : John Doe pré-rempli pour démo rapide
- **Sécurité actuelle** : Service Ledger accessible à tous (à corriger)
- **Animations** : 3D avec Motion (CometCard), transitions fluides
- **Responsive** : Mobile-first design

## 🔗 Références

- Produit: [Again Bag M25877](https://fr.louisvuitton.com/fra-fr/produits/sac-again-monogram-nvprod6550038v/M25877)
- Framework: `docs/LVMH_Alberthon_DDP-Framework_LAMY_MERET (1).txt`
- Workflow détaillé: `docs/workflow-produit.md`
