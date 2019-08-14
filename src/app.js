console.log('App.js is running');

// JSX - JavaScript XML
// var template = <p>This is JSX form app.js!</p>;

var template = <h1>Does this change?</h1>
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);