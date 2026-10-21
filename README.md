# Paradise Nursery — Online Plant Shopping Application

## Project Overview

Paradise Nursery is a React-based online plant shopping application that allows users to browse indoor plants, view plant details and prices, add plants to a shopping cart, and manage their purchases.

The application provides a simple and user-friendly shopping experience with dynamic cart updates and quantity management.

## Features

- **Landing Page:** Displays the Paradise Nursery company name and a Get Started button.
- **About Us:** Provides information about the company.
- **Plant Listing:** Displays plants organized into categories with images, names, and prices.
- **Add to Cart:** Allows users to add plants to their shopping cart.
- **Shopping Cart:** Displays selected plants, quantities, unit prices, and item totals.
- **Quantity Management:** Allows users to increase or decrease plant quantities.
- **Remove Items:** Allows users to delete plants from the cart.
- **Dynamic Cart Count:** Updates the cart item count as items are added or quantities change.
- **Total Calculation:** Calculates the total cost of the items in the cart.
- **Navigation:** Provides links to the Home, Plants, and Cart pages.
- **Checkout Message:** Displays a Coming Soon message when checkout is selected.

## Technologies Used

- React
- JavaScript
- HTML5
- CSS3
- Redux Toolkit
- React Redux
- React Router DOM
- Vite

## Project Structure

```text
paradise-nursery/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── CartItem.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductList.jsx
│   ├── data/
│   │   └── plants.js
│   ├── App.css
│   ├── App.jsx
│   ├── cartSlice.jsx
│   ├── index.css
│   ├── main.jsx
│   └── store.js
├── index.html
├── package.json
└── README.md
```

## Installation and Setup

1. Install [Node.js](https://nodejs.org/).
2. Clone or download this repository.
3. Open a terminal in the project directory.
4. Install the dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL displayed in the terminal.

## State Management

Redux Toolkit is used to manage the shopping cart state. The application supports adding plants, updating quantities, removing items, and calculating the cart total.

## Project Objective

The objective of Paradise Nursery is to demonstrate the development of a responsive React shopping application using reusable components, routing, state management, and interactive shopping cart functionality.

## Author

**Vaishnavi Lavhrale**

## Repository

[Paradise Nursery on GitHub](https://github.com/vaishlavhrale9823-art/paradise-nursery)
