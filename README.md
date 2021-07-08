# Sneakers Point

## What's this?

This project is a sneakers e-commerce browser application.

The project is built with React, a widely used JavaScript framework for building user interfaces from small and isolated pieces of code called components. 

In this case, I used React 17, a version of React that enables the use of React Hooks and functional components instead of class components. Hooks enhances the readability and reusability of code as well as simplifies lifecycles methods of the virtual DOM. 

In order to avoid building a backend, I decided to build the website as a Single Page Application. This makes the website much faster since it allows client-side rendering offering a much better user experience. Sneakers Point was created with react-create-app and react-router-dom to allow navigation between the pages.

React allows passing data from top components to bottom components in a relatively easy way. It is also possible to pass components from children to parent components but can get difficult and complex to keep passing data between 3rd or 4th level components this way. In order to avoid prop-drilling and pass data between pages, I decided to implement State Management with Redux. In this case, the list of products added to the cart by the user on the shopping page will be available to its user on the checkout page from a central store container. 

In order to make React components more readable and better structured I decided to implement styled components.

The application is also responsive so it can be used from a small screen or a mobile phone.


## Technologies I used

- HTML5, CSS3
- React.js
- styled-components
- Redux

## Set Up

To make it run just clone the repository, install all the dependencies with ```npm install```. You just need to run the server and the client in you local directory with the command ```npm start```.

## Screenshots

### Shopping Page

![Registration Page](https://raw.githubusercontent.com/l-legren/my_shopping-app/master/public/shopping-page.jpg)

### Cart Page

![Homepage](https://raw.githubusercontent.com/l-legren/my_shopping-app/master/public/cartpage.jpg)
