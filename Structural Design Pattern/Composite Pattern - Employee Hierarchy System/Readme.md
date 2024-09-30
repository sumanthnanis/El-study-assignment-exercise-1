# Employee Hierarchy System - Composite Pattern Demo

This project demonstrates the use of the Composite pattern in a simple Employee Hierarchy System application. Users can manage a hierarchical structure of employees, including managers and their subordinates.

## Project Overview

The Employee Hierarchy System is a command-line interface (CLI) program written in TypeScript. It showcases the Composite pattern by allowing users to add subordinates to managers and display the hierarchical structure of the organization.

## Features

- Add subordinates to managers
- Display manager details, including their subordinates
- Interactive CLI for managing the employee hierarchy
- Logging system for tracking operations

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14.17 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/sumanthnanis/El-study-assignment-exercise-1.git
   cd "Structural Design Pattern/employee-hierarchy-system"
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To run the Employee Hierarchy System application:

1. Compile the TypeScript code:
   ```
   npx tsc
   ```

2. Run the compiled JavaScript:
   ```
   node dist/index.js
   ```

## Usage

Once you run the application, follow the on-screen prompts:

1. You'll start with a General Manager named Alice.
2. Choose to add subordinates, show manager details, or exit the program.
3. When adding subordinates, enter their name and position.
4. The application will display the current manager's details, including subordinates, when requested.
5. Select 'Exit' when you're done managing the hierarchy.

## Project Structure

- `src/`: Contains all the TypeScript source files
  - `components/`: Defines the Employee interface and concrete classes (Worker, Manager)
  - `services/`: Contains the ActionService for business logic
  - `utils/`: Contains utility classes for input handling and logging
  - `index.ts`: The main entry point of the application
- `dist/`: Contains the compiled JavaScript files (created after running `tsc`)
- `package.json`: Defines the project dependencies and scripts
- `tsconfig.json`: TypeScript compiler configuration
