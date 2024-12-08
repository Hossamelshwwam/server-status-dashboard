# User Stories

1. **Story 1: User Registration and Login**

   - **As a** user,
   - **I want to** register with my email and password,
   - **so that I can** securely access my personalized dashboard.

2. **Story 2: View Servers Status**

   - **As a** user,
   - **I want to** see the real-time status of all my servers (e.g., "Up", "Down", "Degraded"),
   - **so that I can** quickly identify any issues.

3. **Story 3: View Detailed Server Information**

   - **As a** user,
   - **I want to** click on a server to view its details (e.g., IP address, response time),
   - **so that I can** diagnose specific problems.

4. **Story 4: Protected Routes**

   - **As a** user,
   - **I want to** be redirected to the login page if I try to access the dashboard without authentication,
   - **so that I can** ensure the security of my data.

5. **Story 5: User-Friendly UI**
   - **As a** user,
   - **I want to** have a simple, responsive, and visually appealing interface,
   - **so that I can** navigate and use the dashboard efficiently.

---

# Critical User Journeys

1. **Sign-Up and Login Journey**

   - The user visits the site and is presented with options to sign up or log in.
   - Upon successful registration or login, the user is redirected to the dashboard.
   - If authentication fails, error messages are displayed, and the user is prompted to try again.

2. **View Servers Status**

   - Once logged in, the user sees a list of servers with visual indicators (color-coded badges for "Up", "Down", etc.).
   - The user can filter or sort servers by name or status for better organization.

3. **View Server Details**

   - The user clicks on a server from the list.
   - A detailed view is displayed, showing server IP address and response time.
   - The user uses this data to identify issues or monitor performance.

4. **Unauthorized Access Handling**
   - If the user tries to access the dashboard without logging in, they are redirected to the login page.
   - After logging in successfully, they can access the dashboard.
