import React from "react";
export function Landing(){
    return (
        <>
            <h1>Our react notes</h1>
            <h3>Components</h3>
            <p>A component, in React, is a mixture of JS/TS code and JSX which allows us to create
                an entity which resembles a reusable custom HTML element, which can be included in other
                components. The HTML-like JSX within a component can directly interact with the JS/TS code
                provided within the component.
            </p>
            <h3>Props & State</h3>
            <p>Two key ways to manage variables within a component - props are immutable and passed 
                in from the parent of the component, and state is changeable but will trigger a refresh of the
                component.
            </p>
            <h3>SPA & routing</h3>
            <p>Single Page Application - rather than performing a redirect of the site, React simply
                just swaps out all of the components used.
            </p>
            <h3>Virtual DOM</h3>
            <p>React internally keeps track of the DOM so that it knows exactly what elements to render/update 
                when the site is displayed to the user.
            </p>
            <h3>Lifting State</h3>
            <p>We have the ability to maintain variables within a component (state), as well as to pass data
                from a parent to child (props). We will also need to be able to maintain a site-wide global
                state (Context/Redux) and to be able to pass values from child to parent (lifting state)
            </p>
        </>
    )
}