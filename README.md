# 🔐 **Google Login Integration – React + TypeScript**

This guide walks you through integrating **Google OAuth login** into your React application using `@react-oauth/google` and `jwt-decode`.

---

## 📦 **Prerequisites**
- **Node.js** and **npm/yarn** installed
- A **React + TypeScript** project set up (**Vite** is recommended)

---

## ✅ **Steps to Integrate**

### 1️⃣ **Install Required Packages**
- `@react-oauth/google`: Enables Google OAuth integration
- `jwt-decode`: Decodes the JWT token returned by Google

_Use either **npm** or **yarn** to install them before starting the setup._

---

### 2️⃣ **Get Google OAuth Credentials**
- Visit **Google Cloud Console**
- **Create or select a project**
- **Configure the OAuth consent screen**
- **Create OAuth 2.0 Client ID credentials**
- Set **Authorized JavaScript origins** (e.g., `http://localhost:5173`)
- **Copy your Google Client ID**

---

### 3️⃣ **Setup `.env` File**
- **Create a `.env` file** in the root of your project
- **Store your Google Client ID** as an environment variable
- **Restart the dev server** after setting this

> **Note:** Use the `VITE_` prefix for environment variables if you're using Vite.

---

### 4️⃣ **Replace `main.tsx`**
- Replace your existing `main.tsx` with the one that wraps your app in **GoogleOAuthProvider**
- This ensures that all children components can access **Google Login context**

---

### 5️⃣ **Add `SignIn.tsx` Component**
- **Create a file** inside `src/loginPages/`
- Paste the Google login component that:
    - **Renders the login button**
    - **Handles success and error callbacks**
    - **Decodes the token using `jwt-decode`**
    - Optionally, **sends the token to your backend** for authentication

---

### 6️⃣ **Use the `SignIn` Component in Your App**
- **Import the `SignIn` component**
- Use it inside your `App.tsx` or any relevant page or route

---

### 7️⃣ **Test Your App**
- Run `npm run dev` or `yarn dev`
- Open `http://localhost:5173`
- Use the **Google login button** to authenticate

---

## 🧪 **Backend API (Optional)**
If your app communicates with a backend:
- **Send the credential token to the backend**
- Backend **verifies token** using Google’s `google-auth-library`
- **Create your own app-specific JWT** and return it to frontend

---

## 📌 **Notes**
- **Always keep your `.env` file private**
- **Client IDs are safe to expose** in the frontend, but secrets must stay on the server
- You can **customize the login button appearance and behavior**

---

## 🛡 **License**
**MIT** – Use, share, or modify freely