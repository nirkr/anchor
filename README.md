# Marvel Movie Data Explorer

## Project Overview

This application provides a simple API for managing spreadsheets where each sheet contains column definitions and associated cell data. The data is stored in a MongoDB database, and the application is built using Node.js and Express, with type safety provided by TypeScript. The design allows for flexibility in handling varying amounts of cell data associated with each sheet.

## Setup Instructions

### Prerequisites
- **Docker** and **Docker Compose**: Ensure Docker is installed and running on your development machine.
- **MongoDB**: Ensure you have MongoDB installed locally or access to a MongoDB Atlas instance.
- **Node.js**: version 14 or later.
- **npm**: Node package manager, which comes with Node.js.

### Running the Application
1. **Clone the Repository**:
   git clone git@github.com:nirkr/anchor.git
   cd anchor

2. **Build and Start Services**: 
- Build and start all services:
   - docker-compose up --build
- install dependencies locally:
    - chmod +x install-dependencies.sh
    - ./install-dependencies.sh

3. **Set env varibles** - create .env file in the root level of the project. here are the env vars:
- MONGODB_URI=mongodb://localhost:27017
- PORT=3000

4. **Access the Application**:
API endpoints are available at `http://localhost:5000`.

## Technology Stack
- **Database**: 
    - MongoDB
    - Mongoose for object modeling and schema validation.
- **Server**: 
    - Node.js with Express
    - Typescript - enforce clear types for 3rd party api response types, our server's responses types etc, in addition to enable easy and clear future coding 
    - Input validation - using joy library - verify query string is passed to the endpoint's logics
    - use SQL TRANSACTIONS for multiple sql commands for single api request - to handle data consistency also in case of operation failure
    - error handling: each controller request will return object of { status, data, error }
      each controller will collect the potential error from the components invoked (service calls to TMDB , requests to DB etc) => will return the error
- **Containerization**: Docker and Docker-Compose

## Assumptions and Design Decisions

1. **Data Fetching Strategy**:

2. **Database Schema Overview**:
 - Sheet Document:
    - Contains an array of column definitions.
    - Each cell is represented as a subdocument within the sheet.
3. **assumptions**:
    - The application assumes that the average number of cells per sheet will remain manageable, thus allowing embedding for performance and ease of   access.
    - Future enhancements could include support for more complex cell types or validation methods based on specific use cases.
    - Cells will be updated frequently, so embedding allows for efficient updates without needing to handle multiple lookups.
    
4. **Dockerization**:
- The app is dockerized and easy to install and use on various machines. these are the docker containers:
    - server
    - postgress database
all is maintained and built easily running the docker-compose orchestrator

5. **Deployment** - options for FUTURE
    - ci/cd - manage deployment pipelines
    - manage env vars in github actions - right now i added that in the `Running the Application` section