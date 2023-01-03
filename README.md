# Shop-Managment
A small project simulating a customer management system in a virtual store.   
[Short promotional video](https://drive.google.com/file/d/1Lw2gjCIOcwpbTeoFxNkaslj4N1EfJvBL/view?usp=share_link)
## Summary
A small project simulating a store management system. In the application, customers and products are managed, and purchases are tracked.

## Structure
The application has three main pages, products, customers and purchases.

On the products page the products appear, with the list of people who bought them and on the customers page there is a table of the customers, and the products they bought. On both pages there is an option to add products by customer.

On the purchases page there is an option to get the list of purchases by customer, name or date.

The server side is divided into Data Access and Business layers in order to enable better process management.

## technologies
- Client side: The client side is built in React and Redux.

- Server side: The server side is built in Node and Express, and the information is stored in a local mongoDB DB.
