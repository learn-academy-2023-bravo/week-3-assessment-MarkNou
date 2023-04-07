# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a feature provided by React that allows us to write JavaScript within HTML. It allows us to combine our JS logic and HTML UI in one file. Without it, we would have to do all our logic in JavaScript and our formatting in HTML, and then link the two together.

JavaScript can be written in JSX by using curly brackets '{}', while HTML uses tags as it normally does. Here is an example of JavaScript logic inside HTML:

<h1>{javaScriptFunction}</h1>

Researched answer: JSX is a syntax extension for JavaScript that allows users to write HTML in JavaScript files. It was created and used by Facebook to build more dynamic and iteractive UI's with React's library. By combining both languages, this allows coders to write dynamic code without having to switch back and forth between HTML and JavaScript file.

1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: Yarn is a package manager that can be executed via terminal. It has different commands that execute different actions. By using some of its features, it can add files to your text editor to perform built in tasks. So far I've used it features to run jest test, creat React apps, and to view my React app on a local browser.

Here are some examples of yarn commands:
$ yarn jest
$ yarn create react-app
$ yarn start

Researched answer:

Yarn is a package manager and a project manager. It replaces the default JavaScript package manager node package manager (npm). Like React, it was also created by Facebook. By executing yarn in your terminal, you can install dependencies into your projects. Yarn can be used to install React and it's library into your project; allowing you to use its features such as JSX.

3. What is a React component?

Your answer: I view React components as templates for information. Creating containers of data can become extremley repetitive and redundant, and it also requires a lot of line of code which can make your code look messy. React components allow you to make "blank" templates and call them over and over again on your page. The data and logic can be easily interchangable, making them highly dynamic. 

One example I like to think of when referring to React components is a media player on a streaming service such as Spotify. The media player has a album picture, play/pause button, and a back/next button. By creating just one component for this template, you can then pass the information of millions of songs into it.

Researched answer: A React component is a reusable building block for creating UI. A component is a self-contained block of code, that can be plugged in and used with other components. Components can recieve data through props, which allow them to operate like functions with arguments. As data changes, components will also dynamically display those changes while still maintaining their structure.

4. What is the difference between state values and props in React?

Your answer: State values are used to store information that can be updated and changed. By using useState(), developers can use a state variable and a setter to make their UI interactable. Props are a way for components to communicate to one another. Components in different files can reference props in other files in React. The biggest difference is state values are used for performing specifc logic while props are used for communicating tasks.

Researched answer: State is used to manage data that can change in a component. Props are used to pass data from parent and child components.  State is locally owned and is referenced directly by a component. Props are owned by their parent and can only be called on if their component is rendered.

5. What is the DOM?

Your answer: DOM stands for document object model. The DOM is the connection between UI and code logic. It allows users to interact with a page and send information to the backend and vice versa. Some examples are: buttons, forms, comments, likes, ect.

Researched answer:

DOM is a programming interface for websites. DOM allows developers to interact with the structure of a website via JavaScript. It allows developers to respond to user events and create dynamic, interactive webpages. 

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: I have only used a div tag, I've never heard or used a span tag. A div tag is used as a container in HTML. Its often used as a block/container to hold other HTML tags. It compartmentalizes data that is relative to each other. For example, you could use a <div></div> to hold information about a product with a heading <h3></h3>, description <p></p>, and features <li></li>.

Researched answer: the div and span tag are both used in HTML to organize and display content. Div is a block-level element that takes up an entire container and starts on a new line. Span is an inline element that takes up only the amount of space it needs, and does not start on another line.



## Looking Ahead: Terms for Next Week

1. Object-oriented programming: Object-oriented programming is a method of creating objects that hold data and methods. We've been using functions and methods on objects, but this combines them. Its faster and easier to execute, cleaner, and requires less code and development time.

2. Ruby: Ruby is a dynamic OOP programming language. It is used for a variety of devlopment needs such as web development, data analysis, video games, and machine learning. In Ruby, everything is an object including primitive data. 

3. Implicit return: A implicit return allows functions to return data without actually calling a return. They do not require brackets; as the name suggest the return is already implied.

4. Ruby blocks: Ruby blocks are functions that can be passed into methods. 

5. Ruby hashes: Ruby hashes are a data structure used to store data in the form of key:value pairs. 
