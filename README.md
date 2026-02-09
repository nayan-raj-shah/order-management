# Order Management App
Live Url: https://order-management-teal-mu.vercel.app/

GitHub Url: https://github.com/nayan-raj-shah/order-management

A simple order management web application built with **Next.js (App Router)**.  
The app allows users to browse a menu, add items to a cart, place orders, and track order status updates.

This project was developed as a take-home assignment with a focus on **clean architecture, validation, testing, and user experience**.

---

## ✨ Features

- Browse menu items
- Add / remove items from cart
- Increment and decrement item quantities
- Checkout with form validation
- Order creation and status tracking
- Simulated real-time order status updates
- Loading and empty states for better UX
- Unit tests for UI and API routes

---

## 🛠 Tech Stack

- **Next.js 16** (App Router)
- **React**
- **TypeScript**
- **React Hook Form** + **Zod** (form validation)
- **Jest** + **React Testing Library** (testing)
- **Tailwind CSS** (styling)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+

### .env
```bash
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

### Install dependencies
```bash
npm install
npm run dev
```

👉 http://localhost:3000

### Run all unit tests:
```bash
npm test
```

### To create a production build:
```bash
npm run build
npm start