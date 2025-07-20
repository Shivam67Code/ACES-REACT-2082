# My React Learning Project

This is my React projecct from the aces workshop. (CUrrently going on...)

## What I have build so far

**Pages:**
-Home Page
-Create Page
-Edit page
-Single Page
-Learning Page

**COmponents:**
-Navbar
-Card
-LearningUseState

##TechStack
-React v19
-VIte for build Tool
Tailwind css for styling
Axios for api calls

## API

Using mockapi.io for backend data: https://687af35cabb83744b7ee46db.mockapi.io/Blogs

Run the project with :

```
npm run dev
```

## Basic flow of Project

1. **HOME** : VIew all blog posts
2. **Create** : Make new blog posts with title,subtitle,description,image 3.**EDIT** : GO to /edit for new blog or edit/ID to edit existing blog 4.**SIngle**: Click any blog card to view full blog with edit/delete options

## Current status

- Home page fetches and displays blogs from API
- Navigation works between all pages
- Cards show blog data properly
- Counter app works for learning useState
- Responsive design with mobile menu
- Edit form has all the fields working
- Edit page now works with URL parmeters(edit/6 loads blog 5 for editing)
- API integration complete for all blog operations
- FOrm validations and error handling implemented
- Consistent UI design with blue(Personal Fav. Color😁) colors
- Loading states added for better use experience

## File structure

```
BlogApp-ACES/
  src/
    components/
      Card.jsx
      LearningUseState.jsx
      Navbar.jsx
    pages/
      Create.jsx
      EditPage.jsx
      Home.jsx
      SinglePage.jsx
    assets/
      note.txt
      react.svg
    App.css
    index.css
    Layout.jsx
    main.jsx
  public/
    vite.svg
  package.json
  vite.config.js
  index.html
```

## Routes created

- `/` - Welcome page
- `/home` - All blog posts
- `/create` - Create new blog form
- `/edit` - Create new blog
- `/edit/:id` - Edit specific blog by ID
- `/single/:id` - View specific blog by ID
- `/learning` - useState practice counter

## NOtes

NEarly everything is done(I guess 🤔 ) Specially the Create and Edit page UI.
