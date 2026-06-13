# 🛡️ CyberSecurity Guard

A beginner-friendly, interactive cybersecurity education platform built as an IDT Project. Helps users learn to protect themselves online through interactive tools, quizzes, and simulations.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed ([download here](https://nodejs.org/))
- npm (comes with Node.js)

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
cybersecurity-guard/
├── public/
│   └── shield.svg                  # Favicon
├── src/
│   ├── components/
│   │   ├── Badge.jsx               # Reusable badge component
│   │   ├── Footer.jsx              # Site footer
│   │   ├── Navbar.jsx              # Sticky navigation bar
│   │   ├── PageHeader.jsx          # Reusable page header
│   │   └── ScrollToTop.jsx         # Auto scroll on route change
│   ├── data/
│   │   ├── learnData.js            # 5 learning module content
│   │   ├── phishingData.js         # 8 phishing scenarios
│   │   └── quizData.js             # 12 quiz questions
│   ├── pages/
│   │   ├── Home.jsx                # Landing page
│   │   ├── Learn.jsx               # Learning modules
│   │   ├── PhishingSimulator.jsx   # Email/SMS phishing game
│   │   ├── Quiz.jsx                # Multiple choice quiz
│   │   ├── PasswordChecker.jsx     # Real-time password analyzer
│   │   └── EmergencyHelp.jsx       # Incident guide & About
│   ├── utils/
│   │   └── passwordUtils.js        # Password analysis logic
│   ├── App.jsx                     # Root component + routing
│   ├── index.css                   # Global styles + Tailwind
│   └── main.jsx                    # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 📄 Pages & Features

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats, features overview |
| Learn Center | `/learn` | 5 expandable cybersecurity modules |
| Phishing Simulator | `/phishing-simulator` | 8 email/SMS scenarios to classify |
| Safety Quiz | `/quiz` | 12 multiple-choice questions |
| Password Checker | `/password-checker` | Real-time strength analysis |
| Emergency Help | `/emergency-help` | Incident guide, reporting, about |

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. Preview locally with:

```bash
npm run preview
```

---

## ☁️ Deploy to Vercel

### Option A — Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (run from project folder)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - Project name? cybersecurity-guard
# - Directory with code? ./
# - Override settings? No
```

### Option B — Vercel Dashboard

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"** → Import from GitHub
4. Select your repository
5. Vercel auto-detects Vite — click **"Deploy"**
6. Your site will be live in ~60 seconds!

### Vercel Configuration (if needed)

Create `vercel.json` in the project root:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

This ensures React Router works correctly on Vercel.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| React Router v6 | Client-side routing |
| Framer Motion | Animations |
| Lucide React | Icon library |

---

## ✅ Customization

- **Team Members**: Edit `src/pages/EmergencyHelp.jsx` → `teamMembers` array
- **Faculty Details**: Same file, look for "Faculty Guide" section
- **Institution Name**: Update the Faculty Guide section
- **Add More Quiz Questions**: Extend `src/data/quizData.js`
- **Add More Phishing Scenarios**: Extend `src/data/phishingData.js`
- **Colors**: All theme colors in `tailwind.config.js` under `cyber`

---

## 📱 Responsive Design

Fully responsive across all screen sizes:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

---

*Built for IDT Project 2025 — CyberSecurity Guard*
