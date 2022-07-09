---
layout: post
title: "ReactJS Basics"
date: 2022-07-06 12:00:00 +0530
author: Baiju Dodhia
category: technology
tags: reactjs jsx
excerpt: Basic understanding of ReactJS
---

![Wallpaper](https://source.unsplash.com/1600x600/?reactjs,code)

### #1 - What Is React? 
- React is a library for building user interfaces.
- React runs on the client as a SPA(Single Page App), but can be used to build full stack apps by communicating with a server/API (eg. MERN stack).
- React is often referred to as a front-end "framework" because it is capable and directly comparable to a framework such as Angular or Vue.

### #2 - Why Would You Use React? 
- Structure the "view" layer of your application
- Reusable components with their own state
- JSX - Dynamic markup
- Interactive Uls with Virtual DOM
- Performance & testing
- Very popular in the industry.

### #3 - What should you know first? 
- You should have a good handle on JavaScript. I would not suggest jumping into React without learning JavaScript first 
- Data types, variables, functions, loops, etc 
- Promises & asynchronous programming 
- Array methods like forEach(), filter(), map() etc.
- Fetch API & making HTTP requests

### #4 - UI Components 
- When using React, think of your UI as a bunch of separate components 

### #5 – Components
- Components are self-contained reusable building blocks of web application.
- React components are basically just idempotent functions (same input produces same output).
- They describe your UI at any point in time, just like a server-rendered app.

### #6 – Props
- Passed down to component from parent component and represents data for the component and accessed via this.props (In Class Based)

### #7 – State
- Represents internal state of the component
- Accessed via this.state (In Class Based)
- When a component's state data changes, the rendered markup will be updated by re-invoking render() method

### #8 – JSX (JavascriptXML)
- Arguably, one of the coolest things in React
- XML-like syntax for generating component's HTML
- Easier to read and understand large DOM trees
- Translates to plain JavaScript using react-tools

### #9 - Virtual DOM
- The virtual DOM is used for efficient re-rendering of the DOM
- React aims to re-render the virtual tree only when the state changes
- Uses 2 virtual trees (new and previous) to find differences and batch update real DOM
- Observes data changes (setState) and does dirty-checking to know when to re-render component
- Whenever possible, does not update entire component in real DOM - only computes a patch operation that updates part of the DOM.

### #10 - Components: function vs. class
a. Function

{% highlight javascript linenos %}
export const MyComponent = () => {
	return (
        <div>
            <h1>My component</h1>
        </div>
    )
}
{% endhighlight %}

b. Class

{% highlight javascript linenos %}
export default class MyComponent extends React.Component {
	render() {
		return (
			<div>
				<h1>My component</h1>
			</div>
        )	
    }
}
{% endhighlight %}

- Components render/return JSX (JavaScript Syntax Extension) 
- Components can also take in "props": 

{% highlight javascript linenos %}
<MyComponent text="My Text" />
{% endhighlight %}

### #11 - Working With State 
- Components can have "state" which is an object that determines how a component renders and behaves 
- "App" or "global" state refers to state that is available to the entire Ul, not just a single component. 
- Prior to React 16.8, we had to use class based components to use state. Now we can use functional components with hooks.

### #12 - React Hooks 
- React Hooks are functions that let us hook into the React state and  lifecycle features from function components .
- Type of Hooks – 
    - useState: To manage states. Returns a stateful value and an updater function to update it.
    - useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
    - useContext: To return the current value for a context.
    - useReducer: A useState alternative to help with complex state management.
    - useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
    - useMemo: It returns a memoized value that helps in performance optimizations.
    - useRef: It returns a ref object with a ‘.current’ property. The ref object is mutable. It is mainly used to access a child component imperatively.
    - useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
    - useDebugValue: Helps to display a label in React DevTools for custom hooks.
- You can also create your own custom hooks.

### #13 - Lifecycle Method
- First, let’s take a look at how it’s been done traditionally. As you probably know, each React component has a life cycle, which consists of three phases:
    - Mounting, that is putting inserting elements into the DOM.
        - Class based – componentDidMount()
        - Function based – useEffect with empty dependencies.
    - Updating, which involves methods for updating components in the DOM.
        - Class based – componentDidUpdate()
        - Function based – useEffect with dependencies.
    - Unmounting, that is removing a component from the DOM.
        - Class based – componentWillUnmount()
        - Function based – useEffect with empty dependencies and return statement.

### #14 – Data Flow in React
- In a React application, data typically flows from a parent component to a child component, using props. For Eg. 

{% highlight javascript linenos %}
<MyComponent myProp={'somevalue'} />
{% endhighlight %}

- If you pass a function to the child component, you can however change the state of the parent component from a child component:

{% highlight javascript linenos %}
const [count, setCount] = useState(0);
<MyComponent set_count={setCount} />
{% endhighlight %}

- Inside the MyComponent we can now grab the setFunct prop and call it to update the funct state in the parent component, when something happens:

{% highlight javascript linenos %}
function Counter({ set_count }) {
 //...
 set_count(1);
 //...
}
{% endhighlight %}

- There are more advanced ways to manage data, which include the Context API and libraries like Redux, but those introduce more complexity but are useful as the application/project size increases.

### #15 - Handling user events in React
- React provides an easy way to manage events fired from DOM events like clicks, form events and more. 
- Understanding about click events which are quite simple. You can use the ‘onClick’ attribute on any JSX element:

{% highlight javascript linenos %}
<button
    onClick={(event) => {
    /* handle the event */
    }}
>
    Click here
</button>
{% endhighlight %}

- When the element is clicked, the function passed to the onClick attribute is fired.
- You can define this function outside of the JSX. When the click event is fired on the button, React calls the event handler function.

{% highlight javascript linenos %}
const handleClickEvent = (event) => {
  /* handle the event */
}
function App() {
  return <button onClick={handleClickEvent}>Click he
}
{% endhighlight %}

- React supports a vast amount of types of events, like onKeyUp, onFocus, onChange, onMouseDown, onSubmit and many more.

### #16 – Prominent Libraries used along with ReactJS.
- react-router-dom → Used for routing.
- styled-components → Used for writing CSS inside JS.
- axios → Promise based HTTP client.
- redux → Managing and centralizing application state
- react-testing-library → Testing react components.
- react-transition-group → Animation Library for React.
