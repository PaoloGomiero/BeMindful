# BeMindful – Simple Meditation App

BeMindful is a minimalist meditation application built with **React + Vite**, designed to offer a calm and distraction-free experience. It includes a meditation timer, breathing animation, ambient audio, a starting/ending bell, and support for custom session durations.

## Features

- Predefined meditation durations: 5, 10, 15 minutes  
- Custom time input (minutes + seconds)  
- Elapsed / Remaining time toggle  
- Breathing animation synchronized with the session  
- Ambient meditation sound (looped)  
- Bell sound at start and end of session  
- Volume control available in the **Settings** page  
- Session automatically stops when navigating away from the meditation page  

## Tech Stack

- React  
- Vite 
- CSS for layout and animations  
- HTML Audio API for sound playback  

## Project Structure
rc/
│
├── components/
│   ├── UI.jsx
│   ├── UI.css
│   └── Settings.jsx
│
├── context/
│   └── TimerContext.jsx
│
├── pages/
│   ├── Home.jsx
│   └── About.jsx
│
└── assets/
├── sounds/
│   ├── meditation_sound.ogg
│   └── bell.wav
│
└── images/
└── Buddha.svg


## Getting Started

Install dependencies: npm install
Run the development server: npm run dev
Production Build: nm run build


## Notes

- Meditation audio starts automatically when a session begins.  
- Navigating to another page doesn't stop the session.  
- Volume can be adjusted from the **Settings** page.  
- Custom time requires a value greater than zero.  

## Links

- Repository: (https://github.com/PaoloGomiero/BeMindful)




