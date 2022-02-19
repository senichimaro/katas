# 1. React : The Front-End
We'll use `create-react-app` to fast development. It uses Bulma for UI/UX.

## 1. Features Structure
The file structure will follow a 'feature' schema, it means that files will be tigth based in the feature their represent.

In this project, the product feature folder will group all the functionality that let products work.

This pattern provides a clean and self-explained visible structure to orchestrate features and future features to be added like Users.

~~~
./src
|  |_/Products
|  |  |_/components
|  |  |  |_ProductLayout.js
~~~




### Steps to Follow
1. Component Hierarchy
    * ProductLayout
      - Header
      - addButton
      - ListProducts
        + Loading
        + Products

2. Static Versioning
3. State representation


## 2. Loading component
Loading component will introduce the user to wait for the process of get products from the database finish.

This functionality suggest that our component has an state in their nature, like isLoading true or false, and two possible flows, like there are products to show or there aren't products to show. Resume: isLoading:true/false -> show results / no results.



## 3. React Hooks : useState, useEffect
* Hooks básicos

  - useState : Returns a stateful value, and a function to update it
  ~~~
  const [state, setState] = useState(initialState);
  ~~~

  - useEffect : The function passed to useEffect will run after the render is committed to the screen. For mutations, subscriptions, timers, logging, and other side effects. Effects create resources that need to be cleaned.
  ~~~
  useEffect(didUpdate);
  ~~~


Because our components are stateless functions we use hooks to mimic a state object and introduce our code in the component life cycle. useState will allow a variable and a setter to that variable. useEffect will give us access to post-redered component to mutate o suscribe functions even code.

useState is simple, is used destructuring an array from useState() function. useEffect need to be cleaned after use if it has subscriptions or setted to run once.
~~~
# setted to run once : a second parameter empty array 
useEffect( () => {
  ...
  }, [])
~~~
















## Packages
* bulma (css)
* react-bulma-components (react components)
* prop-types (testing)
* axios : library to APIs/URLs consumtion


































































































































//
