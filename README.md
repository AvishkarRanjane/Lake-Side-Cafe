# Lake-Side-Cafe
A website for a café was developed, integrating original design concepts with artificial intelligence assistance for its creation and enhancement..
# 🌊 Lake Side Cafe | Premium Waterfront Dining Experience

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Three.js / 3D](https://img.shields.io/badge/3D_Viewer-Model--Viewer-blueviolet?style=for-the-badge&logo=three.js&logoColor=white)](https://modelviewer.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Welcome to the **Lake Side Cafe** repository. This is a premium, multi-page frontend web application crafted with a modern aesthetic, responsive grid layouts, fluid micro-animations, and interactive next-generation **3D dish previewing**. Designed to offer users a luxurious and seamless dining exploration experience right from their browser.

---

## ✨ Features

### 1. 🌟 Next-Gen Interactive 3D Dish View (WebGL)
*   **Realistic 3D Models:** Integrated Google's high-fidelity `<model-viewer>` component.
*   **Seamless Interaction:** Users can spin, rotate, and zoom in on selected dishes (e.g., our signature Pizza) inside a beautiful, custom glassmorphism modal, allowing them to inspect their food from all angles before ordering.
*   **Smooth Overlay Transition:** Fully responsive modal that halts underlying scroll to lock focus on the 3D element.

### 2. 🛒 Persistent Client-Side Cart System
*   **State Persistence:** Fully powered by JavaScript `localStorage` to retain the guest's selected items across page refreshes.
*   **Real-time Animations:** Micro-scaling animations trigger on the cart badge headers (desktop and mobile) whenever items are added or quantities are mutated.
*   **Dynamic Calculations:** Automatically computes the order Subtotal, 5% GST, flat-rate delivery charges, and final bill on the fly.
*   **Quantity Modifiers:** Increment, decrement, or remove items directly within the interactive checkout screen.

### 3. 🎨 High-End Premium Design & Glassmorphism
*   **Modern Color Palette:** Built using Tailwind CSS, featuring bespoke colors: Forest Green (`#013220`), Earthy Woody (`#5C4033`), Golden Amber (`#FFBF00`), and warm Creamy (`#FAFAF7`).
*   **Visual Enhancements:** Implemented frosted glass (`backdrop-blur`) headers, responsive content card grids, sleek hover scale transitions, and smooth fade-in slide-up entry animations.
*   **Tailored Elements:** Styled custom browser scrollbars matching the Woody & Forest palette.

### 4. 🔑 Smooth Authentication Interface
*   **Adaptive Glass-Card:** Floating frosted-glass authentication container set against a darkened café background.
*   **Seamless State Toggles:** Fluidly transitions between **Sign In** and **Create Account** forms without page reloads.
*   **Security Details:** Custom styled password eye button to show/hide raw input text.

### 5. 📱 Fully Responsive Layout
*   A customized hamburger sliding navigation menu built for flawless tablet and mobile viewing.

---

## 📁 File Structure

```bash
Lake Side Cafe/
├── 📄 index.html             # The main home landing page (Hero, About, features, testimonials, hours)
├── 📄 menu.html              # Interactive Menu page (3D model viewer, filters, add-to-cart controls)
├── 📄 cart.html              # Checkout & Cart page (Delivery form, UPI/Card selectors, pricing totals)
├── 📄 auth.html              # Frosted glassmorphism Sign-In / Sign-Up panel
├── 📄 main.js                # Core JS logic (sticky headers, global cart actions, custom toasts)
├── 📄 styles.css             # Premium custom scrollbars, animations, and typography imports
├── 📁 models/                # Folder containing raw 3D mesh assets (pizza.glb)
└── 📁 [Food & Guest Media]   # WebP and AVIF optimized assets for lightning-fast loads
```

---

## 🛠️ Technology Stack

*   **Structure:** HTML5 (Semantic elements like `<header>`, `<main>`, `<footer>`, `<section>`)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Tailored theme extensions) & Vanilla CSS3
*   **Fonts:** Inter (Sans-serif) & Playfair Display (Serif) via Google Fonts
*   **Icons:** FontAwesome v6.4.0 (CDN)
*   **Logic:** Native Vanilla ES6+ JavaScript
*   **3D Render Engine:** [Google Model-Viewer](https://modelviewer.dev/) (WebGL wrapper utilizing Three.js rendering pipelines under the hood)

---

## 🚀 How to Run Locally

Since this is a client-side web application, you do not need to install complex databases or backend servers! Simply clone and launch it in seconds:

### Method 1: Using VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click `index.html` and select **"Open with Live Server"**.
4. The site will launch on your local host (usually `http://127.0.5.1:5500/index.html`).

### Method 2: Python HTTP Server (Terminal)
Open your terminal inside the folder and execute:
```bash
# Python 3
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your favorite browser.

---

## 📸 Demo Visual Showcase

| Home Section | Interactive Menu | 3D Modal View | Shopping Cart |
| :---: | :---: | :---: | :---: |
| ![Hero](Lake%20Side%20Cafe.webp) | ![Menu Layout](Lake%20side%20Cafe%20Table.webp) | ![3D Preview Beta](Pizza.avif) | ![Cart Experience](Fresh%20Mint%20Mojito.avif) |


*Crafted with 🤎 and ☕ for an exceptional dining experience.*
