# Photography Portfolio Website 📷

A personal photography website built with **HTML, CSS, JavaScript, and Express**.  
The site features a **masonry-style gallery**, **scroll-based animations**, and a **lightbox viewer** with directional navigation — all powered by images loaded directly from a local folder.

---

## Features

-  Dynamic masonry gallery generated from a local image folder
-  Fade-in / fade-out animations on scroll using `IntersectionObserver`
-  Fullscreen lightbox with left/right navigation
-  Correct image ordering despite masonry layout
-  Express-powered web server
-  Responsive image resizing for horizontal and vertical photos

---

##  Technologies Used

- Node.js
- Express
- HTML / CSS / JavaScript
- JSDOM
- IntersectionObserver API

---

## How It Works

### Server-Side Gallery Generation (`app.js`)

- Reads all images from:

- Uses **JSDOM** to simulate a browser DOM inside Node.js
- Dynamically creates:
- `.grid-item` containers
- `<img>` elements
- Clickable wrappers for lightbox support
- Injects the generated markup directly into `index.html`
- Serializes the DOM back into HTML before serving

Adding new photos requires **no HTML changes**.

---

### Frontend Logic (`script.js`)

#### Fade-on-Scroll
- Uses `IntersectionObserver`
- Adds `.visible` class when images enter the viewport
- Removes it when they exit

#### Masonry Order Detection
- Calculates each image’s `x` and `y` position
- Groups images by column
- Sorts them visually (top → bottom, left → right)
- Ensures lightbox navigation matches the actual layout

#### Lightbox Viewer
- Opens fullscreen on image click
- Locks page scrolling
- Dynamically resizes image based on orientation
- Supports:
- Left/right arrow navigation
- Overlay click to close
- Smooth opacity transitions

---

##  Pages

###  Home
- Masonry-style photo gallery
- Scroll-based fade animations
- Lightbox image viewer

### Contact
- Static contact page (email / socials / form — customizable)

### About Me

- Static about me page (background and visions)

---

## ▶️ Running the Project

### Install Dependencies
```bash
npm install
node app
```

### Start the Server
```bash
node app
```

### Open in Browser

http://localhost:3000
