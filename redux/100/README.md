# Redux kata
This kata handle client-side state with redux.

Initially, data is requested from an external APIs with React Query, then is handled with Redux to easily access it around the project.

The app is a CRUD basic interface of three screens where forms are reused to create and edit data.


## Steps

#### Screens

1. State representation
  - Modal
    * Error/Success messages
  - Loader
    * State mutation interface


2. state managment
  - Home: (flow control)
    1. table
      * rows with actions
    2. Command Navbar
      * Create (Button) Logs (event register)


3. top data abstraction layer
  - Form: (flow control)
    1. Create (Empty form)
    2. Edit (Loaded data fields)

###### Drawer AppBar
1. styles & width
2. state handlers
3. icons & elements
4. onChange handler in IconButton
