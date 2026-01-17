# WORKFLOW PRODUIT : DE L'ANONYME AU PROPRIÉTAIRE

## Vue d'ensemble

Ce document décrit l'état actuel du projet ainsi que le parcours utilisateur cible, depuis la découverte d'un produit jusqu'à l'accès propriétaire avec toutes les fonctionnalités débloquées.

---

## ÉTAT ACTUEL DU PROJET

### Architecture Existante

Le projet est actuellement structuré autour d'une application Next.js avec les composants suivants :

#### Pages Créées

1. **`app/page.tsx`** - Page principale (Digital Product Passport)
   - Affiche 4 sections principales via les composants PageDPPSection1-4
   - Point d'entrée de l'application

2. **`app/account-creation/page.tsx`** - Page de création de compte
   - Formulaire pré-rempli avec données fictives (John Doe)
   - Transition animée vers la page principale après soumission
   - Accessible via `/account-creation`

#### Composants Principaux

1. **`components/page-dpp-section-1.tsx`** - Hero Section
   - Affichage du produit (Again Bag) avec carrousel d'images
   - Informations produit (référence, modèle, dimensions)
   - **Carrousel de produits complémentaires** (wallets, accessories)
   - Header sticky avec navigation

2. **`components/page-dpp-section-2.tsx`** - Section Carte Aura & Traçabilité
   - **Carte Aura 3D interactive** (`AuraCertificateCard`)
   - Call-to-action "Connect or Create" redirigeant vers `/account-creation`
   - Grille de traçabilité (origine, matériaux, fabrication)

3. **`components/page-dpp-section-3.tsx`** - Aftercare & Service Ledger
   - Section vidéo "Art of Leather Care"
   - **Service Ledger** affichant l'historique d'entretien
   - Services recommandés et disponibles

4. **`components/page-dpp-section-4.tsx`** - Section finale

5. **`components/feature-certificate-card-v2.tsx`** - Carte Aura Interactive
   - Animation 3D au survol (rotation, zoom)
   - **Code unique actuellement flouté** (`blur-[2px] sm:blur-[4px]`)
   - Effet de backdrop blur sur hover
   - Redirection vers Louis Vuitton au clic

6. **`components/page-account-creation.tsx`** - Formulaire de création de compte
   - Formulaire pré-rempli avec données de test
   - Composant `AuraCardTransition` pour l'animation de confirmation
   - Redirection vers `/` après soumission

### Fonctionnalités Actuelles

✅ **Implémenté**
- Page produit complète avec toutes les sections
- Carte Aura 3D interactive avec effets visuels avancés
- Code unique flouté sur la carte
- Page de création de compte fonctionnelle
- Transition animée après création de compte
- Carrousel de produits complémentaires
- Service Ledger visible pour tous les utilisateurs
- Header sticky avec navigation

❌ **Non Implémenté**
- Système de gestion d'état utilisateur (localStorage)
- Affichage conditionnel basé sur l'authentification
- Page Collection (dashboard utilisateur)
- Déflouter le code unique pour les utilisateurs connectés
- Masquer le Service Ledger pour les utilisateurs non connectés
- Personnalisation du header avec le prénom
- Carrousel personnalisé "Vos autres produits"
- Popup d'engagement pour les utilisateurs anonymes

### Structure Actuelle des Fichiers

```
app/
├── page.tsx                           # Page principale DPP
├── account-creation/
│   └── page.tsx                       # Page création de compte
└── layout.tsx                         # Layout global

components/
├── page-dpp-section-1.tsx            # Hero + Product Info
├── page-dpp-section-2.tsx            # Aura Card + Traceability
├── page-dpp-section-3.tsx            # Aftercare + Service Ledger
├── page-dpp-section-4.tsx            # Section finale
├── feature-certificate-card-v2.tsx   # Carte Aura 3D
├── page-account-creation.tsx         # Formulaire de compte
├── feature-product-carousel.tsx      # Carrousel produit
├── feature-sticky-header.tsx         # Header sticky
└── ui/                               # Composants UI réutilisables
```

### Comportement Actuel

Le parcours utilisateur actuel est **linéaire et identique pour tous** :

1. L'utilisateur arrive sur la page produit (`/`)
2. Toutes les informations sont visibles (y compris le Service Ledger)
3. Le code unique sur la carte Aura est flouté
4. L'utilisateur peut cliquer sur "Connect or Create" dans la Section 2
5. Il est redirigé vers `/account-creation`
6. Après soumission du formulaire, une animation de carte apparaît
7. L'utilisateur est redirigé vers `/` (retour à la page produit)
8. **Aucune différence dans l'affichage** (pas de persistance de l'état connecté)

### Flow Visuel Actuel

```
┌─────────────────────────────────────────────────────────────┐
│  PAGE PRODUIT (/)                                            │
│  ├─ Sections 1-4 visibles pour tous                         │
│  ├─ Carte Aura avec code FLOUTÉ                             │
│  ├─ Service Ledger VISIBLE                                  │
│  ├─ Carrousel produits complémentaires                      │
│  └─ CTA "Connect or Create"                                 │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
                   [Clic sur CTA]
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  PAGE CRÉATION COMPTE (/account-creation)                   │
│  ├─ Formulaire pré-rempli (John Doe)                        │
│  ├─ Soumission du formulaire                                │
│  └─ Animation de transition                                 │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
                    [Redirection vers /]
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  PAGE PRODUIT (/)                                            │
│  ❌ AUCUN CHANGEMENT                                         │
│  ├─ Carte toujours FLOUTÉE                                  │
│  ├─ Service Ledger toujours VISIBLE                         │
│  ├─ Pas de personnalisation                                 │
│  └─ Pas de mémorisation de l'état connecté                  │
└─────────────────────────────────────────────────────────────┘
```

### Problèmes à Résoudre

1. **Pas de gestion d'état** : L'application ne mémorise pas si l'utilisateur s'est connecté
2. **Pas de différenciation** : Même affichage pour tous les utilisateurs
3. **Service Ledger accessible** : Les données sensibles sont visibles par tous
4. **Code flouté pour tous** : Même les "propriétaires" ne voient pas le code complet
5. **Pas de page Collection** : Aucun dashboard pour gérer plusieurs produits
6. **Pas de personnalisation** : Le header et les recommandations ne s'adaptent pas

---

## OBJECTIF : WORKFLOW CIBLE

### Vue d'Ensemble du Parcours Cible

L'objectif est de créer un parcours différencié entre utilisateurs anonymes et propriétaires authentifiés, avec une progression claire à travers 4 étapes distinctes.

---

## ÉTAPE 1 : PAGE PRODUIT VIERGE (Utilisateur Non Connecté)

### Visuel Carte
- Affichage de la carte Aura avec le code unique (#F7-RA...) **fortement flouté**
- Design épuré mettant en avant le produit sans divulguer les informations sensibles

### Engagement
- Une **Popup** ou un **bandeau discret** apparaît pour proposer :
  - Création de compte
  - Connexion
  - Revendiquer la propriété du produit

### Contenu Restreint
- La section **"Service Ledger"** est totalement masquée :
  - Historique d'entretien
  - Réparations
  - Informations blockchain
  - Traçabilité complète

### Recommandations
- Affichage d'un **carrousel de "Produits Suggérés"**
- Catalogue public standard
- Produits similaires ou complémentaires

---

## ÉTAPE 2 : CONNEXION / CRÉATION DE COMPTE (Fake MVP)

### Formulaire
- Page de création de compte pré-remplie avec des données fictives ("John Doe")
- Interface simple et intuitive

### Collecte de Données
- Récupération du **prénom** et des informations via `localStorage`
- Simulation d'une authentification complète

### Transition Visuelle
- **Animation de la carte** :
  - Rotation 3D
  - Zoom progressif
  - Confirmation visuelle de l'authentification réussie

---

## ÉTAPE 3 : PAGE "COLLECTION" (Le Hub Utilisateur)

### Dashboard Personnel
- **Nouvelle page** affichant la galerie des produits possédés
- Vue d'ensemble de tous les articles de l'utilisateur

### Interactivité
- Clic sur une carte de produit spécifique
- Redirection vers la **version "Propriétaire"** de la page produit correspondante

### Organisation
- Affichage en grille ou liste
- Filtres et options de tri

---

## ÉTAPE 4 : PAGE PRODUIT DÉBLOQUÉE (Utilisateur Connecté & Propriétaire)

### Visuel Carte
- Le code unique est désormais **déflouté** et parfaitement lisible
- Accès complet aux informations du produit

### Accès aux Données
- La section **"Service Ledger"** apparaît avec :
  - Transparence totale sur la vie du produit
  - Historique complet des interventions
  - Traçabilité blockchain
  - Certificats et garanties

### Personnalisation

#### Header
- Affichage personnalisé : **"Bienvenue, [Prénom]"**
- Expérience utilisateur adaptée

#### Carrousel de Recommandations
Au lieu de suggestions d'achat génériques, affichage de :
- **"Vos autres produits"** de la collection personnelle
- Accessoires compatibles avec l'objet actuel
- Services recommandés pour ce produit spécifique

---

## Notes Techniques pour le MVP

### Technologies Utilisées
- **localStorage** : Simulation de la base de données utilisateur
- Stockage temporaire des données de session
- Pas de backend réel nécessaire pour la démo

### Implémentation Conditionnelle
Dans `page.tsx`, utilisation de conditions pour afficher/masquer les composants :

```typescript
if (userConnected) {
  // Afficher ServiceLedger
  // Afficher CarouselSuggestions personnalisé
  // Déflouter le code unique
  // Personnaliser le header
} else {
  // Masquer ServiceLedger
  // Afficher suggestions génériques
  // Flouter le code unique
  // Afficher popup d'engagement
}
```

### Composants Clés à Gérer
- `ServiceLedger` : Affichage conditionnel
- `CarouselSuggestions` : Contenu dynamique selon l'état de connexion
- `Feature-certificate-card-v2` : Gestion du floutage du code
- `Page-account-creation` : Formulaire de connexion/création

---

## Flow Visuel du Workflow Cible

```
┌─────────────────────────────────────────────────────────────┐
│  ÉTAPE 1 : ANONYME (/)                                      │
│  ├─ Carte floutée                                           │
│  ├─ Popup engagement                                        │
│  ├─ Service Ledger MASQUÉ ⚠️                                │
│  └─ Suggestions génériques                                  │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
                   [CONNEXION/CRÉATION]
                   (/account-creation)
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  ÉTAPE 3 : PAGE COLLECTION (/collection)                    │
│  ├─ Dashboard personnel                                     │
│  ├─ Galerie de produits possédés                            │
│  ├─ Header "Bienvenue, [Prénom]"                            │
│  └─ Navigation vers produit spécifique                      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
                  [Clic sur un produit]
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  ÉTAPE 4 : PROPRIÉTAIRE (/)                                 │
│  ├─ Carte DÉFLOUTÉE ✅                                       │
│  ├─ Service Ledger VISIBLE ✅                                │
│  ├─ Header personnalisé "Bienvenue, [Prénom]"              │
│  └─ Carrousel "Vos autres produits"                         │
└─────────────────────────────────────────────────────────────┘
```

### Tableau Comparatif : Actuel vs Cible

| Fonctionnalité | État Actuel | État Cible |
|----------------|-------------|------------|
| **Code unique sur carte** | Flouté pour tous | Flouté (anonyme) → Visible (propriétaire) |
| **Service Ledger** | Visible pour tous ⚠️ | Masqué (anonyme) → Visible (propriétaire) |
| **Header** | Générique | Personnalisé avec prénom |
| **Carrousel** | Produits complémentaires | Produits complémentaires (anonyme) → Vos produits (propriétaire) |
| **Page Collection** | ❌ N'existe pas | ✅ Dashboard avec galerie |
| **Gestion d'état** | ❌ Aucune | ✅ localStorage |
| **Popup engagement** | ❌ Absente | ✅ Pour inciter à se connecter |
| **Différenciation UX** | ❌ Identique pour tous | ✅ Expérience adaptée au statut |

---

## Prochaines Étapes

1. **Implémentation du système de connexion** avec localStorage
2. **Création de la page Collection** (dashboard utilisateur)
3. **Ajout des conditions d'affichage** dans les composants existants
4. **Développement des animations** de transition
5. **Tests du flow complet** de bout en bout
