# LVMH Digital Product Passport

A project for the LVMH Hackathon at Albert School, aiming to transform the Digital Product Passport (DPP) from a regulatory requirement into a powerful tool for building trust, prestige, and long-term client engagement.

## ✨ Project Vision

Our vision is to transform the mandatory disclosure of the Digital Product Passport into a powerful lever for trust, prestige, and long-term client engagement for Louis Vuitton. We've created a comprehensive framework and strategic roadmap that integrates technical architecture with a premium user experience, turning regulatory mandates into brand opportunities.

## 🎯 Core Concept: Emotional Encrage

The user experience is meticulously crafted around a four-stage emotional journey, designed not just to inform, but to deeply anchor the client's connection with the product and the Maison:

1.  **Attraction:** Immersive product storytelling, designed to capture immediate emotional attention through high-fidelity luxury references.
2.  **Confidence:** Instant and verifiable proof of authenticity via the Aura Blockchain, transforming storytelling into "story-proving" and building profound trust.
3.  **Empowerment:** A lifelong care and longevity hub, providing high-end maintenance tutorials and certified service directories, reinforcing product durability and deepening client relationship.
4.  **Serenity:** Transparent and compliant regulatory information, positioned to signal excellence and transparency without disrupting the initial emotional spark.

This emotional journey is carefully planned to seamlessly transition the client from subconscious desire to conscious trust, fostering a lasting bond.

### Personal Collection 
Beyond the seamless flow, user satisfaction is elevated by a unique new feature: a personal collection of high-fidelity 3D authenticity certification cards. This digital showcase not only fosters a strong sense of exclusivity and personalization but also subtly cultivates a desire to expand and complete the collection, a feeling powerfully reinforced by the presence of artfully presented empty slots.

## 💡 The Key Differentiator: Invitation-Only Events

By linking a product's unique ID to a user's account, we can organize exclusive, invitation-only events for product owners. This reinforces the brand's prestige and drives customer lifetime value.

## ⬇️​ User flow and backend orchestration  

1.  **Anonymous Visitor:** Lands on the site and is redirected to the `/collection` page. If not logged in, they are prompted to create an account.
2.  **Account Creation:** A simple form (pre-filled for demo purposes) allows the user to create an account.
3.  **Collection Page:** The user sees their collection of products. They can click on a product to view its DPP.
4.  **Product Owner on DPP Page:** When a logged-in user views a DPP page, they see the full details, including the unblurred certificate number and access to the service ledger.
6. **Transfer of ownership:** A logged-in user can initiate the transfer of one of their authenticity certificates to another user. The backend system will carry out the ownership change, including the corresponding update on the blockchain.

The DPP framework follows a detailed flow, from the initial scan to the final ownership certification:

```mermaid
graph TD
    A[User scans<br>the NFC chip] --> B[That opens the<br>public product page] 
    B --> C["The page shows<br>Storytelling, details<br>and a login button"]
    C --> D["User clicks on<br>the login button"]
    D --> E["User logs in or<br>creates an account"]
    A --> I[UID is stored<br>in cache]
    I --> F
    E --> F["Product UID & customer ID<br>are sent to backend"]
    F --> G[Backend links IDs,<br>creates Certificate ID &<br>writes on Aura Blockchain]
    G --> H[The certified card<br>appears in the<br>user collection]
    G --> J
    E --> H
    J --> F
    H --> J[The user transfer his card<br>to another user]

    %% ──────────────────────────────────────────────
    %% Styles
    classDef public    fill:#d1fae5,stroke:#059669,stroke-width:2.5px
    classDef user      fill:#fef3c7,stroke:#d97706,stroke-width:2.5px
    classDef backend   fill:#e9d5ff,stroke:#b95cdb,stroke-width:2.5px
    classDef newuser   fill:#c3d1f7,stroke:#2c5de6,stroke-width:2.5px

    class B,C public
    class A,D,E,H user
    class F,G,I backend
    class J newuser

    %% ──────────────────────────────────────────────
    %% user flow = orange     /     backend flow = violet
    linkStyle 0,1,2,3,10 stroke:#d97706,stroke-width:2.5px
    linkStyle 4,5,6,7,8,9   stroke:#b95cdb,stroke-width:2.5px
    linkStyle 11,12        stroke:#2c5de6,stroke-width:2.5px
```
```mermaid
graph TD
    P[Public steps]:::public 
    U[User flow]:::user   
    K[Backend flow]:::backend
    L[New user transfer]:::newuser

    %% Styles
    classDef public    fill:#d1fae5,stroke:#059669,stroke-width:2.5px
    classDef user      fill:#fef3c7,stroke:#d97706,stroke-width:2.5px
    classDef backend   fill:#e9d5ff,stroke:#7c3aed,stroke-width:2.5px
    classDef newuser   fill:#c3d1f7,stroke:#2c5de6,stroke-width:2.5px
```

## 🚀 Technical Architecture

The project is built on a modern, robust, and scalable technical stack:

-   **Frontend:** Next.js 16, React 19, TypeScript
-   **Styling:** TailwindCSS 4, Framer Motion for animations
-   **UI Components:** Radix UI
-   **Blockchain:** Aura Blockchain for product authenticity
-   **Authentication:** A simplified demo using localStorage
    
## 🏗️ App Architecture

The application is engineered for high scalability and responsiveness, built with a modular approach to seamlessly manage a diverse range of products. Its design emphasizes adaptability, allowing for the effortless integration of new product lines. To extend the product catalog, one simply needs to place the new product's assets into the `public/products` directory and update the product data within `lib/products.ts`. This architecture ensures the platform can readily evolve and accommodate Louis Vuitton's expanding portfolio.

## 📂 Project Structure   

The repository is organized as follows:

```
.
├── public/                       # Static assets served directly
│   └── products/                 # Product-specific images (organized by slug)
│       └── [product-slug]/       # Directory for each product's images (e.g., front.avif, side.avif)
├── app/                          # Next.js App Router root
│   ├── page.tsx                  # Root page, redirects to /collection
│   ├── products/[slug]/page.tsx  # Dynamic route for individual Digital Product Passports
│   ├── account-creation/page.tsx # User account creation/login form
│   └── collection/page.tsx       # User's personalized product collection dashboard
├── components/                   # Reusable UI components
│   ├── page-dpp-section-[1-4].tsx  # Modular sections composing the DPP page
│   ├── feature-certificate-card-v3.tsx   # Interactive 3D product certificate component
│   ├── feature-collection-grid.tsx       # Displays user's product collection and empty slots
│   └── ...                       # Other shared features and UI elements
├── contexts/                     # React Context providers for global state
│   └── user-context.tsx          # Manages user authentication and product ownership state
├── lib/                          # Utility functions and data
│   └── products.ts               # Product data definitions and access helpers (e.g., getProductBySlug)
└── docs/                         # Project documentation and resources
    ├── PROJECT_CONTEXT.md        # Comprehensive project overview
    └── ...                       # Other documentation files
```

## 🌐 Deployment

This project is designed to be deployed as a static site on **GitHub Pages**. No complex installation or build process is required. The repository can be cloned and the `out` directory can be served statically.

[---> ACCESS TO THE DEPLOYED WEBSITE HERE <---](https://vincent-20-100.github.io/LVMH_Hackathon/)