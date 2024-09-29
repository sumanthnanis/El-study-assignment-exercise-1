# Coffee Shop - Decorator Pattern Demo

This project demonstrates the use of the Decorator pattern in a simple Coffee Shop application. Users can order a coffee and add various toppings to it, with the price updating dynamically.

## Project Overview

The Coffee Shop application is a command-line interface (CLI) program written in TypeScript. It showcases the Decorator pattern by allowing users to add toppings (milk and sugar) to a basic coffee, with each addition modifying the description and price of the coffee.

## Features

- Order a simple coffee
- Add milk and sugar as toppings
- Dynamic price calculation based on added toppings
- Interactive CLI for placing orders

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14.17 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/sumanthnanis/El-study-assignment-exercise-1.git
   cd "Structural Design Pattern/Decorator Pattern - Coffee Shop"
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To run the Coffee Shop application:

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

1. You'll start with a Simple Coffee.
2. Choose to add milk, sugar, or complete your order.
3. The application will display the current coffee description and price after each addition.
4. When you're done, select 'done' to see your final order and total price.

## Project Structure

- `src/`: Contains all the TypeScript source files
  - `models/`: Defines the Coffee interface and concrete classes
  - `utils/`: Contains utility classes for input handling and logging
  - `index.ts`: The main entry point of the application
- `dist/`: Contains the compiled JavaScript files (created after running `tsc`)
- `package.json`: Defines the project dependencies and scripts
- `tsconfig.json`: TypeScript compiler configuration

