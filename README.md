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



# BeMindful — DevOps Project - First draft

## Project overview

BeMindful is a meditation web application built with React and Vite. It allows users to start meditation sessions, listen to audio and manage their preferences, including volume and session duration.

The application also includes a lightweight backend built with Node.js and Express. It exposes a `GET /api/status` endpoint that returns the service status and the current runtime environment.

## Project goals

The aim of this project is to set up a complete DevOps workflow for BeMindful, starting from the local development environment and moving towards a public deployment. The work includes containerizing the frontend and backend, automating checks through GitHub Actions and configuring a deployment process that runs when changes are pushed to the `main` branch.

Particular attention will be given to security and reliability. Environment variables and credentials will be kept separate from the source code, while uptime monitoring and error tracking will be used to check that the deployed application remains accessible and to identify potential issues.

## Environments

The project will use three environments. Development will be used for local coding and testing, with the frontend and backend running locally or through Docker Compose. Staging will provide a separate environment for checking changes before they reach production, depending on the capabilities of the selected hosting platform. Production will be the public version of the application, updated automatically after the required CI checks have passed.

## Implementation plan

The work will begin with an inspection of the existing application and its dependencies. The frontend and backend will then be containerized and tested locally using Docker Compose. Once the local setup is working, the environment variables and repository secrets will be configured, followed by a GitHub Actions pipeline for linting and container builds.

The next step will be to connect the pipeline to a public hosting platform and automate frontend deployment. Finally, uptime monitoring and error tracking will be configured and tested. The results, including pipeline runs, deployment details and monitoring evidence, will be collected for the final project presentation.

## Security and monitoring

Local configuration files containing environment variables must remain outside version control. Credentials required by the CI/CD workflow will be stored in GitHub repository secrets, and pipeline logs will be checked to ensure that sensitive information is not exposed. Variables embedded in the public frontend will be treated as publicly accessible.

Uptime monitoring will be used to check the availability of the deployed application. Error tracking will be tested by generating a controlled error and verifying that it appears in the monitoring dashboard.

-Start the application
docker compose up --build -d


-Check the running containers
docker compose ps

-Test the backend API
Invoke-RestMethod http://localhost:8080/api/status



-Stop the application



## Repository

[BeMindful on GitHub](https://github.com/PaoloGomiero/BeMindful)
