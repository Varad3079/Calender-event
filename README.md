# Project Setup

This guide provides step-by-step instructions to set up and run the project (both server and client).

---

## 📁 Base Directory Setup

1. Navigate to the base directory of the project.

2. Install server dependencies:

```bash
npm install


Create a .env file in the base directory with the following variables:

MONGO_URI=<your_mongodb_connection_string>
CLINT_URL=<your_client_url>
Replace <your_mongodb_connection_string> and <your_client_url> with actual values.

Start the development server:
npm run dev

Client Setup
Navigate to the client directory:
cd client

Install client dependencies:
npm install -f

Start the client:
npm start

✅ Your project is now running!
Server is running at: http://localhost:<your-server-port>

Client is running at: http://localhost:3000