# props
  props is a property to give it dynamically

# config driven UI
  means that UI driven by config

# Food App Structure
/**
 * Three main components
 *  Header
 *   - Logo
 *   - Nav Items
 *  Body
 *   - Search
 *   - RestaurantContainer
 *     - RestaurantCard
 *       - img
 *       - name of res, star rating, cuising, delivery time etc.
 *  Footer
 *   - Copyright
 *   - Links
 *   - Address
 *   - Contact
 *
 */

### There are 2 types of export and import
1. Default export and import
   export default Component
   import Component from "path"
2. Named Export/Import
   export const Component
   import {Component} from "path"


# React Hooks
  - are normal JS function which is give to us by react
  - utility JS function
  - "Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed."
  - Hooks allow us to "hook" into React features such as state and lifecycle methods.
  1. useState() - It will give you state variable in react, 
      Whenever my state variable update, react will re-rendered the component
  2. useEffect()


## Note: Reconciliation Algorithm(React Fiber)