# Blueprint for Church Admin Application

This document outlines the architecture and setup for the **Carmel House of Prayer Admin App**, which will be built as a separate project to manage finances, membership, and ministry details.

## 1. Architecture Overview
- **Type**: Full-stack Web Application (React + Express).
- **Domain**: `admin.carmelhouseofprayer.org` (Subdomain of the main site).
- **Hosting**: Google Cloud Run or Vercel (connected to a separate GitHub repo).

## 2. Secure Authentication
To ensure only church leadership can access this app:
- **Provider**: Firebase Authentication.
- **Method**: Google Sign-In restricted to the `@carmelhouseofprayer.org` domain.
- **Setup**: In the new project, we will configure Firebase to "Allow only specific domains" or check the email suffix in the code.

## 3. Database Strategy
- **Finance & Accounts**: Use **Cloud SQL (PostgreSQL)**. 
    - *Why?* Financial data is relational (Transactions linked to Categories, linked to Dates). SQL ensures data integrity and accurate reporting.
- **Ministry Logs & Media**: Use **Firebase Firestore**.
    - *Why?* Great for unstructured data like prayer requests, ministry notes, and member directories.

## 4. Key Modules to Build
1.  **Dashboard**: Quick overview of weekly attendance and monthly collections.
2.  **Finance Tracker**: 
    - Income (Offerings, Tithes, Donations).
    - Expenses (Maintenance, Charity, Events).
    - Generate PDF monthly reports.
3.  **Member Directory**: Secure database of church members and their contact details.
4.  **Ministry Scheduler**: Assign volunteers/speakers for upcoming meetings.

## 5. Security & Privacy
- **Role-Based Access**:
    - *Admin*: Can see finances and delete records.
    - *Ministry Lead*: Can update schedules but not see financial details.
- **Data Privacy**: All data is encrypted and accessible only to verified church leadership emails.

## 6. Next Steps (When ready to start)
1.  Create a new project in AI Studio.
2.  Enable **Cloud SQL (PostgreSQL)** and **Firebase Auth**.
3.  Implement the Login page first to secure the app.
4.  Build the Finance module as the primary functional tool.
