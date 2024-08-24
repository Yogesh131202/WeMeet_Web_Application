# WeMeet_Web_Application

WeMeet is a full-stack video meeting and chat application, designed to facilitate real-time communication without requiring participants to install any additional software. Built using the MERN stack, WeMeet offers seamless video conferencing, instant messaging, and secure user authentication and authorization.

Check out the live demo: [WeMeet Live](https://wemeetfrontend.onrender.com)

## Table of Contents
- Features
- Tech Stack
- Installation
- Usage
- Challenges Faced
- Contributing
- License
- Contact
  
## Features
- **Real-Time Video Meetings:** Secure and smooth video calls between participants.
- **Real-Time Messaging:** Chat functionality during meetings for better collaboration.
- **Authentication & Authorization:** User authentication using secure methods to protect your meetings.
- **Web-Based:** No need to install any additional software; works directly in your browser.
- **User-Friendly UI:** Built using Material UI for an intuitive user experience.
  
## Tech Stack
- **Frontend:** React.js, Material UI, CSS3
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-Time Communication:** WebSocket for video and chat features
- **Deployment:** Render
  
## Installation
To run this project locally, follow these steps:

1 **Clone the repository:**
  
```bash
git clone https://github.com/Yogesh131202/WeMeet_Web_Application.git
```

2 **Navigate to the project directory:**

```bash
cd WeMeet_Web_Application
```
3 **Install the required dependencies for both the frontend and backend:**

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

4 **Set up environment variables:**
Create a .env file in the backend directory and add the following:

```bash
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```
5 **Run the application:**

```bash
# Run the backend
cd backend
npm start

# Run the frontend
cd frontend
npm start
```

6 **Open your browser:**
Visit http://localhost:3000 to use WeMeet.

## Usage
- **Create a Meeting:** Users can create a meeting and invite others to join using a generated link.
- **Join a Meeting:** Participants can join a meeting using the shared link.
- **Real-Time Chat:** During the meeting, users can chat with each other.
- **Authentication:** Sign up or log in to create and join meetings.
  
## Challenges Faced
During the development of WeMeet, I faced the challenge of integrating WebSocket to handle real-time video and chat functionality. Learning and implementing WebSocket for real-time communication was a significant hurdle, but it allowed me to gain a deeper understanding of asynchronous operations and how to maintain persistent connections.

## Contributing
Contributions are welcome! Here's how you can help:

1. Fork the project.
2. Create a new branch **(git checkout -b feature-name).**
3. Commit your changes **(git commit -m 'Add some feature').**
4. Push to the branch **(git push origin feature-name).**
5. Create a new Pull Request.

## Contact
For any inquiries, feel free to reach out:

Email: yogeshsbhagat1312@gmail.com
GitHub: [Yogesh Bhagat](https://github.com/Yogesh131202/)
