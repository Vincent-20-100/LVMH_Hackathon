# WORKFLOW PRODUIT : DE L'ANONYME AU PROPRIÉTAIRE

## Vue d'ensemble

Ce document décrit l'état actuel du projet ainsi que le parcours utilisateur cible, depuis la découverte d'un produit jusqu'à l'accès propriétaire avec toutes les fonctionnalités débloquées.

---

## ÉTAT ACTUEL DU PROJET (Après Phase 1)

### Architecture et Fonctionnalités

Le projet a atteint les objectifs de la phase 1. Le parcours utilisateur est maintenant différencié.

#### Pages et Contexte

1.  **`app/page.tsx` (DPP)**: Affiche le produit "Again Bag". Le contenu est maintenant dynamique en fonction de l'état de l'utilisateur.
2.  **`app/account-creation/page.tsx`**: Simule la création de compte et connecte l'utilisateur.
3.  **`app/collection/page.tsx`**: Dashboard de l'utilisateur affichant ses produits.
4.  **`contexts/user-context.tsx`**: Gère l'état de l'utilisateur (`user`, `products`, `isConnected`) via `localStorage`. Contient des données de démo pour les produits.

#### Composants Clés et État

-   **`feature-sticky-header.tsx`**: **Personnalisé**. Affiche "Welcome, {user.firstName}" ou un lien de connexion.
-   **`page-dpp-section-1.tsx`**: **Personnalisé**. Affiche un message de bienvenue si l'utilisateur est propriétaire.
-   **`feature-certificate-card.tsx`**: **Conditionné**. Le code de la carte est déflouté si `isOwner` est `true`.
-   **`page-dpp-section-3.tsx`**: **Conditionné**. Le "Service Ledger" est masqué et remplacé par un CTA si l'utilisateur n'est pas propriétaire.
-   **`feature-collection-grid.tsx`**: **Implémenté**. Affiche une grille statique avec la carte 3D du produit possédé et des placeholders pour les futurs produits.

### Comportement Actuel

Le parcours utilisateur est maintenant fonctionnel et différencié :

1.  **Utilisateur Anonyme :**
    -   Arrive sur la page produit (`/`).
    -   Le header propose de se connecter.
    -   Le code sur la carte Aura est **flouté**.
    -   Le "Service Ledger" est **masqué**, remplacé par un CTA pour s'inscrire.
    -   Aucun message de bienvenue personnalisé n'est affiché.

2.  **Processus de Connexion :**
    -   L'utilisateur clique sur "Login" (header) ou sur le CTA de la section 3.
    -   Il est redirigé vers `/account-creation`.
    -   Après soumission du formulaire, les données (y compris une liste de produits de démo) sont sauvegardées dans `localStorage`.
    -   L'utilisateur est redirigé vers sa page `/collection`.

3.  **Utilisateur Connecté (Propriétaire) :**
    -   La page `/collection` l'accueille et affiche la grille de ses produits.
    -   S'il navigue vers la page du produit "Again Bag" (`/`):
        -   Le header affiche "Welcome, {user.firstName}".
        -   Un message de bienvenue personnalisé s'affiche à côté de l'image du produit.
        -   Le code sur la carte Aura est **déflouté**.
        -   Le "Service Ledger" est **visible**.

### Flow Visuel Actuel

```
┌─────────────────────────────────────────────────────────────┐
│  PAGE PRODUIT (Anonyme)                                      │
│  ├─ Header avec CTA "Login"                                 │
│  ├─ Carte Aura avec code FLOUTÉ                             │
│  ├─ Service Ledger MASQUÉ, CTA visible                      │
│  └─ Pas de personnalisation                                 │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
                   [Clic sur Login / CTA]
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  PAGE CRÉATION COMPTE (/account-creation)                   │
│  ├─ Formulaire pré-rempli                                   │
│  └─ Soumission → localStorage mis à jour                    │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
                    [Redirection vers /collection]
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  PAGE COLLECTION (/collection)                              │
│  ├─ Header "Welcome, {user.firstName}"                      │
│  ├─ Grille de produits (1 carte 3D + placeholders)          │
│  └─ Navigation possible vers la page produit `/`            │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
                  [Navigation vers /]
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  PAGE PRODUIT (Propriétaire)                                │
│  ├─ Header et section 1 personnalisés                       │
│  ├─ Carte Aura avec code DÉFLOUTÉ                           │
│  ├─ Service Ledger VISIBLE                                  │
│  └─ Expérience propriétaire complète                        │
└─────────────────────────────────────────────────────────────┘
```

---

## BACKLOG / AMÉLIORATIONS

Liste des prochaines tâches et améliorations à prévoir.

### Améliorations UX/UI

-   **Améliorer la Grille Collection :**
    -   Afficher plus de cartes placeholders.
    -   Améliorer le texte des placeholders.
    -   Rendre les placeholders plus sombres.
-   **Améliorer le Header de la Collection :**
    -   Réutiliser le `StickyHeader` de la page produit.
    -   Adapter les textes gauche/droite pour le contexte de la collection ("Ma Collection", etc.).
-   **Engagement Utilisateur (Popup) :**
    -   Remplacer le CTA statique du Service Ledger par une pop-up (`Dialog` de shadcn/ui) apparaissant au-dessus de la carte 3D pour les utilisateurs non-connectés.

### Flux de Démonstration

-   **Vérification du floutage :**
    -   Confirmer que la carte est bien floutée avant connexion.
-   **Mode Démo :**
    -   Optionnel : Créer un mode "démo" où la connexion est perdue au rafraîchissement pour faciliter les présentations (en utilisant `sessionStorage` au lieu de `localStorage`).

### Qualité et Finitions

-   **Refondre le `feature-product-carousel`** : Améliorer le carrousel de la page DPP pour une expérience plus immersive.
-   **Tests** : Ajouter des tests unitaires pour les hooks (`useUser`) et composants critiques.
-   **Animations** : Animer l'apparition des placeholders dans la grille de la collection.
