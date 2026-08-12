# SNR Portail — Société Nationale de Recouvrement

> Prototype de portail web moderne, dynamique et responsive pour la SNR (Sénégal)

## Contexte

Ce projet est une proposition de refonte du site institutionnel [snr.gouv.sn](https://snr.gouv.sn), conçue pour démontrer une vision moderne de la transformation digitale de la SNR dans le cadre d'un poste de **Directeur des Systèmes d'Information (DSI)**.

## Stack technique

| Technologie | Rôle |
|---|---|
| **Next.js 15** (App Router) | Framework React — SSR, SEO, performance |
| **TypeScript** | Typage statique, maintenabilité |
| **Tailwind CSS** | Design responsive mobile-first |
| **Framer Motion** | Animations fluides et micro-interactions |
| **Lucide React** | Iconographie moderne et cohérente |

## Fonctionnalités du prototype

- Hero animé avec statistiques clés
- Navigation responsive avec menus déroulants
- Section services (6 pôles métiers)
- Fil d'actualités avec catégorisation
- Catalogue d'immeubles (vente / location)
- Mot du Directeur Général + historique des DG
- Documenthèque téléchargeable
- Médiathèque en grille masonry
- Formulaire de contact interactif
- Design aux couleurs institutionnelles (vert/or Sénégal)
- Accessibilité (skip link, aria-labels, contraste)

## Démarrage rapide

```bash
# Prérequis : Node.js 18+ et npm
cd snr-portail
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Architecture cible (production)

```
┌─────────────────────────────────────────────────┐
│                  Frontend (Next.js)              │
│  Pages statiques (SSG) + Pages dynamiques (SSR) │
└────────────────────┬────────────────────────────┘
                     │ REST / GraphQL
┌────────────────────▼────────────────────────────┐
│              API Backend (NestJS)                │
│  Auth · CMS · GED · E-Services · Notifications  │
└────────────────────┬────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────┐
│           Base de données (PostgreSQL)           │
│  Contenus · Utilisateurs · Dossiers · Biens     │
└─────────────────────────────────────────────────┘
```

## Roadmap proposée pour la SNR

### Phase 1 — Fondations (M1-M3)
- Audit du site existant et recensement des contenus
- Mise en place de l'infrastructure (hébergement souverain)
- CMS headless (Strapi ou Directus) pour l'autonomie éditoriale
- Migration des contenus existants

### Phase 2 — E-Services (M4-M6)
- Portail usagers avec authentification (Connect Sénégal)
- Demande d'attestations en ligne
- Suivi de dossiers de recouvrement
- Consultation des avis de vente

### Phase 3 — Intelligence (M7-M12)
- Tableau de bord décisionnel (Power BI / Metabase)
- Chatbot d'assistance aux usagers
- Notifications SMS/email automatiques
- Application mobile (PWA)

## Structure du projet

```
snr-portail/
├── src/
│   ├── app/              # Pages Next.js (App Router)
│   ├── components/
│   │   ├── layout/       # Header, Footer
│   │   └── sections/     # Sections de la page d'accueil
│   ├── data/             # Contenus et données mock
│   ├── lib/              # Utilitaires
│   └── types/            # Types TypeScript
├── public/               # Assets statiques
├── tailwind.config.ts
└── package.json
```

## Déploiement en ligne (démo DG)

Le build production a été validé (`npm run build` ✓). Déploiement recommandé sur **Vercel** (gratuit, optimisé Next.js).

### Option A — Vercel CLI (5 minutes)

```bash
cd snr-portail
npm install          # si pas déjà fait
npx vercel login     # connexion email/GitHub
npx vercel           # déploiement preview
npx vercel --prod    # URL de production permanente
```

URL obtenue : `https://snr-portail-xxxxx.vercel.app` (personnalisable).

### Option B — Vercel via GitHub (recommandé pour suivi)

1. Créer un dépôt GitHub `snr-portail` (privé recommandé pour une démo DG)
2. Pousser le code :
   ```bash
   git add .
   git commit -m "Prototype portail SNR — démo DG"
   git remote add origin https://github.com/VOTRE-COMPTE/snr-portail.git
   git push -u origin main
   ```
3. Aller sur [vercel.com/new](https://vercel.com/new) → Import GitHub → sélectionner le repo
4. Cliquer **Deploy** (aucune config supplémentaire requise)

### Option C — Netlify (alternative)

1. [app.netlify.com](https://app.netlify.com) → Add new site → Import from Git
2. Build command : `npm run build`
3. Publish directory : `.next` (ou laisser Netlify détecter Next.js)

### Présentation au DG

- Envoyer l’URL par email ou WhatsApp
- Tester sur mobile avant la présentation (site responsive)
- Prévoir 2–3 minutes de démo : slider → services → immeubles → e-services
- Mentionner : *« Prototype de refonte — non officiel »*

### Personnaliser l’URL

Dans Vercel → Project Settings → Domains :
- `snr-portail-demo.vercel.app` (gratuit)
- Ou sous-domaine institutionnel si DNS disponible

## Auteur

Projet réalisé dans le cadre d'une candidature au poste de DSI — SNR, République du Sénégal.
