# User Management Backend API Documentation

This API allows users to register and login to a user management system.

## Endpoints

### Register a User

Register a new user by providing an email and password.

**URL:** `/register`

**Method:** `POST`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
- Status Code: `201 Created`
- Body:
  ```json
  {
    "message": "User registered successfully"
  }
  ```

### User Login

Login a user by providing an email and password. This endpoint returns a JWT token.

**URL:** `/login`

**Method:** `POST`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
- Status Code: `200 OK`
- Body:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjA5Njg1M2E0YzU1ZTAwMTU4N2ZiZDQiLCJpYXQiOjE2MjY4OTMzOTcsImV4cCI6MTYyNjg5NjI5N30.6Jav0hJr3Bd9LleNY2azCgTP7U1zzAlxV9SLEPCBd9o"
  }
  ```

## Error Handling

If an error occurs during the API calls, the server will respond with an appropriate error message.

- Status Code: `400 Bad Request`
- Body:
  ```json
  {
    "message": "User already exists"
  }
  ```

- Status Code: `401 Unauthorized`
- Body:
  ```json
  {
    "message": "Invalid credentials"
  }
  ```

- Status Code: `500 Internal Server Error`
- Body:
  ```json
  {
    "message": "An error occurred"
  }
  ```

## Setup and Usage

1. Clone the repository or download the source code.
2. Install the dependencies by running `npm install`.
3. Make sure MongoDB is running on your system.
4. Update the MongoDB connection URL and JWT secret key in the `userController.js` file.
5. Start the server by running `npm start`.
6. Access the API endpoints using a tool like Postman.

Please note that this is a basic example, and you can enhance the functionality, add more endpoints, and implement additional features as per your requirements.

Remember to handle errors properly, validate user input, and ensure the security of your application.

If you have any questions or need further assistance, please let me know!