# LVMH Digital Product Passport

A project for the LVMH Hackathon at Albert School, aiming to transform the Digital Product Passport (DPP) from a regulatory requirement into a powerful tool for building trust, prestige, and long-term client engagement.

## ✨ Project Vision

Our vision is to transform the mandatory disclosure of the Digital Product Passport into a powerful lever for trust, prestige, and long-term client engagement for Louis Vuitton. We've created a comprehensive framework and strategic roadmap that integrates technical architecture with a premium user experience, turning regulatory mandates into brand opportunities.

## 🎯 Core Concept: The DPP Emotion Funnel

The user experience is designed around a four-stage emotional journey:

1.  **Attraction:** Immersive product storytelling to capture emotional attention.
2.  **Confidence:** A verifiable Certificate of Authenticity, anchored on the Aura Blockchain.
3.  **Empowerment:** A lifelong care and longevity hub, with aftercare tutorials and service information.
4.  **Serenity:** Transparent and compliant regulatory information.

This funnel is designed to seamlessly transition the client from subconscious desire to conscious trust.

## 🚀 Technical Architecture

The project is built on a modern, robust, and scalable technical stack:

-   **Frontend:** Next.js 16, React 19, TypeScript
-   **Styling:** TailwindCSS 4, Framer Motion for animations
-   **UI Components:** Radix UI
-   **Blockchain:** Aura Blockchain for product authenticity
-   **Authentication:** A simplified demo using localStorage

The DPP framework follows a detailed flow, from the initial scan to the final ownership certification:

```mermaid
graph TD
    subgraph User Interaction
        A[User scans NFC chip with phone] --> B{Phone opens URL<br>/products/{UID}};
    end

    subgraph Frontend: Public View
        B --> C[DPP Page Loads<br>UID is cached];
        C --> D(Displays Public Product Info<br>+<br>CTA: 'Unlock Certificate');
    end

    subgraph Authentication
        D -- User Clicks --> E[Login/Register Form];
        E -- On Success --> F(User is now logged in<br>CustomerID is available);
    end

    subgraph Backend & Blockchain (Simulated)
        F --> G{Frontend sends:<br>- UID (from cache)<br>- CustomerID<br>- New CertificateID};
        G --> H[Backend links UID to CustomerID];
        H --> I[Backend writes transaction to<br>Aura Blockchain];
        I --> J(Returns Success);
    end

    subgraph Frontend: Private View
        J --> K[Frontend updates User Context<br>with new product];
        K --> L[User is redirected to /collection page];
        L --> M[Owned Product Card is now visible];
        M -- Click --> N(View Owned DPP<br>Certificate is unblurred);
    end

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#bbf,stroke:#333,stroke-width:2px
    style H fill:#c2f0c2,stroke:#333,stroke-width:2px
    style I fill:#c2f0c2,stroke:#333,stroke-width:2px
    style M fill:#f9f,stroke:#333,stroke-width:2px
```

## 📂 Project Structure

The repository is organized as follows:

```
app/
├── page.tsx                    # Redirects to /collection
├── products/[slug]/page.tsx    # Dynamic DPP page for each product
├── account-creation/           # Account creation form
└── collection/                 # User's product collection dashboard

components/
├── page-dpp-section-[1-4].tsx  # The four sections of the DPP page
├── feature-certificate-card-v3.tsx   # Interactive 3D certificate card
├── feature-collection-grid.tsx       # Grid of products in the user's collection
└── ...                         # Other reusable components

contexts/
└── user-context.tsx            # Manages user state and authentication

lib/
└── products.ts                 # Product data and helper functions
```

## 🔧 User Flow

1.  **Anonymous Visitor:** Lands on the site and is redirected to the `/collection` page. If not logged in, they are prompted to create an account.
2.  **Account Creation:** A simple form (pre-filled for demo purposes) allows the user to create an account.
3.  **Collection Page:** The user sees their collection of products. They can click on a product to view its DPP.
4.  **Product Owner on DPP Page:** When a logged-in user views a DPP page, they see the full details, including the unblurred certificate number and access to the service ledger.

## 💡 The Key Differentiator: Invitation-Only Events

By linking a product's unique ID to a user's account, we can organize exclusive, invitation-only events for product owners. This reinforces the brand's prestige and drives customer lifetime value.

## 🌐 Deployment

This project is designed to be deployed as a static site on **GitHub Pages**. No complex installation or build process is required. The repository can be cloned and the `out` directory can be served statically.
