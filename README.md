# Servers Status Dashboard

This project is a **Servers Status Dashboard** that allows users to view the status of their servers over the past 90 days. It provides insights into the server's uptime and performance, enabling quick identification of issues.

---

## Technologies Used

- **Framework:** Next.js
- **Styling:** TailwindCSS, Material UI
- **Form Handling & Validation:** Formik, Yup
- **Authentication:** NextAuth

---

## How to Run the Project

### Prerequisites:

- Node.js installed on your system.

### Steps:

1. Clone the repository from GitHub:
   ```bash
   git clone <repository-link>
   cd <repository-folder>
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser at:
   ```text
   http://localhost:3000
   ```

---

## Design and Implementation Choices

- **Next.js:** Chosen for its ease of use and outstanding performance. It provides server-side rendering and static site generation out-of-the-box, making it ideal for this dashboard.
- **TailwindCSS:** Used for its simplicity and speed in designing responsive UI components.
- **Material UI:** Included for its comprehensive library of pre-built components, which saves development time and ensures a consistent design.
- **Formik & Yup:** Utilized for form handling and validation, offering a smooth and scalable way to manage user inputs.
- **NextAuth:** Provides a seamless authentication mechanism with minimal configuration, ensuring secure user access.

---

## Development Process

1. **Setup:**

   - Initialized the project with Next.js and installed necessary libraries.
   - Configured **TailwindCSS** and **NextAuth**.

2. **Authentication Pages:**

   - Developed `Sign In` and `Sign Up` pages using Material UI components.
   - Integrated authentication with NextAuth to allow users to register and log in.

3. **Dashboard Structure:**

   - Created the structure for the Dashboard.
   - Designed and implemented the **Servers Status** page, ensuring reusability by building components with a single responsibility.

4. **Protected Routes:**
   - Added middleware to secure the dashboard pages and restrict access to authenticated users only.

---

## Deployment

The project is live and hosted on **Vercel**. You can access it here:  
**[Live Demo](vercel-link)**

Source code is available on GitHub:  
**[GitHub Repository](https://github.com/Hossamelshwwam/server-status-dashboard)**

---

## Usage Instructions

1. **Sign Up:**  
   Register using your username, email, and password.

2. **Sign In:**  
   Log in with your registered credentials to access the dashboard.

3. **View Servers:**  
   Navigate to the Servers Status page to view real-time status and historical data for your servers.

---

## Notes

- This project focuses on achieving a clean structure and reusable components.
- Protected routes ensure secure access to user-specific data.
