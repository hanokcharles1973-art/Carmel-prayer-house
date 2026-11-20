# Deployment Roadmap: Carmel House of Prayer

This document provides a technical roadmap for moving from development in AI Studio to a production-ready environment for both the public website and the future leadership portal.

## Phase 1: Public Website (Current Project)
**Goal:** Make the informational church website live on your primary domain.

### 1. Source Control Setup
- **Export to GitHub**: Use the AI Studio settings to sync this project to a new repository (e.g., `carmel-church-web`).
- **Owner**: Ensure the repository is owned by the church's shared GitHub account.

### 2. Primary Hosting (Vercel Recommended)
- **Connect GitHub**: Import the repository into Vercel.
- **Build Settings**: 
    - Framework: Vite
    - Build Command: `npm run build`
    - Output Directory: `dist`
- **Automatic Deploys**: Any future changes you make in AI Studio and sync to GitHub will automatically update the live site.

### 3. Domain Configuration
- **Primary Domain**: `carmelhouseofprayer.org` (or similar).
- **DNS Records**:
    - `A Record`: Point to Vercel's IP.
    - `CNAME Record`: `www` pointing to `cname.vercel-dns.com`.

---

## Phase 2: Leadership Admin App (Future Project)
**Goal:** A secure, private application for finances and ministry management.

### 1. Infrastructure Setup
- **Subdomain**: `admin.carmelhouseofprayer.org`.
- **Hosting**: Google Cloud Run is ideal for this since it handles the back-end logic (Express) and Database connections natively.

### 2. Database Provisioning
- **Cloud SQL (PostgreSQL)**: 
    - Create a Developer-tier instance.
    - Configure for "Scale-to-Zero" to keep costs low.
- **Firebase**:
    - Enable Firestore for member data and unstructured notes.
    - Enable Authentication for secure leadership login.

### 3. Deployment Pipeline
- **CI/CD**: Set up a GitHub Action to deploy to Cloud Run on every push.
- **Environment Variables**: Store your Database URLs and Firebase Keys securely in the Cloud Run configuration, never in the code.

---

## Phase 3: Handover & Maintenance
- **Credentials Manager**: Use a tool like Bitwarden (Free for individuals/teams) to store all church IT passwords.
- **SSL Certificates**: Both Vercel and Cloud Run provide automated SSL (HTTPS) management.
- **Backup Strategy**: Configure weekly automated backups for the Cloud SQL database via the Google Cloud Console.
