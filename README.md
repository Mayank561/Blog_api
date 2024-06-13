
    <h1>Blog API</h1>

    <h2>Overview</h2>
    <p>This Blog API allows users to create and manage blog posts with authentication and data validation. The API is built with Node.js, Express, Sequelize, and MySQL.</p>

    <h2>Features</h2>
    <ul>
        <li>User authentication (signup and login)</li>
        <li>Create, read, update, and delete blog posts</li>
        <li>Data validation for user inputs</li>
        <li>Token-based authentication using JWT</li>
    </ul>

    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#configuration">Configuration</a></li>
        <li><a href="#api-endpoints">API Endpoints</a>
            <ul>
                <li><a href="#authentication">Authentication</a></li>
                <li><a href="#blog-posts">Blog Posts</a></li>
            </ul>
        </li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#code-quality">Code Quality</a></li>
        <li><a href="#best-practices">Best Practices</a></li>
        <li><a href="#license">License</a></li>
    </ul>

    <h2 id="installation">Installation</h2>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/yourusername/blog-api.git
cd blog-api</code></pre>
        </li>
        <li>Install the dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Start the MySQL server and create a database named <code>blog_db</code>.</li>
        <li>Configure the database connection settings in <code>config/config.js</code>.</li>
        <li>Run the migrations to set up the database schema:
            <pre><code>npx sequelize-cli db:migrate</code></pre>
        </li>
        <li>Start the server:
            <pre><code>npm start</code></pre>
        </li>
    </ol>

    <h2 id="configuration">Configuration</h2>
    <p>Configure your database connection and other environment variables in the <code>config/config.js</code> file:</p>
    <pre><code>module.exports = {
    development: {
        username: 'root',
        password: '',
        database: 'blog_db',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'mysql',
    },
};</code></pre>

    <h2 id="api-endpoints">API Endpoints</h2>

    <h3 id="authentication">Authentication</h3>

    <h4>Signup</h4>
    <p><strong>Endpoint:</strong> <code>POST /api/auth/signup</code></p>
    <p><strong>Request Body:</strong></p>
    <pre><code>{
    "email": "user@example.com",
    "password": "yourpassword"
}</code></pre>
    <p><strong>Response:</strong></p>
    <pre><code>{
    "auth": true,
    "token": "your.jwt.token"
}</code></pre>
    <img src="signup_endpoint.png" alt="Signup Endpoint">

    <h4>Login</h4>
    <p><strong>Endpoint:</strong> <code>POST /api/auth/login</code></p>
    <p><strong>Request Body:</strong></p>
    <pre><code>{
    "email": "user@example.com",
    "password": "yourpassword"
}</code></pre>
    <p><strong>Response:</strong></p>
    <pre><code>{
    "auth": true,
    "token": "your.jwt.token"
}</code></pre>
    <img src="login_endpoint.png" alt="Login Endpoint">

    <h3 id="blog-posts">Blog Posts</h3>

    <h4>Create a Post</h4>
    <p><strong>Endpoint:</strong> <code>POST /api/posts</code></p>
    <p><strong>Request Body:</strong></p>
    <pre><code>{
    "title": "Post Title",
    "content": "Post content"
}</code></pre>
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer your.jwt.token</code></pre>
    <p><strong>Response:</strong></p>
    <pre><code>{
    "id": 1,
    "title": "Post Title",
    "content": "Post content",
    "userId": 1,
    "createdAt": "2024-06-12T00:00:00.000Z",
    "updatedAt": "2024-06-12T00:00:00.000Z"
}</code></pre>
    <img src="create_post_endpoint.png" alt="Create Post Endpoint">

    <h4>Get All Posts</h4>
    <p><strong>Endpoint:</strong> <code>GET /api/posts</code></p>
    <p><strong>Response:</strong></p>
    <pre><code>[
    {
        "id": 1,
        "title": "Post Title",
        "content": "Post content",
        "userId": 1,
        "createdAt": "2024-06-12T00:00:00.000Z",
        "updatedAt": "2024-06-12T00:00:00.000Z"
    },
    ...
]</code></pre>
    <img src="get_all_posts_endpoint.png" alt="Get All Posts Endpoint">

    <h4>Get a Single Post</h4>
    <p><strong>Endpoint:</strong> <code>GET /api/posts/:id</code></p>
    <p><strong>Response:</strong></p>
    <pre><code>{
    "id": 1,
    "title": "Post Title",
    "content": "Post content",
    "userId": 1,
    "createdAt": "2024-06-12T00:00:00.000Z",
    "updatedAt": "2024-06-12T00:00:00.000Z"
}</code></pre>
    <img src="get_single_post_endpoint.png" alt="Get Single Post Endpoint">

    <h4>Update a Post</h4>
    <p><strong>Endpoint:</strong> <code>PUT /api/posts/:id</code></p>
    <p><strong>Request Body:</strong></p>
    <pre><code>{
    "title": "Updated Post Title",
    "content": "Updated post content"
}</code></pre>
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer your.jwt.token</code></pre>
    <p><strong>Response:</strong></p>
    <pre><code>{
    "id": 1,
    "title": "Updated Post Title",
    "content": "Updated post content",
    "userId": 1,
    "createdAt": "2024-06-12T00:00:00.000Z",
    "updatedAt": "2024-06-12T00:00:00.000Z"
}</code></pre>
    <img src="update_post_endpoint.png" alt="Update Post Endpoint">

    <h4>Delete a Post</h4>
    <p><strong>Endpoint:</strong> <code>DELETE /api/posts/:id</code></p>
    <p><strong>Headers:</strong></p>
    <pre><code>Authorization: Bearer your.jwt.token</code></pre>
    <p><strong>Response:</strong></p>
    <pre><code>{
    "message": "Post deleted successfully"
}</code></pre>
    <img src="delete_post_endpoint.png" alt="Delete Post Endpoint">

    <h2 id="usage">Usage</h2>
    <p>To use the API, follow the installation and configuration instructions above, then start the server and use the provided endpoints to interact with the API.</p>

    <h2 id="code-quality">Code Quality</h2>
    <p>The code adheres to best practices for readability and maintainability, including proper indentation, meaningful variable names, and modular structure. ESLint is used to enforce code standards.</p>

    <h2 id="best-practices">Best Practices</h2>
    <ul>
        <li>Secure your API endpoints with JWT authentication.</li>
        <li>Validate user inputs to prevent SQL injection and other attacks.</li>
        <li>Use environment variables to manage sensitive information.</li>
        <li>Keep your dependencies up to date.</li>
        <li>Write unit tests for critical parts of your application.</li>
    </ul>

    <h2 id="license">License</h2>
    <p>This project is licensed under the MIT License.</p>

    <h2>Video Tutorial</h2>
    <p>Watch the video below for a complete tutorial on how to set up and use this Blog API.</p>
    <video width="320" height="240" controls>
        <source src="tutorial_video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
