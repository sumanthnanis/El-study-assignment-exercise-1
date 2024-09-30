# Builder Design Pattern - House Builder

This project demonstrates the implementation of the Builder Design Pattern using a house builder example in TypeScript.

## Project Overview

The Builder Design Pattern is a creational design pattern that allows for the step-by-step construction of complex objects. In this project, we use it to build different types of houses, showcasing how the pattern can be used to create varied objects using the same construction process.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14.17 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/sumanthnanis/El-study-assignment-exercise-1.git
   cd Creational Design pattern/Builder Design Pattern - House Builder
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To run the Shape Factory application:

1. Compile the TypeScript code:
   ```
   npx tsc
   ```

2. Run the compiled JavaScript:
   ```
   node dist/index.js
   ```

## Project Structure

The project structure is organized as follows:

- `src/House.ts`: Defines the `House` class, representing the complex object we're building.
- `src/HouseBuilder.ts`: Contains the abstract `HouseBuilder` class with methods for building different parts of a house.
- `src/ConcreteHouseBuilder.ts`: Implements the `HouseBuilder` interface to construct and assemble parts of the house.
- `src/Director.ts`: Defines the `Director` class that controls the building algorithm.
- `src/index.ts`: The main entry point of the application, demonstrating how to use the Builder pattern.
- `package.json` & `package-lock.json`: Define the project dependencies and lock file.
- `tsconfig.json`: TypeScript compiler configuration.
- `README.md`: This file, containing project documentation.


