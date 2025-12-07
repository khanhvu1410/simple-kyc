# Simple KYC - Know Your Customer Application

A web-based KYC (Know Your Customer) submission and review system built with React.js and JSON Server.

## 📋 Overview

This application allows users to submit their financial and personal information for KYC verification, and enables officers to review and approve/reject submissions.

## 🚀 Technologies Used

- **Frontend**: React.js with React Router
- **Backend**: JSON Server (Mock REST API)
- **Form Management**: React Hook Form
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## 📁 Project Structure

```
project-root/
├── client/          # React frontend application
│   ├── src/
│   ├── package.json
│   └── ...
├── server/          # JSON Server backend
│   ├── db.json     # Database file
│   ├── package.json
│   └── ...
└── README.md
```

## 🛠️ Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install Client Dependencies**

   ```bash
   cd client
   npm install
   ```

3. **Install Server Dependencies**
   ```bash
   cd ../server
   npm install
   ```

## ▶️ Running the Application

### Start the Backend Server

```bash
cd server
npm start
```

The JSON Server will run on `http://localhost:8000` (or the port specified in your configuration)

### Start the Frontend Client

Open a new terminal window:

```bash
cd client
npm run dev
```

The React application will run on `http://localhost:5173` (or the port specified by Vite)

## 👤 Test Accounts

### Officer Account

- **Email**: `officer123@gmail.com`
- **Password**: `officer123`
- **Role**: Officer (Can review and approve/reject submissions)

### Normal User Accounts

**User 1:**

- **Email**: `khanh123@gmail.com`
- **Password**: `khanh123`
- **Role**: Normal User (Can submit KYC forms)

**User 2:**

- **Email**: `linhtran98@gmail.com`
- **Password**: `linh123`
- **Role**: Normal User

**User 3:**

- **Email**: `hoangminh2000@gmail.com`
- **Password**: `minh123`
- **Role**: Normal User

**User 4:**

- **Email**: `thuylee21@gmail.com`
- **Password**: `thuy123`
- **Role**: Normal User

## 📱 Features

### For Normal Users

- Register and login to the system
- Fill out comprehensive KYC forms including:
  - Basic information (name, date of birth)
  - Contact information (addresses, emails, phones)
  - Identification documents
  - Occupation history
  - Financial information (incomes, assets, liabilities, wealth sources)
  - Investment experience and risk tolerance
- View submission status
- Automatic calculation of net worth

### For Officers

- Review pending KYC submissions
- View submitted user information
- Approve or reject submissions
- Filter between reviewed and unreviewed submissions
- Click on submissions to view detailed KYC information

## 🔧 Configuration

### JSON Server Configuration

The server runs with the following default settings:

- **Port**: 8000
- **Database**: `server/db.json`
- **Routes**: RESTful API endpoints for users and user profiles

### Client Configuration

- **Development Server**: Vite dev server
- **API Base URL**: Configure in your API client to point to `http://localhost:8000`

## 📊 Database Structure

### Users Collection

```json
{
  "id": "string",
  "email": "string",
  "password": "string (hashed)",
  "role": "number (0: Normal User, 1: Officer)"
}
```

### User Profiles Collection

```json
{
  "id": "string",
  "userId": "string",
  "firstName": "string",
  "lastName": "string",
  "addresses": [],
  "emails": [],
  "phones": [],
  "documents": [],
  "occupations": [],
  "incomes": [],
  "assets": [],
  "liabilities": [],
  "wealthSources": [],
  "totalNetWorth": "number",
  "status": "number (0: Pending, 1: Approved, 2: Rejected)"
}
```

## 🎨 Key Components

- **Authentication**: Login system with role-based access
- **KYC Form**: Multi-section form with dynamic field arrays
- **Submissions Table**: List view of all submissions with status indicators
- **Confirm Dialog**: Confirmation modal for approve/reject actions
- **Admin Layout**: Fixed header and sidebar navigation

## 🔐 Security Notes

⚠️ **Important**: This is a demonstration project using JSON Server. In production:

- Use proper password hashing (bcrypt, argon2)
- Implement JWT or session-based authentication
- Use HTTPS for all communications
- Add proper input validation and sanitization
- Implement CSRF protection
- Use environment variables for sensitive data

## 🐛 Troubleshooting

### Port Already in Use

If you get a port conflict error:

- Change the port in the package.json scripts
- Or kill the process using the port

### CORS Issues

JSON Server should handle CORS by default, but if you encounter issues:

- Check that both servers are running
- Verify the API base URL in your client configuration

### Dependencies Issues

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 Development

### Adding New Features

1. Create new components in `client/src/components`
2. Add new routes in the router configuration
3. Create API hooks in `client/src/hooks`
4. Update `server/db.json` for new data structures

### Code Structure

- `/client/src/pages`: Page components
- `/client/src/components`: Reusable components
- `/client/src/hooks`: Custom React hooks
- `/client/src/constant`: Constants and configuration
- `/server`: Backend server and database

## 📄 License

This project is for educational purposes.

## 👥 Support

For issues or questions, please open an issue in the repository.

---

**Happy Coding! 🚀**
