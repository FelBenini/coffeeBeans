# Coffee Beans - A Communitary Blogging Platform

Coffee Beans is a full-stack web application built using the MERN stack that provides users with a platform to share their thoughts, ideas and opinions through blog posts. Users can read, create, edit and delete posts, as well as comment on posts created by others. The platform is designed to be intuitive, user-friendly and responsive.

## Features

- User authentication and authorization using JWT tokens
- Ability for users to create, edit, delete and view blog posts
- Pagination to handle large numbers of posts

## Technologies Used

- MongoDB: a document-oriented NoSQL database used for data storage
- Mongoose: a MongoDB object modeling tool used to simplify interactions with MongoDB
- ExpressJS: a Node.js web application framework used for building the REST API
- ReactJS: a JavaScript library used for building the user interface
- NodeJS: a JavaScript runtime environment used for server-side programming
- JWT: JSON Web Tokens used for user authentication and authorization
- Multer: a Node.js middleware used for handling multipart/form-data, used for file uploads
- Material-UI: a React UI framework used for styling components
- Helmet: a Node.js middleware used for securing HTTP headers
- CORS: a Node.js middleware used for enabling Cross-Origin Resource Sharing (CORS)
- cookie-parser: a Node.js middleware used for parsing cookies in incoming requests

## Installation

To run the application locally, you need to have Node.js and MongoDB installed on your system.

1. Clone the repository:

```bash
git clone https://github.com/FelBenini/coffeeBeans.git
```
2. Navigate to the server directory and install dependencies:
```bash
cd backend
npm install
```
3. Create a .env file in the server directory and set the following variables:
```makefile
SECRET_KEY=<your secret jwt key>
```
4. Start the server
```bash
npm start
```
5. Navigate to the client directory and install dependencies:
```bash
cd ../frontend
npm install
```
6. Start the client
```bash
npm start
```
7. Open the browser and navigate to http://localhost:3000 to see the application running.