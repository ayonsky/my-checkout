This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Product Requirements

As a user of the web application I can see a list of products and I can add them to my shopping cart.

### The required basic functionality is:
  * See a large list of products
  * See stock availability for each product
  * See the list of items in the cart
  * Add a product to the cart
  * Increase/decrease the quantity of the products already in the cart, decreasing down to 0 will
remove the product from the cart
  * See cart total amount

### The web application needs to be responsive. All the following requirements are a plus:
  * The application will adapt from a single view layout (desktop mockup) to a multiple view layout as in the mobile mockup, the user will be able to navigate from product list view to
cart view using the navigation arrow buttons.
  * Add a product to favorite list
  * List the favorite products
Dev Requirements

### The candidate should:
  * Use React to provide the solution
  * Use of typescript is a plus
  * Use the provided mockups as a guide, it’s not needed to be pixel perfect.

### Available entry points:
  * GET /grocery: get the list of products
  * PATCH /grocery/:id: update the item stock
  * GET /grocery?favorite=1: get the list of favorite items
Please refer to the README file for details on how to run the API server locally.

## Mockup and Look & Feel

<img src="https://i.imgur.com/f2IPwGL.png">
<image src="https://i.imgur.com/FfesgU4.png">

## Available Scripts

In the project directory, you can run:

### `yarn run local`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
The project has redux-logger active, so you will be able to debug every redux dispatched action in the dev-tools.

NOTE: This script will run both the React frontend app, and the JSON Server, its a ready-to-use script to be able to checkout the project and start using the app with less boilerplate.