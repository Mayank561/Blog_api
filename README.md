# Blog API

## Overview
This Blog API allows users to create and manage blog posts with authentication and data validation. The API is built with Node.js, Express, and MySQL.

## Features
- User authentication (signup and login)
- Create, read, update, and delete blog posts
- Data validation for user inputs
- Token-based authentication using JWT

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Blog Posts](#blog-posts)
- [Usage](#usage)
- [Code Quality](#code-quality)
- [Best Practices](#best-practices)
- [License](#license)
- [Video Tutorial](#video-tutorial)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/blog-api.git
    cd blog-api
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
 3. Start the MySQL server and create a database named `blog_db`.
4. Configure the database connection settings in `config/config.js`.
5. 5. Run the migrations to set up the database schema:
    ```bash
    npx sequelize-cli db:migrate
    ```
6. Start the server:
    ```bash
    npm start
    ```

## Configuration
Configure your database connection and other environment variables in the `config/config.js` file:
```javascript
module.exports = {
    development: {
        username: 'root',
        password: '',
        database: 'blog_db',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    production: {
       const connection = mysql.createConnection({
       host: process.env.MYSQL_HOST,
       user: process.env.MYSQL_USER,
       password: process.env.MYSQL_PASSWORD,
       database: process.env.MYSQL_DATABASE,
       port: process.env.MYSQL_PORT
});
    },
};
```

## API Endpoints

### Authentication

#### Register

Endpoint: POST /api/auth/register

Request Body:

![Screenshot 2024-06-13 121536](https://github.com/Mayank561/Blog_api/assets/108197241/c7e6d612-965b-4a1f-8b36-7ef437426a3e)

### Login

Endpoint: POST /api/auth/login

Request Body:

![Screenshot 2024-06-13 121536](https://github.com/Mayank561/Blog_api/assets/108197241/c7e6d612-965b-4a1f-8b36-7ef437426a3e)


# Blog Posts

## Create a Post

Endpoint: POST /api/posts

Request Body:

![Screenshot 2024-06-13 121959](https://github.com/Mayank561/Blog_api/assets/108197241/c2f58ab4-ba5f-4c6e-8a4b-77daaa1300cf)


### Get All Posts

Endpoint: GET /api/posts

Response:

![Screenshot 2024-06-13 115811](https://github.com/Mayank561/Blog_api/assets/108197241/3711e410-56da-4bb5-92d1-71fff50700c8)

### Get a Single Post
Endpoint: GET /api/posts/:id

Response:

![Screenshot 2024-06-13 120248](https://github.com/Mayank561/Blog_api/assets/108197241/1065d0dd-d666-4c57-b1d1-830b7ad2d84d)


### Update a Post
Endpoint: PUT /api/posts/:id

Request Body:

![Screenshot 2024-06-13 120501](https://github.com/Mayank561/Blog_api/assets/108197241/1ac6cde9-7923-4447-b4d3-360782800146)


### Delete a Post
Endpoint: DELETE /api/posts/

Response:

![Screenshot 2024-06-13 120801](https://github.com/Mayank561/Blog_api/assets/108197241/652cd945-fab8-4620-8e66-60429158ecfd)



# Usage
To use the API, follow the installation and configuration instructions above, then start the server and use the provided endpoints to interact with the API.

# Code Quality
The code adheres to best practices for readability and maintainability, including proper indentation, meaningful variable names, and modular structure. ESLint is used to enforce code standards.

## Best Practices

