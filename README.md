🛒 ShopNow –  E-commerce App
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

shopNow/
│
├── components/         # Reusable components (Header,Footer, LayOut ,  Loader, CartDataStoreInLocalStorage, GlobalSearch  ,PathBackButton.)
├── pages/              # Next.js pages
│   ├── index.js        # Call  product listing
│   ├── products/index.js # Product Listing page
│   ├── products/[id].js # Product detail page
│   ├── api/            # API routes (server-side logic)
│
├── redux/              # Redux store setup
│   ├── cartSlice.js
│   ├── store.js
│
├── context/            # Theme Context API
├── public/             # Static assets
├── styles/             # Global styles


📌 Upcoming Features
✅ Razorpay test-mode integration with secure key handling
🔐 Authentication 



🛠 How to Run Locally
git clone https://github.com/Anshuy11/shopNow.git
npm install
npm run dev




