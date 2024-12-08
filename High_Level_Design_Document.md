# High-Level Design Document

## 1. System Overview

The Servers Status Dashboard is a web-based application built with Next.js. It allows users to monitor their servers' health and performance. Key functionalities include authentication, real-time server monitoring, and detailed server insights.

---

## 2. Architecture

- **Frontend:** Built with Next.js for SSR/SSG, styled with TailwindCSS and Material UI.
- **Authentication:** Handled using NextAuth for secure and scalable user management.
- **Data Fetching:** Uses static data to simulate server statuses.

---

## 3. Key Components

- **Authentication Pages:** Sign-up and login forms built with Formik, integrated with NextAuth.
- **Dashboard Page:** Displays an overview of all servers, with reusable components for visual indicators and server cards.
- **Server Details Page:** Provides a detailed view of each server's metrics.
- **Middleware:** Ensures protected routes by verifying user authentication before allowing access to dashboard pages.

---

## 4. User Flow

1. **Authentication:**

   - User registers or logs in.
   - Successful authentication redirects to the dashboard.

2. **Dashboard Access:**

   - User sees a list of servers with their statuses.
   - Clicks on a server to view its details.

3. **Protected Routes:**
   - Middleware restricts access to the dashboard for unauthenticated users.

---

## 5. Deployment and Hosting

- The app is deployed on **Vercel** for fast and reliable hosting.
- GitHub is used for source control and collaboration.
