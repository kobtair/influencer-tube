

# Project Title

## Table of Contents

1. Introduction
3. Technologies Used
4. System Architecture
5. Installation
6. Configuration
7. Usage
8. Directory Structure
13. Conclusion

---

### 1. Introduction

Influencer Tube is a web application designed to help businesses to find the right influencer which matches their business goals and needs.Social media marketing has become extremely popular in recent years. Marketing through influencers is a very powerful advertising tool. However, the issue 
is there are many influencers out there, this makes the process of selection difficult for businesses. This is what 
our project “Influencer Tube” is designed for/ This report will show the initial interface designs, information 
architecture , branding and style guide and functionalities of the web application in accordance to the client’s 
requirements. Our initial project requirement from the client was to design a web application with a strong 
database that would provide personalized recommendation of influencers to businesses and which would also 
display fan statistics. Our team has taken constant feedback from clients and has done thorough research on 
competitors to make it different from them and create a unique selling point. We’ve made the design very  simple and easy to use


### 2. Technologies Used

List of technologies used in the project, including versions:

- MongoDB
- Express.js
- React.js
- Node.js

### 3. System Architecture


The MERN (MongoDB, Express.js, React.js, Node.js) architecture for our influencer website is designed to provide a scalable, efficient, and maintainable solution for managing user data, content creation, and interaction with followers.

### Overview

The system consists of four main components:

1. **Frontend (React.js):** The frontend is responsible for presenting the user interface to the influencers and their followers. It handles user interactions, displays content, and communicates with the backend API to fetch and update data.

2. **Backend (Node.js with Express.js):** The backend serves as the core of the application, handling data storage, business logic, and authentication. It exposes RESTful APIs that the frontend consumes to perform CRUD operations on user accounts, posts, comments, etc.

3. **Database (MongoDB):** MongoDB is used as the database system to store various types of data, including user profiles, posts, comments, and other relevant information. Its flexibility and scalability make it suitable for handling the dynamic nature of influencer content.

4. **Authentication and Authorization:** The system implements authentication and authorization mechanisms to ensure secure access to user accounts and data. JSON Web Tokens (JWT) are used for authentication, and access control is enforced at the API level.

### Interaction Flow

1. **User Interaction:** When a user interacts with the frontend interface, such as browsing posts, liking or commenting on content, or updating their profile, the frontend sends requests to the backend API.

2. **Backend Processing:** The backend receives the requests, processes them according to the business logic, and interacts with the MongoDB database to fetch or update data as necessary.

3. **Database Operations:** MongoDB handles data storage and retrieval operations efficiently. It stores user profiles, posts, comments, and other relevant information in collections organized according to their respective schemas.

4. **Response Generation:** Once the backend completes the requested operations, it generates an appropriate response, typically in the form of JSON data, and sends it back to the frontend.

5. **Client Rendering:** The frontend receives the response from the backend and updates the user interface accordingly, reflecting the changes made to the data or displaying new content fetched from the server.

### Scalability and Performance Considerations

- **Horizontal Scalability:** The system architecture is designed to be horizontally scalable, allowing for easy expansion by adding more instances of the frontend and backend servers behind a load balancer to distribute incoming traffic.

- **Caching:** To improve performance and reduce database load, caching mechanisms can be implemented at various levels, such as caching frequently accessed data or using a content delivery network (CDN) to cache static assets.

- **Optimized Queries:** MongoDB queries are optimized to minimize response times and maximize efficiency. Indexes are created on frequently queried fields, and aggregation pipelines are used for complex data manipulations.

### Security Considerations

- **Data Encryption:** All sensitive data, including user credentials and authentication tokens, are encrypted both in transit and at rest to prevent unauthorized access.

- **Input Validation:** Input validation is performed at both the frontend and backend to prevent injection attacks and ensure the integrity of user-supplied data.

- **Rate Limiting:** Rate limiting mechanisms are implemented to prevent abuse and protect against denial-of-service (DoS) attacks by limiting the number of requests a user can make within a certain time period.

---

This system architecture provides a robust foundation for building and scaling a MERN-based influencer website while addressing key considerations related to performance, scalability, and security.

### 4. Installation


### For running a Node.js project:

#### Prerequisites:
- Node.js installed on your machine.

#### Instructions:
1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.

5. Run `npm run dev` to start the server.
6. The server will start on the port specified in the `.env` file.

#### Note:
- If you need to modify environment variables, do so in the `.env` file.

### For running a React project:

#### Prerequisites:
- Node.js installed on your machine.

#### Instructions:
1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Once the installation is complete, run `npm start` to start the development server.
5. Open your browser and navigate to `http://localhost:3000` (or another port if specified).

#### For Production Build:
- If you want to build the project for production, run `npm run build`. This will create a build folder with optimized production-ready code.

#### Note:
- Make sure the API endpoints in the React project match the endpoints of your Node.js server if applicable.

### 5. Configuration

Check if there is a `.env` file in the root directory. If not, create one and add your secrets.

### 6. Usage

1. Discover Influencers: Users can discover influencers that match their interests by using the search bar or browsing categories.

2. Filter Influencers: Users can filter influencers based on their occupation, location, number of followers, 
interaction rate, and more.
3. View Influencer Profiles: Users can view influencers' profiles, social media accounts, portfolios, contact 
information, and more.
4. Contact Influencers: Users can contact Influencers by sending them a private message or email.
5. Users can discover Influencers they are interested in by using the search bar or browsing categories.
6. Users can filter influencers based on their occupation, location, number of followers, interaction rate, 
etc.
7. sers can view influencers' profiles, social media accounts, portfolios, contact information, and more.
8. Users can contact influencers by sending them a private message.

### 7. Directory Structure

Overview of the project's directory structure, including brief descriptions of each directory and its contents.

```
/
  |- client/
  |   |- src/
  |   |- public/
  |- server/
  |   |- utils/
  |   |- routes/
  |   |- ...
  |- ...
```

### 8. Conclusion

In conclusion, we value user feedback and after our project is finalised we would like to give it for testing 
and gather feedback from users and our target audiences. Our project aim is to meet our client’s 
expectations and creat a web application which would be helpful to the society.


