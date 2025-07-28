# Toorizm 🧳 — Travel Agency Web App

A modern frontend application for a fictional travel agency, developed with **React**, **TypeScript**, and **Redux**.  
Users can browse, filter, and "book" tours by different criteria like location, dates, and number of travelers.

> 💡 This is a frontend-only project — all data is mocked or locally handled.

---

## 🌍 Features

- 🔎 **Tour Search**
  - By destination name
  - By check-in and check-out dates
  - By number of adults and children
  - By category (Beaches, Mountains, Tropics, Desert, Landmarks, Castles, etc.)

- 🧭 **Tour Details View**
  - Opens when clicking on a tour card
  - Displays full description, duration, activities, icons, and price

- ⭐ **Favorite Tours**
  - Clicking “Book tour” adds a tour to favorites
  - If not logged in, user is redirected to the login/register tab (UI only)

- 🧺 **Booking Management**
  - View all selected tours
  - Delete tours individually or all at once
  - Simulate booking them individually or all together

- 🖼️ Fully styled with **SCSS** (no mobile version yet)

---

## 🛠 Stack

- **React**
- **TypeScript**
- **Redux Toolkit**
- **Axios**
- **React Hot Toast** (UI notifications)
- **SCSS Modules**

---

## 🚀 Getting Started

```bash
git clone https://github.com/KUMIR2006/toorizm-react.git
cd toorizm-react
npm install
npm run dev
