# 🌾 Cyber-Resilient Infrastructure for Agriculture  
AI-Driven Anomaly Detection & Security Monitoring

## Project Overview
This project implements a cyber-resilient security monitoring system for agricultural infrastructure.  
It continuously monitors system events such as user actions, device activity, and sensor telemetry, and applies machine learning–based anomaly detection to proactively identify suspicious or abnormal behavior.
The system focuses on:
- Proactive security instead of reactive alerts
- Explainable anomaly detection
- System-level observability
- Resilience and scalability
The architecture is extensible to healthcare systems and smart urban infrastructure.
---
## Features
- Event-driven security monitoring
- Unsupervised anomaly detection using Isolation Forest
- Continuous anomaly scoring with severity levels
- Human-readable anomaly explanations
- Canonical behavior validation (Action × Asset × Resource)
- Dashboard-ready APIs
- Modular backend and ML integration

---
## Tech Stack

### Frontend
- HTML
- CSS
- AngularJS
### Backend
- Django (REST APIs)
### Database
- MySQL
### Machine Learning
- NumPy
- Pandas
- Scikit-learn (Isolation Forest)
- Seaborn
- Pickle (model persistence)
---

## Setup & Run Locally
### Clone the Repository
bash
  python -m venv venv
  source venv/bin/activate        # macOS / Linux
  venv\Scripts\activate           # Windows
Install Dependencies
  pip install -r requirements.txt
Configure Environment Variables
Create a .env file in the root directory.
  touch .env
  SECRET_KEY=your_django_secret_key
  DEBUG=True
  DB_NAME=security_db
  DB_USER=root
  DB_PASSWORD=your_password
  DB_HOST=localhost
  DB_PORT=3306
Apply Migrations
  python manage.py makemigrations
  python manage.py migrate
Run the Server
  python manage.py runserver
Backend will run at:
  http://127.0.0.1:8000/
  
##Test Login Credentials (Demo Only)
  userID: FARMER_001
  Password: ramesh@123

##Basic Error Handling
  Invalid requests return appropriate HTTP error codes
  ML inference failures are safely handled with fallback responses
  Database integrity errors are logged and reported
  Invalid action–asset–resource combinations are flagged as anomalies

##Security & Secrets Confirmation
  No secrets, credentials, or API keys are committed to the repository
  All sensitive configuration is managed via environment variables
  .env file is excluded using .gitignore
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
