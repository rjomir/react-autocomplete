1. PureComponent is used for performance and only updates when its props or state change, whereas Component updates every time its parent component re-renders. However, PureComponent can cause bugs when working with mutable data structures such as arrays or objects because it does not recognize changes to the data.
2. ShouldComponentUpdate method in React can be used to optimize rendering, it can also be dangerous when used in the context of a deeply nested component hierarchy. This is because a child component's shouldComponentUpdate method may return false, preventing a rerender.
3. 1) Use props to pass a function from the parent to the child, which can then call the function with data to update the parent's state.
   2) Use Context API to pass data down the component tree without having to pass props manually at every level.
   3) Use events to create a custom event in the child component, dispatch it when an action occurs, and have the parent component listen to the event and handle the data passed by the child component.
4. 1) Memoization: Use the memo higher-order component to memoize the output of a functional component, which can prevent unnecessary re-renders. 
   2) ShouldComponentUpdate: Implement the shouldComponentUpdate lifecycle method in a class component and return false under certain conditions to prevent the component from re-rendering.
5. A React fragment is a way to group multiple child components without adding an additional container element to the page. It helps to keep your code clean and avoid any unintended side effects
6. Authentication HOC, Logging HOC, Styling HOC. HOCs take a component as an argument and return a new component with added functionality.
7. Promises and async/await provide more organized and predictable ways to handle exceptions in asynchronous JavaScript code compared to callbacks. Promises have a .catch() method, while async/await uses try/catch blocks to handle exceptions. Callbacks have an error parameter, but errors can go unhandled if the callback is not properly implemented.
8. setState() in React takes one or two arguments, depending on how it is used. It is asynchronous because React batches state updates for performance reasons. This means that you can't immediately rely on the new state value right after calling setState().
9. To migrate a Class Component to a Function Component in React:
   1) Remove unused lifecycle methods.
   2) Create a new Function Component with the same name.
   3) Copy over the props passed to the Class Component and declare them as parameters.
   4) Move the code from the render() method to the Function Component's body.
   5) Remove ``this`` keyword from class methods.
10. Styles can be applied to components in React using inline styles, CSS classes, CSS modules, styled components, or CSS-in-JS libraries. These methods allow you to customize the appearance of components, apply styles globally or locally, and manage styles in a modular way.
11. To render an HTML string from the server using JavaScript, get a reference to the element where you want to insert the HTML, and then set the element's innerHTML property to the HTML string. However, it's important to sanitize the HTML string before rendering it to prevent potential security vulnerabilities.