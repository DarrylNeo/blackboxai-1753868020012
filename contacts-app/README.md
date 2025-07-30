# Contacts Application

A responsive React application for browsing contacts fetched from JSONPlaceholder API. Features a clean, minimal design with a grey color scheme.

## Features

- ✅ Fetches contacts from JSONPlaceholder API (`https://jsonplaceholder.typicode.com/users`)
- ✅ Responsive grid layout that works on all devices
- ✅ Clean, minimal grey aesthetic design
- ✅ Loading states and error handling
- ✅ Modern typography using Inter font
- ✅ Hover effects and smooth transitions
- ✅ No external dependencies beyond React

## Technologies Used

- **React 19.1.1** - Frontend framework
- **CSS3** - Styling with modern features
- **JSONPlaceholder API** - Mock data source
- **Inter Font** - Modern typography

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd contacts-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
contacts-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── ContactsList.jsx    # Main contacts list component
│   │   ├── ContactsList.css    # Styles for contacts list
│   │   ├── ContactCard.jsx     # Individual contact card
│   │   └── ContactCard.css     # Styles for contact cards
│   ├── App.js                  # Main app component
│   ├── App.css                 # Global app styles
│   └── index.js               # App entry point
├── package.json
└── README.md
```

## Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)

1. **Prepare your code:**
   ```bash
   npm run build
   ```

2. **Push to GitHub:**
   - Create a new repository on GitHub
   - Push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit: Contacts Application"
     git branch -M main
     git remote add origin https://github.com/yourusername/contacts-app.git
     git push -u origin main
     ```

3. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect React and configure build settings
   - Click "Deploy"
   - Your app will be live at `https://your-app-name.vercel.app`

### Option 2: Deploy to Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy via Drag & Drop:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up for a free account
   - Drag and drop the `build` folder to Netlify
   - Your app will be live instantly

3. **Deploy via Git (Recommended):**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Deploy automatically on every push

### Option 3: Deploy to GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   {
     "homepage": "https://yourusername.github.io/contacts-app",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## Design Philosophy

This application follows a minimal design approach with:

- **Clean Typography:** Using Inter font for modern, readable text
- **Subtle Colors:** Grey-based color palette for professional appearance
- **Minimal Shadows:** Subtle box shadows for depth without distraction
- **Responsive Design:** Mobile-first approach with CSS Grid
- **Smooth Interactions:** Gentle hover effects and transitions

## API Information

The application fetches data from JSONPlaceholder's `/users` endpoint:
- **URL:** `https://jsonplaceholder.typicode.com/users`
- **Method:** GET
- **Response:** Array of 10 user objects with contact information

Each contact includes:
- Name and username
- Email address
- Phone number
- Website
- Company information
- Address details

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Efficient API calls with error handling
- Responsive images and layouts
- Minimal CSS bundle size
- Fast loading times
- Smooth animations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

---

**Live Demo:** [Add your deployed URL here]

**Contact:** [Add your contact information]
