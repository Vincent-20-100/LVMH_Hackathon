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
└── account-creation/          # Formulaire création compte

components/
├── page-dpp-section-1.tsx     # Hero + Info produit + Carrousel
├── page-dpp-section-2.tsx     # Carte Aura 3D + Traçabilité
├── page-dpp-section-3.tsx     # Aftercare + Service Ledger
├── page-dpp-section-4.tsx     # Section finale
├── feature-certificate-card-v2.tsx  # Carte 3D interactive
├── page-account-creation.tsx  # Form avec animation transition
└── feature-*.tsx              # Composants réutilisables

docs/
├── workflow-produit.md        # 📌 FLOW UTILISATEUR COMPLET
├── PROJECT_CONTEXT.md         # Ce fichier
└── LVMH_Alberthon_*.txt      # Présentation framework DPP
```

## 🔄 Workflow Utilisateur (voir workflow-produit.md)

### État Actuel
- Page DPP unique pour tous
- Code carte flouté pour tous
- Service Ledger visible pour tous ⚠️
- Pas de différenciation anonyme/propriétaire

### Objectif Cible
1. **Anonyme** → Carte floutée, Service Ledger masqué, popup engagement
2. **Connexion** → Form pré-rempli, transition animée
3. **Collection** → Dashboard produits possédés (à créer)
4. **Propriétaire** → Carte défloutée, Service Ledger visible, personnalisation

## 🎨 Produit Focus

**Louis Vuitton "Again Bag"** (M25877)
- Cuir naturel traçable
- Blockchain Aura certifié
- Service Ledger d'entretien
- Carte digitale de propriété 3D

## 🔑 Composants Clés

| Composant | Rôle | État |
|-----------|------|------|
| `feature-certificate-card-v2.tsx` | Carte Aura 3D avec code unique | ✅ Implémenté (flouté) |
| `page-dpp-section-3.tsx` | Service Ledger maintenance | ✅ Visible (à conditionner) |
| `page-account-creation.tsx` | Authentification | ✅ Form prêt (pas de persist) |
| Collection Page | Dashboard utilisateur | ❌ À créer |
| State Management | localStorage auth | ❌ À implémenter |

## 🚀 Prochaines Étapes

1. Implémenter gestion d'état (localStorage)
2. Conditionner affichage Service Ledger
3. Créer page Collection (/collection)
4. Déflouter code carte pour propriétaires
5. Personnaliser header et carrousel

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
