# Shopping Cart with Visitor Pattern

This project implements a shopping cart system using the Visitor design pattern. It allows for adding items to the cart, calculating total prices, and applying discounts through different visitor implementations.

## Features

- Add items to the shopping cart.
- Calculate total price of items in the cart.
- Apply different discounts using the Visitor pattern.
- Easily extendable for new item types and discount strategies.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/sumanthnanis/El-study-assignment-exercise-1.git
   cd Behavioral Design Pattern/Shopping Cart with Visitor Pattern
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

## Architecture

This project follows the Visitor design pattern, which allows adding new operations to existing object structures without modifying them. The main components include:

- **ShoppingCart**: Manages the items added to the cart.
- **Item**: Represents an item in the cart.
- **Visitor**: Interface for defining operations on items.
- **ConcreteVisitor**: Implements specific operations (e.g., discount calculations).

