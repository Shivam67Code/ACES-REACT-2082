# My React Learning Project

This is the status of React By ACES WORKSHOP

## What I have so far

**Pages:**

- Home page - shows cards in horizontal layout
- Create page - form to create blog posts
- Edit page - edit existing blog posts

**Components:**
\_Navbar
-Card
-Some other components too.

## Setup commands

First install everything:

```
npm install
```

Install Tailwind CSS:

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update tailwind.config.js:

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add to src/index.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Run the project:

```
npm run dev
```

## Current status

- Basic layout working
- Cards display horizontally
- Navbar works great

## File structure

```
src/
  components/
    Navbar.jsx
    Card.jsx
  pages/
    Home.jsx
    Create.jsx
    EditPage.jsx
```
