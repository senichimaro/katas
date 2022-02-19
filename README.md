# Katas
This katas are schemas about core functionalities from MERN ecosystem. They are not Design Patters by itself but basic design patterns are included like isolation/modularity, single purpose and feature folder structure.

This katas represent a path to go from point A to B in a viable way, to start from 0 and get to 1. It could be improved, modify or changed. They are only one state of mind.

## MERN Stack Katas

* Express js

Express js is a Node js framework that let us use _"at the handy way"_. It could be interpreted like an interface for Node js.

This kata builds a basic Node js Server based in Express js library. Enables HTTP Verbs routes (GET, POST, PUT, DELETE), parse the incoming data into JSON, and respond with success object.

Optionally it could set CORS policy to allow specific URL resource requests.

It's normally served in localhost and tested with Postman.

---

* Mongo DB

Mongo DB is a Database where create, read, update or delete data, what its tipically called CRUD operations. It's No-Relational, so it differs from Relational databases like Maria DB or MySQL. Mongo DB is NoSQL structured or structure free and data is JSON documents, meanwhile SQL databases needs several relational constraints.

This kata uses the Express js kata to build a Server. Then serves EJS Front-End templates, gives a HTML form and a HTML table, to perform CRUD operations over Mongo DB.

---

* React js

This kata setup from scratch a React js project. Create Webpack & Babel config files needed and install selected modules, rendering even images, and configuration needed to use React Router DOM.

---

* Material UI

Material UI is React styles and pre-built components library. It provide with user interfaces that it doesnt break by the react bundle, predictably working.

This kata use a UI Wireframe to clearly specify the requirements. Its conform by a loader, a modal, a button, and a form. The screens are: Home Screen, Form Screen & Data Screen.
1. Home Screen: initial state "Loading"
  - Gets the data, meanwhile loader is present
  - If no data the button is displayed
  - If error modal show up to explain whats fails
2. Button Element: goes to form screen
3. Home/table: data is shown / button is displayed
  - each row has actions icons to read, edit or delete
4. Form Screen: create or edit data
  - id switch to get data or presented blank
5. Data Screen: get data to readable presentation

---

* MERN kata

This kata in one hand, build an Express js Back-End Server listen to HTTP Verbs routes that perform CRUD actions over Mongo DB and allow CORS from Front-End URL.

In the other hand, build a React js Front-End styled by Material UI that uses Axios to request Back-End routes with data and images, to represent the response into a user interface.

It follows the UI Wireframe from Material UI kata, React Router DOM, Express js and Mongo DB katas.

---

* Authentication kata

**Auth0**: This kata is about to protect routes from unauthorized users and login system. It consist of small interface with two buttons (login & logout) and UI elements to represent validation data.

---

* Redux kata

This kata is about global state with Redux. It avoid state inheritance pattern and allows to receive state only where its needed.

It consist of setting a Slice and configure a Store, it uses react-redux to get the Provider element wrapper.

---

* React Query kata

React Query makes fetching, caching, synchronizing and updating server state.

This kata build a basic data fetching pattern with isLoading, isError and data states to be represented into a basic user interface. This pattarn is later refactored into React Query pattern.












# Future Katas

* MERN kata : Mongo DB + Express js + React js (string) + React Query + Redux
* Front-End kata : Mongo DB (Serverless) + React js + React Query + Redux

This kata uses React Query to fetch data from "Dummy Post API" into React Front-End with Material UI elements to represent an initial list of posts CRUD allowed. Edited post are saved in Redux Store and into a Mongo BD Schema for Post Data (Express API or Serverless). The list is after "cache invalidated" from React Query and reloaded filtering and replacing modified posts.


















//
