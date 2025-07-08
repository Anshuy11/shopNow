🛒 ShopNow –  E-commerce App (Link - https://shop-now-chi.vercel.app/)
ShopNow is a modern frontend-heavy e-commerce application focused on providing users with a fast and seamless shopping experience. This project is built using Next.js and Tailwind CSS, with Redux for state management and localStorage for cart persistence and dual theme with the help of context API.


🧠 Tech Stack

| Tech              | Usage                      |
| ----------------- | -------------------------- |
| **Next.js**       | Framework (SSR + Routing)  |
| **React.js**      | UI Logic                   |
| **Tailwind CSS**  | Styling Framework          |
| **Redux Toolkit** | State Management           |
| **localStorage**  | Cart Persistence           |
| **Razorpay**      | Payment Gateway (Upcoming) |
| **MongoDB**       | Database (Planned)         |
| **Express.js**    | Backend API (Planned)      |


📁 Folder Structure (Frontend)

## 📁 Folder Structure

- **components/**
  - `Header.jsx` – App header
  - `Footer.jsx` – Footer section
  - `Layout.jsx` – Common layout wrapper
  - `Loader.jsx` – Loading spinner
  - `CartDataStoreInLocalStorage.jsx` – Handles localStorage logic
  - `GlobalSearch.jsx` – Global search bar
  - `PathBackButton.jsx` – Go back button(Back Routing)

- **pages/**
  - `index.js` – Homepage
  - `products/index.js` – Product listing page
  - `products/[id].js` – Product detail page
  - `theme_context/` – Context API for dual theme
  - `cart.js/` – Store Cart Items
  - `api/` – API route handlers (server-side logic)

- **redux/**
  - `cartSlice.js` – Cart logic with Redux Toolkit
  - `store.js` – Redux store configuration


- **styles/**
  - `globals.css` – Global styles using Tailwind

- **public/**
  - Static assets (images, icons, etc.)


📌 Upcoming Features
✅ Razorpay test-mode integration with secure key handling
🔐 Authentication 



🛠 How to Run Locally
git clone https://github.com/Anshuy11/shopNow.git
npm install
npm run dev




