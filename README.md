# IsCoolLab Assignment

This project was done for the offline test assignment for IsCoolLab.

Deployed with Netlify here: https://main--gorgeous-palmier-5ce9d0.netlify.app/

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Usage](#usage)

## Features
- Menu Page
    - Shows foods from three different categories: Rice, Noodles, and Drinks
    - Users can add item to Cart
- Cart Page
    - Shows all food items in Cart
    - Users can add, remove, or delete any food item in Cart
    - Users can submit order
- History Page
    - Shows past submitted orders by User
    - User can clear history of past orders

## Prerequisites
- **Node.js:** v16.x or higher
- **npm:** v10.x or higher (usually comes with Node.js)
- **React:** v18.x or higher
- **Typescript:** v4.x or higher
- **Jest:** v27.x or higher

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/chengxi600/isCoolLabOA.git
   cd isCoolLabOA
   ```
2. **Install Depdencies:**
   ```sh
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the Jest test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Usage
1. Navigate to Menu Page
2. Click on the shopping cart icon to add an item to cart
3. Navigate to Cart Page
4. Click on the add/minus/delete buttons to change quantity, and press the order button
5. Navigate to the History Page
6. Submitted order #1 should be shown. Press Clear All History to clear history.