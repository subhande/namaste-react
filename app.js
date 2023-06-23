const heading = React.createElement('h1', {}, 'Hello Dojo!');
const subheading = React.createElement('h3', {}, 'Things I need to do:');
const list = React.createElement('ul', {},
    [
        React.createElement('li', {}, 'Learn React'),
        React.createElement('li', {}, 'Climb Mt. Everest'),
        React.createElement('li', {}, 'Run a marathon'),
        React.createElement('li', {}, 'Feed the cats')
    ]
);
const container = React.createElement('div', {}, [heading, subheading, list]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);