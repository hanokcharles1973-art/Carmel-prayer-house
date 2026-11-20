# Carmel House of Prayer - Website Administration Guide

This guide is designed for anyone tasked with maintaining or transferring the church website. 

## 1. How to Update Content
The website is designed so that almost all text and images are managed in **one single file**. This prevents the need to search through many different folders.

**File Location:** `src/constants.ts`

### To change Ministry Times, Phone Numbers, or Text:
1. Open `src/constants.ts`.
2. Find the section you want to change (e.g., `ministries` array or `pages.home` object).
3. Update the text inside the quotation marks `" "`.
4. Save the file. The website will update automatically.

### To change Images:
1. Upload your new image to the `public/` folder.
2. In `src/constants.ts`, find the image path (e.g., `heroImageUrl`) and update it to the name of your new file (e.g., `"/new-church-photo.jpg"`).

---

## 2. Technical Ownership (Transferability)
To ensure the website can be passed from one person to another easily, follow these "Golden Rules":

### A. Use a Church-Owned Email
**Never** use a personal email address (like `yourname@gmail.com`) to sign up for:
*   Domain Registration (e.g., Namecheap)
*   Hosting (e.g., Vercel)
*   GitHub
*   Google Workspace

**Instead:** Use a generic church email like `office@carmelhouseofprayer.org`. This allows the password to be shared or reset by church leadership if a volunteer leaves.

### B. Documentation Repository
Keep a physical or digital "Church IT Folder" containing:
1.  **Domain Login**: Where the domain was bought and the login details.
2.  **Hosting Login**: Where the code is hosted (Vercel/Netlify).
3.  **GitHub Login**: Access to the source code.
4.  **Instructions**: This guide!
5.  **Future Growth**: See `ADMIN_APP_PLAN.md` for the blueprint of the church leadership portal.

---

## 3. Recommended Tools for Easy Management
If the church grows and you want a way to update the site without touching code at all, I recommend moving to:
*   **Contentful or Sanity (CMS)**: Allows you to type into a "Word-like" interface to update the site.
*   **Firebase**: If you want to manage member lists or prayer requests securely.

---

## 4. Support
If you get stuck, the project uses:
*   **React** (for the structure)
*   **Tailwind CSS** (for the design)
*   **Vite** (for the build system)
