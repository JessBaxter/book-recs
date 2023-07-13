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

### Controller and Routes

The controllers and routes directories (depending on the framework you're using) act as our traffic conductor. They contain files that handle user input, interact with the Model to retrieve/update data, and send the appropriate data back to the View.

> For example, `routes/bookRoutes.js` has route handlers for various book-related endpoints (like "/books/:id") which then access the appropriate method in `controllers/bookController.js` that fetches data using the `Book` model and renders it using the 'book' view.

## Further Reading

Codecademy. (2023). [MVC: Model, View, Controller](https://www.codecademy.com/article/mvc). Available at: [https://www.codecademy.com/article/mvc](https://www.codecademy.com/article/mvc)

FreeCodeCamp. (2021). [The Model View Controller Pattern – MVC Architecture and Frameworks Explained](https://www.freecodecamp.org/news/the-model-view-controller-pattern-mvc-architecture-and-frameworks-explained/). Available at: [https://www.freecodecamp.org/news/the-model-view-controller-pattern-mvc-architecture-and-frameworks-explained/](https://www.freecodecamp.org/news/the-model-view-controller-pattern-mvc-architecture-and-frameworks-explained/)

MDN. (2023). [MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC). Available at: [https://developer.mozilla.org/en-US/docs/Glossary/MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

Visual Paradigm. (2023). [What is Model-View and Control?](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-model-view-control-mvc/). Available at: [https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-model-view-control-mvc/](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-model-view-control-mvc/)

Wikipedia. (2023). ["Model-view-controller"](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller). Available at: (https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)[https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller]
