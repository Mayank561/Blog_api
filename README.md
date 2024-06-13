# Blog API
This is a simple Blog Post API built with Node.js, Express, and MySQL. The API allows users to register, login, and perform CRUD operations on blog posts. The API is secured with token-based authentication.


## Features
- User registration and login
- Create, retrieve, update, and delete blog posts
- Data validation for user inputs
- Token-based authentication using JWT

## Technologies Used
- Node.js
- Express
- MySQL
- JWT (JSON Web Token) for authentication
- bcryptjs for password hashing
- dotenv for environment variable management

## Prerequisites
- Node.js installed
- MySQL installed and running
- A MySQL database created

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
    
3. Set Up Environment Variables
   Create a .env file in the root of the project and add the following variables:

    ![Screenshot 2024-06-13 123737](https://github.com/Mayank561/Blog_api/assets/108197241/3bf0af33-c771-471c-9f78-0f34dd989a45)

4. Set Up the Database
   Create the necessary tables in your MySQL database:

    ```
    CREATE DATABASE blog;

    USE blog;

    CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
    );

    CREATE TABLE blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id)
    );

    5. Run the Server
      npm start
      The server should start on http://localhost:3000.
      ```

# Hosted API
  The API is also hosted online. You can access it at:

  https://blog-api-xqxj.onrender.com

# API Endpoints

## User Authentication

## Register
- URL: `/register`
- Method: POST
- Body:
  
    ![Screenshot 2024-06-13 125520](https://github.com/Mayank561/Blog_api/assets/108197241/ebfb702f-043a-468b-91a9-e8e513fc908e)

- Response:
  - 201 Created on success
  - 400 Bad Request if email or password is missing
  - 500 Internal Server Error on hashing or user creation error
 
## login
- URL: /login
- Method: POST
- Body:

    ![Screenshot 2024-06-13 125520](https://github.com/Mayank561/Blog_api/assets/108197241/ebfb702f-043a-468b-91a9-e8e513fc908e)

  - Response:
    - 200 OK with JWT token on success
    - 400 Bad Request if email or password is missing
    - 404 Not Found if user does not exist
    - 500 Internal Server Error on error

## Blog Posts
Create a New Blog Post
  - URL: /posts
  - Method: POST
  - Headers: Authorization: Bearer <token>
  - Body:

      ![Screenshot 2024-06-13 130215](https://github.com/Mayank561/Blog_api/assets/108197241/e8ee5c66-72b0-433a-a4d4-7a6f0466ef3e)

     - Response:
         - 201 Created on success
         - 400 Bad Request if title or content is missing
         - 500 Internal Server Error on error
      

     Retrieve All Blog Posts
      - URL: /posts
      - Method: GET
      - Response:
          - 200 OK with list of posts on success
          - 500 Internal Server Error on error
       
    Retrieve a Single Blog Post by ID
      - URL: /posts/:id
      - Method: GET
      - Response:
          - 200 OK with post data on success
          - 404 Not Found if post does not exist
          - 500 Internal Server Error on error

    Update an Existing Blog Post
      - URL: /posts/:id
      - Method: PUT
      - Headers: Authorization: Bearer <token>
      - Body:
        
         ![Screenshot 2024-06-13 131123](https://github.com/Mayank561/Blog_api/assets/108197241/6cd61498-ff6d-4af5-8277-524a3be425b5)

    - Response:
      - 200 OK on success
      - 400 Bad Request if title or content is missing
      - 404 Not Found if post does not exist
      - 500 Internal Server Error on error


        Delete a Blog Post
          - URL: /posts/:id
          - Method: DELETE
          - Headers: Authorization: Bearer <token>
          - Response:
            - 200 OK on success
            - 404 Not Found if post does not exist
            - 500 Internal Server Error on error
                    



# Demo Video

https://github.com/Mayank561/Blog_api/assets/108197241/e60c4eb5-786e-4cb7-aaa0-d6aae332ddd4


