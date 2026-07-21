<img width="2520" height="1326" alt="Screenshot 2025-10-28 010303" src="https://github.com/user-attachments/assets/c6ba19f9-de44-4e23-ace2-7e985f1d633a" /># CareerCraft — The Smarter Portfolio

> A living portfolio that evolves with you- visualize your growth, track achievements, and unlock AI-powered insights to guide your next move.

---

# CareerCraft 

A modern portfolio platform built with React and Vite that helps users showcase their skills, projects, and career progress through an interactive dashboard.

The application is designed with a modular architecture, making it easy to extend with backend services, AI-powered insights, and additional integrations as the platform evolves.

**Demo:** https://youtu.be/hyPdoXk4sH4

---

## Overview

CareerCraft is a frontend application built around a clear separation of concerns. Data collection, processing, visualization, and future AI-powered recommendations are organized into independent layers, making the application easier to maintain and extend.

The project demonstrates several engineering concepts:

- **Layered data flow** — input → normalization → visualization → AI insights
- **Modular component architecture** — reusable React components with a clean project structure
- **Interactive data visualization** — charts for representing skills, projects, and career progress
- **Deployment-ready design** — supports deployment on GitHub Pages, Vercel, and Netlify with minimal configuration

---

## System Architecture

```text
User Input
      │
      ▼
Data Processing
      │
      ▼
JSON Data Model
      │
      ▼
React Components
      │
      ▼
Charts & Visualizations
      │
      ▼
Interactive Dashboard
      │
      ▼
Future AI Recommendation Layer
```

---

## Project Workflow

1. Users provide portfolio information.
2. The application structures the data into reusable formats.
3. React components render portfolio sections dynamically.
4. Charts visualize skills, projects, and career progress.
5. Future AI modules can analyze portfolio data and generate personalized recommendations.

---

## Key Features

- Interactive portfolio dashboard
- Modular React component architecture
- Skill growth visualization
- Responsive user interface
- Reusable UI components
- Multi-platform deployment support
- Ready for backend and AI integration

---
## Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React, Vite, JavaScript, HTML5, CSS3 |
| Visualization | Recharts, Chart.js |
| Version Control | Git, GitHub |
| Deployment | GitHub Pages, Vercel, Netlify |
| Future Integrations | OpenAI API, LangChain |

> **Note:** AI-based recommendations are planned for future releases and are not part of the current implementation.

---

## Project Structure

```text
CareerCraft/
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Running Locally

```bash
git clone https://github.com/shaa18/CareerCraft.git

cd CareerCraft

npm install

npm run dev
```

Open:

```
http://localhost:5173
```

---


## Future Improvements

- Backend service for real-time data synchronization
- User authentication and profile management
- AI-powered career recommendations
- GitHub profile integration
- Resume analysis using LLMs
- Docker support
- CI/CD pipeline using GitHub Actions
- Cloud deployment
- Portfolio analytics dashboard

---

## 🖼️ Visuals & Screenshots

<img width="2543" height="1317" alt="Screenshot 2025-10-28 182452" src="https://github.com/user-attachments/assets/f31c1abc-22b6-427a-bf2a-35fb74ef4e2e"/> 


<img width="2559" height="1256" alt="Screenshot 2025-10-28 005503" src="https://github.com/user-attachments/assets/ecb20665-9c7a-4b53-9c10-5715aa8494bb" />


## 📜 License

This project is open-source and available under the [MIT License](LICENSE).  

> *CareerCraft is built to make your professional journey more transparent, measurable, and intelligent — turning your portfolio into your personal growth dashboard.*
