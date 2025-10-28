<img width="2520" height="1326" alt="Screenshot 2025-10-28 010303" src="https://github.com/user-attachments/assets/c6ba19f9-de44-4e23-ace2-7e985f1d633a" /># CareerCraft — The Smarter Portfolio

> A living portfolio that evolves with you — visualize your growth, track achievements, and unlock AI-powered insights to guide your next move.

---

## 🧭 Overview

Most portfolios tell your story — **CareerCraft** helps you understand it.  
It blends interactive data visualization with a structured, modular layout, so you can monitor progress, showcase skills, and integrate AI-based analysis through an upcoming LLM module.

The goal is simple:  
To build a portfolio that feels alive, grows with you, and represents more than just a résumé.

---

## ✨ Key Features

- Interactive Graphs: Visualize your skill growth, learning curves, and performance over time.  
- LLM Insights (In Progress): Uses AI models to analyze data and suggest areas for improvement.  
- Modular Design: Flexible structure that allows adding new features or APIs without major code changes.  
- Dynamic UI Components: Each section (About, Skills, Projects, Contact) is reusable and easily customizable.  
- Fully Responsive: Works smoothly on all screen sizes and devices.  
- Fast & Lightweight: Built with Vite for lightning-fast builds and clean performance.  

---

## 🧱 System Architecture

| Layer | Component | Description |
|--------|-------------|-------------|
| Frontend | React + Vite | Provides modular and interactive UI components |
| Visualization | Chart.js / Recharts | Renders skill growth and performance graphs |
| AI Engine | OpenAI / LangChain *(In Progress)* | Analyzes data and generates insights |
| Hosting & Deployment | GitHub Pages / Vercel / Netlify | Ensures continuous deployment and scalability |

---

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|---------------|
| Frontend | HTML5, CSS3, JavaScript (ES6+), React, Vite |
| Visualization | Recharts, Chart.js |
| AI & Insights | OpenAI API, LangChain *(planned)* |
| Version Control | Git & GitHub |
| Deployment | GitHub Pages, Vercel, Netlify |

---

## 🧩 Project Structure

```
CareerCraft/
│
├── public/                   # Static assets and metadata
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── assets/               # Images, icons, etc.
│   ├── components/           # Reusable UI components (Navbar, Graphs, etc.)
│   ├── pages/                # Main sections (Home, About, Skills, Projects)
│   ├── utils/                # Helper functions and data handlers
│   ├── App.jsx               # Root React component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js

```

---

## 🔄 Data Flow

| Stage | Functionality | Example Output |
|--------|----------------|----------------|
| Data Input Layer | Collects skills, projects, and achievements | User fills form |
| Processing Layer | Normalizes and structures input data | JSON schema |
| Visualization Layer | Renders charts and insights dynamically | Growth graphs |
| AI Insight Layer | (Planned) Generates suggestions using LLM | Skill gap advice |
| UI Display Layer | Displays portfolio interface | Interactive dashboard |

---

## 🖼️ Visuals & Screenshots

<img width="2543" height="1317" alt="Screenshot 2025-10-28 182452" src="https://github.com/user-attachments/assets/f31c1abc-22b6-427a-bf2a-35fb74ef4e2e"/> 


<img width="2559" height="1256" alt="Screenshot 2025-10-28 005503" src="https://github.com/user-attachments/assets/ecb20665-9c7a-4b53-9c10-5715aa8494bb" />


## 🎥 Demo Video

YOUTUBE: https://youtu.be/hyPdoXk4sH4

## 🔮 Future Enhancements

- AI-powered resume builder and performance insights  
- Integration with external APIs for project data tracking  
- Custom dashboards and analytics widgets  
- Light/Dark mode toggle for personalized themes  
- Export portfolio as an interactive PDF  
- Backend integration for real-time data sync  
- LLM-based recommendation system for skill improvement  
- Automated project section updates from GitHub repositories  

---

## 🧑‍💻 Auth
**Shashank Dadhich**  
Driven by creativity and logic.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).  

> *CareerCraft is built to make your professional journey more transparent, measurable, and intelligent — turning your portfolio into your personal growth dashboard.*
