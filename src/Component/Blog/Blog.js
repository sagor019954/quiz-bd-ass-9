import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blog'>
                <h2>What is the purpose of react route?</h2>
                <p>React Router is one of the most popular routing frameworks for React. The library is designed with intuitive components to let you build a declarative routing system for your application. This means that you can declare exactly which of your components has a certain route</p>
            </div>
            <div className='blog'>

                <h2>How does the Contex api work?</h2>
                <p>Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component: class App extends React.</p>
            </div>
            <div className='blog'>
                <h2>What is useHref?</h2>
                <p>The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router.</p>
            </div>
        </div>
    );
};

export default Blog;