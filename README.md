# Book Recs

An MVC project.

## Overview

This project follows the Model-View-Controller (MVC) design pattern, a pattern in web development that separates an application into three interconnected components:

- **Model**: Represents the data and the rules that govern access to and updates of this data. In other words, it's all about the data and nothing else.
- **View**: Responsible for the visual representation of the Model. It's what the user sees and interacts with.
- **Controlle**r: The middleman between the Model and View. It processes user input delivered by the View, and manipulates the Model based on that.

## Project Structure

This project adheres to the MVC pattern as follows:

### Model

The `models` directory contains all the data-related logic. Here, you'll find classes and functions that directly interact with the database.

> For example, `models/book.js` defines the `Book` class, which represents a book in the database and includes methods for saving, retrieving, updating, and deleting book data.

### View

The views directory contains the user interface. It includes files that dictate how our data is presented to the user.

> For example, `views/book.ejs` is an Embedded JavaScript template that renders the details of a book.

### Controller

The controllers or routes directory (depending on the framework you're using) acts as our Controller. It contains files that handle user input, interact with the Model to retrieve/update data, and send the appropriate data back to the View.

> For example, `routes/book.js` has route handlers for various book-related endpoints (like "/books/:id") which fetch data using the `Book` model and render it using the 'book' view.

## Further Reading

TBA
