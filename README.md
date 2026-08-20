# 🚕 TaxiShare — Corporate Ride-Sharing Platform

**TaxiShare** is a full-stack ride-sharing application designed for employees of companies within the same geographic region. It enables coworkers to share taxi rides, reduce commuting costs, and optimize urban mobility through intelligent clustering and real-time matching.

&gt; Built for the Tunisian corporate ecosystem, with analytics-driven insights for better fleet and user management.

---

## 📸 Overview

The platform provides a comprehensive dashboard for administrators to visualize usage patterns, cost savings, client distribution, and ride clustering — empowering data-driven decisions for corporate mobility.

| Map Distribution | Cost Analysis | Client Analytics | Clustering Insights |
|---|---|---|---|
| ![Map](docs/images/map.png) | ![Costs](docs/images/costs.png) | ![Clients](docs/images/clients.png) | ![Clusters](docs/images/clusters.png) |

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

<img width="1365" height="782" alt="Graphique en anneau" src="https://github.com/user-attachments/assets/94ba2259-c7e9-46be-978f-392e909126d8" />

<img width="1367" height="750" alt="Graphique" src="https://github.com/user-attachments/assets/1ae31e4b-fe27-46fc-938d-b21ce702e845" />

<img width="1376" height="773" alt="Histogramme" src="https://github.com/user-attachments/assets/6f3a025e-0401-4376-aa68-331d9ea7c9d3" />

<img width="1375" height="747" alt="Nuage de points détaillés" src="https://github.com/user-attachments/assets/14e9bc31-7dba-4c4b-89ff-c01cc2507c62" />

<img width="1280" height="691" alt="Carte" src="https://github.com/user-attachments/assets/c9e58b99-1298-4184-8498-0787ebab6e72" />
<img width="1381" height="763" alt="Nuage de points" src="https://github.com/user-attachments/assets/8cc38dbb-b262-456a-a2bf-ae272b75bb26" />






