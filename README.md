# 🚕 TaxiShare — Corporate Ride-Sharing Platform

**TaxiShare** is a full-stack ride-sharing application designed for employees of companies within the same geographic region. It enables coworkers to share taxi rides, reduce commuting costs, and optimize urban mobility through intelligent clustering and real-time matching.

&gt; Built for the Tunisian corporate ecosystem, with analytics-driven insights for better fleet and user management.

---

## 📸 Overview

The platform provides a comprehensive dashboard for administrators to visualize usage patterns, cost savings, client distribution, and ride clustering — empowering data-driven decisions for corporate mobility.

| Map Distribution | Cost Analysis | Client Analytics | Clustering Insights |
|---|---|---|---|
| ![Map](docs/images/map.png) | ![Costs](docs/images/coût.png) | ![Clients](docs/images/clients.png) | ![Clusters](docs/images/clusters-trajet.png) |

---

## ✨ Features

### For Employees (Mobile App — React Native)
- **Ride Matching** — Find and join taxi rides with colleagues heading in the same direction
- **Real-time Tracking** — Live map view of shared rides and estimated arrival times
- **Cost Splitting** — Automatic fare division among passengers
- **Trip Ratings** — Rate and review shared rides to ensure quality service
- **Notifications** — Push alerts for ride confirmations, departures, and updates

### For Admins (Web Dashboard — React)
- **Interactive Analytics** — Monthly usage trends, cost comparisons (with/without app), and satisfaction metrics
- **Geographic Visualization** — Heatmap and bubble charts showing user distribution by city
- **Client Segmentation** — Department-wise and demographic breakdowns of employees
- **Cluster Analysis** — ML-powered grouping of users based on distance, frequency, and ratings
- **Satisfaction Monitoring** — Track user feedback across departments

### Backend (Node.js)
- **RESTful API** — Secure, scalable endpoints for mobile and web clients
- **Real-time Engine** — WebSocket-based ride matching and status updates
- **Authentication** — JWT-based auth with role-based access control (Employee / Admin)
- **Database** — Optimized schema for users, rides, companies, and analytics
- **Clustering Service** — Algorithmic grouping of users for efficient ride pooling

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend (Web)** | React, Chart.js / Recharts, Leaflet Maps |
| **Mobile** | React Native, Expo |
| **Backend** | Node.js, Express.js |
| **Real-time** | Socket.io |
| **Database** | MongoDB / PostgreSQL |
| **Authentication** | JWT, bcrypt |
| **Maps** | Bing Maps API / OpenStreetMap |

---

## 🚀 Getting Started

### Prerequisites
- Node.js `&gt;= 18.x`
- npm or yarn
- MongoDB instance (local or Atlas)
- React Native development environment (for mobile)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/taxishare.git
cd taxishare

# 2. Install server dependencies
cd server
npm install

# 3. Configure environment variables
cp .env.example .env
# Edit .env with your database URI, JWT secret, and API keys

# 4. Start the backend server
npm run dev

# 5. Install and run the web dashboard
cd ../client
npm install
npm start

# 6. Install and run the mobile app
cd ../mobile
npm install
npx expo start
