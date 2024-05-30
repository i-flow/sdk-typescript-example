# i-flow SDK Typescript Example

This example kit provides a robust and professional implementation of the i-flow SDK using Express.js. It includes middleware for JSON parsing and authentication, a health check endpoint, a dynamic services endpoint, and example service endpoints.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository
```sh
git clone https://github.com/your-repo/sdk-example.git
```

2. Navigate to the project directory
```sh
cd sdk-example
```

3. Install the dependencies
```sh
npm install
```

4. Start the server
```sh
npm start
```

The server will be running on http://localhost:4000.

### API Endpoints
- ``GET /health``: Health check endpoint
- ``GET /services``: Get a list of available services
- ``GET /service1``: Example service 1 endpoint
- ``POST /service2``: Example service 2 endpoint

### Building and Running the Docker Container
1. Build the Docker image:
```sh
docker build -t sdk-example .
```

1. Build the Docker image:
```sh
docker run -p 4000:4000 sdk-example
```

### License
This project is licensed under the MIT License.