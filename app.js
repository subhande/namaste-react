const heading = React.createElement('h1', {}, 'Hello Dojo!'); // This will return a object
const subheading = React.createElement('h3', {}, 'Things I need to do:');
const list = React.createElement('ul', {},
    [
        React.createElement('li', {}, 'Learn React'),
        React.createElement('li', {}, 'Climb Mt. Everest'),
        React.createElement('li', {}, 'Run a marathon'),
        React.createElement('li', {}, 'Feed the cats')
    ]
);
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "Hello World")));
const container = React.createElement('div', { id: "container" }, [heading, subheading, list, parent]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container); // This will covert the object to HTML and render it to the DOM
