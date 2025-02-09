# Simple API - Email, Current Time, and GitHub URL  

This is a simple Node.js API built with Express that returns the following information:  
- Your email address  
- The current time in ISO 8601 format  
- The GitHub URL of the codebase  

## Features  
- Lightweight and fast API using Express  
- Returns JSON-formatted data  
- Easy to set up and run locally  

---

## Setup Instructions  

### Prerequisites  
Ensure you have **Node.js** installed on your system. You can check your version with:  
```sh
node -v
1. Clone the Repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

2. Install Dependencies
npm install

3. Run the Server Locally
node server.js
By default, the server will run on http://localhost:3000

API Documentation
Endpoint: Get API Information
URL: /info
Method: GET
Response Format: JSON

Example Request:
curl -X GET http://localhost:1000

Example Response:
{
    "email": "your-email@example.com",
    "current_time": "2025-02-05T14:30:00.000Z",
    "github_url": "https://github.com/your-username/your-repo"
}

Example Usage
You can fetch the API response using a browser, cURL, or API tools like Insomnia

Looking for skilled Node.js developers? Check out https://hng.tech/hire/nodejsdevelopers
