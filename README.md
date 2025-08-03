🔐 Google Login Integration – React + TypeScript
This guide helps you integrate Google OAuth login into your React application using the @react-oauth/google package.

📦 Prerequisites
Node.js & npm installed

A working React project (TypeScript recommended)

✅ Steps to Integrate
1️⃣ Get Google OAuth Credentials
Go to Google Cloud Console.

Create or select a project.

Configure the OAuth consent screen.

Create OAuth 2.0 Client ID credentials.

Set the JavaScript origin to your frontend URL (e.g., http://localhost:5173).

Copy your Google Client ID.

2️⃣ Setup .env File
Create a .env file in your project root.

Add your Google Client ID as an environment variable.

Restart your dev server after editing .env.

3️⃣ Copy main.tsx File
Replace your existing main.tsx file with the one configured for GoogleOAuthProvider using your client ID.

4️⃣ Add SignIn.tsx File
Create a new file inside src/loginPages/.

Paste the SignIn component code that handles the Google login.

This component will handle rendering the Google Login button and show user info after login.

5️⃣ Use the Component in Your App
Import and use the SignIn component in your App.tsx or App.jsx.

🚀 Run Your App
Install dependencies with npm install.

Run the app using npm run dev.

Visit http://localhost:5173 to test the Google login.

📌 Notes
Ensure .env is correctly set at the root level.

Environment variables must start with VITE_ for Vite projects.

Restart the development server after any .env change.

📷 Demo
(Insert GIF or image showing login flow)

💬 License
MIT – Free to use and modify.