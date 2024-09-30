# Factory Method Pattern - Shape Factory

This project demonstrates the implementation of the Factory Method pattern using a Shape Factory in TypeScript. It allows users to create different shapes through a command-line interface.

## Project Overview

The Shape Factory application is a TypeScript project that illustrates the Factory Method design pattern. It provides a flexible way to create various shapes (currently Circle and Square) through a common interface, showcasing how to decouple object creation from the code that uses the object.

## Features

- Implementation of the Factory Method pattern
- Creation of different shape objects (Circle and Square)
- Command-line interface for shape selection
- Extensible design for adding new shape types

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14.17 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/sumanthnanis/El-study-assignment-exercise-1.git
   cd Creational Design pattern/Factory Method Pattern - Shape Factory
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

## Usage

When you run the application, you'll be prompted to enter a shape type. Currently, you can choose between 'circle' and 'square'. The application will then create and draw the selected shape.

## Project Structure

- `src/`: Contains all the TypeScript source files
  - `shapes/`: Defines the shape interface and concrete classes
    - `IShape.ts`: Interface for shapes
    - `Circle.ts`: Circle implementation
    - `Square.ts`: Square implementation
    - `ShapeFactory.ts`: Factory for creating shapes
  - `index.ts`: The main entry point of the application
- `dist/`: Contains the compiled JavaScript files (created after running `tsc`)
- `package.json`: Defines the project dependencies and scripts
- `tsconfig.json`: TypeScript compiler configuration
