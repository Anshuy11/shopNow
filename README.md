🛒 - `ShopNow` –  E-commerce App (Link - https://shop-now-chi.vercel.app/)
 - ShopNow is a modern frontend-heavy e-commerce application focused on providing users with a fast and seamless shopping experience. Built with Next.js, Tailwind CSS, Redux, and Razorpay integration, the project showcases a smooth and responsive user experience across devices with dual theme with the help of context API . Comprehensive testing is implemented using Jest and React Testing Library (RTL) to ensure component reliability and performance.

## 🚀 Features

- Authentication with secure login/signup flow using JWT
- Search & Filter: Global search bar with instant product filtering
- Product Pages with detailed views and pricing
- Wishlist: Add/remove favorite items (persistent with Redux)
- Cart Management: Add, remove, quantity update
- Checkout Flow: Razorpay test-mode payment integration
- Responsive UI: Fully mobile-friendly experience
- Wrote unit and integration tests using Jest and React Testing Library, achieving high test coverage and reliability. 


🧠 Tech Stack

| Tech              | Usage                      |
| ----------------- | -------------------------- |
| **Next.js**       | Framework (SSR + Routing)  |
| **React.js**      | UI Logic                   |
| **Tailwind CSS**  | Styling Framework          |
| **Redux Toolkit** | State Management           |
| **localStorage**  | Cart Persistence           |
| **Razorpay**      | Payment Gateway(test mode) |
| **MongoDB**       | Database                   |
| **Nodejs.js**     | Backend API                |
| **RESTFUL**       | API Calls                  |
| **Jest**          |testing Components          |
| **RTI**           | testing Components         |


## 📁 Folder Structure 
 \`\`\`
 ## shopNow/
  - ├── public/
    │   ├── assets               # Static images, logos
    │   └── favicon.ico
  - ├── components/              # Reusable UI components
    │   ├── Carousel/
    │   │   ├── Carousel.js
    │   │   └── Carousel.test.js  # testing component
    │   └── ConfirmationModel/
    │   │    ├── ConfirmationModel.js
    │   │    └── ConfirmationModel.test.js # testing component
    │   └── GlobalSearch/
    │       ├── GlobalSearch.js
    │       └── GlobalSearch.test.js # testing component
    │   ├── Header.js
    │   ├── CardSkeleton.js  # for skeleton card
    │   ├── Footer.js
    │   ├── Layout.js
    │   ├── Loader.js
    │   ├── MessageModal.js
    │   ├── MobileSidebar.js
    │   ├── PathBackButton.js
    │   ├── SigninLoginForm.js
    │   └── WishlistButton.js
  - ├── context/                
    │   ├── AuthContext.js       # api logic for login and signup
    │   └── ThemeContext.js      # theme logic 
  - ├── pages/                   # Next.js pages
    │   ├── index.js            # Homepage
    │   ├── product/
    │          ├──   [id].js    # Product details page
    │          ├──index.js       # Product list page
    │   ├── cart.js             # Cart page
    │   ├── wishlist.js         # Wishlist page
    │   ├── checkout.js         # Checkout page
    │   └── api/                 # api 
    │       ├── razorpay.js
    │      
  - ├── redux/                   # Redux Toolkit setup
    │   ├── store.js
    │   ├── cartSlice.js         # cart wishlist logic
  - ├── styles/                  # Global and custom styles
    │   └── globals.css
  - ├── .env.local               # API keys and URLs
  - ├── tailwind.config.js
  - ├── postcss.config.mjs
  - ├── next.config.mjs
  - └── README.md
\`\`\`

- ** 📽️ ShopNow Demo Video/**


👉 [Click here to watch the demo](https://raw.githubusercontent.com/Anshuy11/shopNow/main/public/shopnow-demo.mp4)



- **How to Run Locally/**
  - git clone https://github.com/Anshuy11/shopNow.git
  - cd shopNow
  - npm install

  ## Set up environment variables
  ## Create a .env.local file:
  - NEXT_PUBLIC_RAZORPAY_KEY_ID=Razorpay_ID
  - NEXT_PUBLIC_API_URL=https://your-backend-api.com
  - RAZORPAY_KEY_ID=Razorpay_ID  
  - RAZORPAY_KEY_SECRET=Razorpay_Key

 ## Now Run 
  - npm run dev
## for testing
  - npm run test
 ## Now Run 
 - Here you can see my backend code for Auth login
 -        https://github.com/Anshuy11/shopNow_Backend


  ## 🙌 Credits

Made with ❤️ by **Anshu Yadav**

- 🔗 [Portfolio](https://portfolios-dusky.vercel.app/)
- 💼 [LinkedIn](https://www.linkedin.com/in/anshu-yadav-62444a1a0/)
- 🧑‍💻 [GitHub](https://github.com/Anshuy11)





