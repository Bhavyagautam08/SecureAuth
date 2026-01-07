# SecureAuth

SecureAuth is a robust Node.js authentication backend designed to provide secure user registration and login functionalities. It leverages MongoDB for data storage and follows best practices for security and code organization.

## Features

- **User Registration**: Securely create new user accounts.
- **User Login**: Authenticate existing users.
- **Secure Password Storage**: Uses hashing to protect user passwords.
- **RESTful API**: Clean and intuitive API endpoints.
- **Modular Structure**: Organized codebase for scalability and maintainability.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (implied from structure)
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens) (implied)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Bhavyagautam08/SecureAuth.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd SecureAuth
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Configuration

Create a `.env` file in the root directory and add your environment variables:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/secureauth
JWT_SECRET=your_jwt_secret
```

### Running the Application

Start the server:

```bash
npm start
```

## Project Structure

```
src/
├── config/         # Database and other configurations
├── controller/     # Request handlers
├── models/         # Database models
├── routes/         # API routes
└── app.mjs         # Entry point
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
