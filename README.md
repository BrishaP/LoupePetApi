# Pet API - CRUD Operations and Automated Tests

## Overview

This project is a response to a technical exercise designed to showcase my ability to work independently, follow best practices, and create automated tests in alignment with software quality standards. The goal is to demonstrate my ability to build **API functions** and implement **automated testing frameworks** with a focus on reliability and maintainability.

The project implements **CRUD operations** for a pet management API (from the example provided in the Petstore API documentation). I used **JavaScript** to develop the API functions and **Jest** for automated testing, ensuring coverage for creating, retrieving, updating, and deleting resources. The tests simulate real-world scenarios by **mocking HTTP requests** using **Axios**, while validating error handling and edge cases.

Since the current implementation relies on a **sample API server** (without a real backend), no actual HTTP requests are made. Instead, **Axios** is used to simulate these requests in a controlled test environment.

In future iterations, I plan to integrate a more robust backend using **Express** and **Mongoose** with **MongoDB** for persistent data storage. This will allow me to implement end-to-end testing with tools like **Supertest**, while setting up a **CI/CD pipeline** to automate testing and deployment.

This project demonstrates my ability to:

- Write clean, modular code for API functions.
- Implement and maintain automated testing frameworks, ensuring reliability and correctness.
- Manage and test edge cases and error handling.

## Features

- Simulated CRUD functionality for managing pet records using mocked HTTP requests.
- **Axios** used to simulate HTTP requests in the tests.
- Unit tests implemented using **Jest**, covering success cases and various error handling scenarios.
- Follows the **Arrange-Act-Assert** pattern in testing for clarity and reliability.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Axios**: Used to simulate HTTP requests for testing purposes.
- **Jest**: Testing framework for writing unit tests.
- **ESModules**: Used for modern JavaScript module import/export.

## Current Functionality

### API Functions:
- **POST /pets**: Simulate adding a new pet to the system.
- **GET /pets/{id}**: Simulate retrieving a pet by its ID.
- **PUT /pets/{id}**: Simulate updating the details of a pet.
- **DELETE /pets/{id}**: Simulate deleting a pet from the system.

### Tests:
- Comprehensive tests for each CRUD operation using **Jest**.
- Mocked **Axios** calls to simulate HTTP requests in the unit tests.
- Test cases handle successful operations, network errors, validation errors, and edge cases like invalid IDs.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/pet-api.git

2. Navigate to project directory:

   ```bash
   cd pet-api

3. Navigate to project directory:

   ```bash
   cd pet-api

4. Run the tests::

   ```bash
   npm test

## Future Plans and Roadmap

In the next phases, I plan to transform this project into a more complex, fully-featured application. Here’s a breakdown of my future goals:

### 1. Backend Development

- **Use MongoDB, Mongoose, and Express**:
  - Replace the current `petAPI` functions with a fully integrated backend using **MongoDB** for persistent storage.
  - Use **Mongoose** as an ODM (Object Data Modeling) library to model data and interact with the database.
  - Build RESTful API endpoints using **Express** to manage CRUD operations for pets.
  - Implement validation, schema design, and middleware to ensure clean, secure, and robust data flow.

- **API Testing with Supertest**:
  - Move away from mocked `axios` tests.
  - Use **Supertest** to directly test the API endpoints for integration testing.
  - Ensure comprehensive coverage, including error handling, validation, and edge cases.

### 2. Frontend Development with Expo (React Native)

- **Turn the API into a Mobile App**:
  - Create a mobile interface for the **Pet API** using **Expo** (React Native) to make it available as an app.
  - Connect the mobile app with the backend API to manage pets via the mobile UI.
  - Implement features like adding, viewing, updating, and deleting pets on the app.

- **Testing with Appium**:
  - Use **Appium** for end-to-end testing of the mobile app.
  - Ensure the mobile app works seamlessly across different devices and operating systems (iOS and Android).

### 3. CI/CD Pipeline

- **Implement Continuous Integration/Continuous Deployment (CI/CD)**:
  - Automate the development lifecycle with a CI/CD pipeline using **GitHub Actions**, **CircleCI**, or another CI/CD tool.
  - Automatically run tests (unit, integration, and E2E tests) on every code push or pull request.
  - Automate deployment to hosting services (for the backend) and mobile app stores (for the frontend).

### 4. Behavior-Driven Development (BDD) with Cucumber

- **Introduce BDD**:
  - Integrate **Cucumber** for BDD into the testing workflow, allowing for more human-readable tests.
  - Write feature files in **Gherkin** syntax for describing how the pet management system should behave.
  - Implement step definitions in **JavaScript** and run BDD tests alongside unit and integration tests.

### 5. Stretch Goal: Convert the Backend to Java

- **Migrate to Java**:
  - As a learning challenge and to broaden technical skills, convert the **Express + MongoDB** backend to Java.
  - Use **Spring Boot** as the framework for the backend API, handling all the CRUD operations and validations.
  - Maintain API functionality while leveraging Java’s object-oriented capabilities and strong typing.

---

### Why these choices?

- **MongoDB and Mongoose**: NoSQL database technology is well-suited for rapid development and scalability. Mongoose will help ensure structured data interaction.
- **Express**: Lightweight and fast for building RESTful APIs. It has a large ecosystem and integrates well with Node.js.
- **Supertest**: Makes it easy to test API endpoints directly in an integrated environment.
- **Expo (React Native)**: Perfect for building cross-platform mobile applications from a single codebase.
- **Appium**: A robust tool for mobile automation testing, allowing for comprehensive end-to-end testing of the mobile application.
- **CI/CD**: Automating testing and deployment ensures that the code is reliable and can be quickly shipped without manual intervention.
- **BDD and Cucumber**: Writing tests in natural language (Gherkin) ensures that both technical and non-technical team members can understand the tests.
- **Java**: Moving to a strongly-typed language like Java, using a framework like Spring Boot, will help further stretch technical skills and gain experience with a language that's heavily used in enterprise development.

---

### Timeline and Milestones

1. **MVP 1 (Next Iteration)**:
   - Implement **MongoDB** with **Mongoose** and **Express**.
   - Replace current `petAPI` logic with a fully integrated database-backed system.
   - Write **Supertest** tests for each endpoint.

2. **MVP 2**:
   - Build the mobile app using **Expo** and React Native.
   - Test the mobile app using **Appium**.

3. **MVP 3**:
   - Set up a **CI/CD pipeline** for the project.

4. **MVP 4**:
   - Implement **BDD with Cucumber**.

5. **MVP 5 (Stretch Goal)**:
   - Convert the backend to **Java** using Spring Boot.


### Potential File Structure/ Organisation:

/project-root  
│
├── /src                     # Core application files   
│   ├── /api                 # API-related files  
│   │   └── petAPI.js        # Handles CRUD operations for PetStore API (via Axios)  
│   ├── /helpers             # Utility functions  
│   │   └── apiHelper.js     # Reusable Axios request functions (e.g., GET, POST)  
│   └── index.js             # Entry point (if needed for app)  
│  
├── /tests                   # All test-related files  
│   ├── /unit                # Jest unit tests  
│   │   └── pet.test.js      # Unit tests for CRUD operations on pets  
│   ├── /bdd                 # BDD feature and step files  
│   │   ├── pet.feature      # Cucumber feature file (Gherkin syntax)  
│   │   └── petSteps.js      # Step definitions for BDD tests  
│  
├── /ci-cd                   # Pipeline-related files  
│   └── .github/workflows    # GitHub Actions configuration  
│       └── ci-pipeline.yml  # CI/CD pipeline to run tests and deploy  
│  
├── README.md                # Project setup instructions and info  
├── package.json             # Project dependencies (Jest, Cucumber, Axios, etc.)  
└── jest.config.js           # Jest configuration file  
