// function app () {
// 	<div id="test">
// 		<p>Hello world!</p>
// 	</div>
// }
var React = require('react');
var ReactDOM = require('react-dom');

var Counter = require('./components/Counter');

ReactDOM.render(<Counter phrase ="I like tacos." />, document.body);