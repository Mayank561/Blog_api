# Blog API

## Overview
This Blog API allows users to create and manage blog posts with authentication and data validation. The API is built with Node.js, Express, Sequelize, and MySQL.

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


