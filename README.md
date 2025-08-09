# 🔗 MERN Stack URL Shortener

A full-stack URL shortener application built with MongoDB, Express.js, React, and Node.js. Transform long URLs into short, manageable links with click tracking and analytics.

![URL Shortener Banner](https://via.placeholder.com/800x400/667eea/white?text=URL+Shortener+%7C+MERN+Stack)

## ✨ Features

- 🔗 **URL Shortening**: Convert long URLs into short, shareable links
- 📊 **Click Tracking**: Monitor how many times each link has been accessed
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 📋 **Copy to Clipboard**: One-click copying of shortened URLs
- 🛡️ **Input Validation**: Comprehensive URL format validation
- 📈 **Admin Dashboard**: Manage and analyze all shortened URLs
- 🗑️ **URL Management**: Delete unwanted links from the dashboard
- ⚡ **Fast Redirects**: Lightning-fast URL redirection
- 🌐 **MongoDB Atlas**: Cloud database integration
- 
## 🛠️ Tech Stack

### Frontend
- ⚛️ **React 18** - User interface library
- 🛣️ **React Router v6** - Client-side routing
- 🎨 **CSS3** - Modern styling with Flexbox and Grid
- 📱 **Responsive Design** - Mobile-first approach

### Backend
- 🟢 **Node.js** - JavaScript runtime environment
- 🚀 **Express.js** - Web application framework
- 🍃 **MongoDB Atlas** - Cloud database service
- 🏗️ **Mongoose** - MongoDB object modeling
- 🔧 **nanoid** - URL-safe unique string generator
- 🌐 **CORS** - Cross-origin resource sharing

### Deployment & Tools
- 🌐 **Vercel** - Frontend and backend hosting
- ☁️ **MongoDB Atlas** - Database hosting
- 🔄 **GitHub** - Version control
- 📦 **npm** - Package management

## 📁 Project Structure



url-shortener/
├── client/ # React frontend
│ ├── public/
│ │ ├── index.html
│ │ ├── favicon.ico
│ │ ├── manifest.json
│ │ └── robots.txt
│ ├── src/
│ │ ├── components/
│ │ │ ├── Navbar.js # Navigation component
│ │ │ ├── UrlForm.js # URL input form
│ │ │ └── ShortenedUrl.js # Results display
│ │ ├── pages/
│ │ │ ├── Home.js # Main page
│ │ │ └── Admin.js # Admin dashboard
│ │ ├── App.js # Main app component
│ │ ├── App.css # Global styles
│ │ ├── index.js # React entry point
│ │ ├── index.css # Base styles
│ │ └── config.js # API configuration
│ ├── package.json
│ └── vercel.json # Vercel config
├── server/ # Node.js backend
│ ├── models/
│ │ └── Url.js # MongoDB schema
│ ├── routes/
│ │ ├── api.js # API endpoints
│ │ └── redirect.js # URL redirection
│ ├── server.js # Express server
│ ├── package.json
│ ├── vercel.json # Vercel config
│ └── .env # Environment variables
├── .gitignore
├── LICENSE
└── README.md


## 🚦 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB Atlas** account
- **Git** version control
- **Modern web browser**

### Local Installation

1. **Clone the repository**

2. **Install backend dependencies**

3. **Install frontend dependencies**

4. **Set up MongoDB Atlas**
- Create account at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
- Create a free cluster
- Create database user
- Whitelist IP addresses
- Get connection string

5. **Configure environment variables**

Create `server/.env`:

6. **Start development servers**

**Backend** (Terminal 1):

**Frontend** (Terminal 2):

7. **Open your browser**

Navigate to `http://localhost:3000`

## 📚 API Documentation

### Public Endpoints

#### Shorten URL

**Response:**

#### Redirect URL
Redirects to the original URL and increments click count.

### Admin Endpoints

#### Get All URLs

**Response:**

#### Delete URL

## 🗄️ Database Schema

### URL Model

