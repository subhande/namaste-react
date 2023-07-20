
import React from 'react';
import ReactDOM from 'react-dom/client';

const elem = <span> React element</span>;

const Title = () => {
    return <h1 className='head' tabIndex="5">{elem} Namaste React using JSX 🚀</h1>
}

const number = 10;

// Component Composition - Composing multiple components together
const HeadingComponent = () => {
    return <div id="container">
        <Title />
        <h1 className="heading">Namaste React Functional Component</h1>
        <h2>{number}</h2>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />);