var React = require('react');

var Counter = React.createClass({

	render: function () {
		var str = 'I love tacos';
		return <div>
		<p>{this.props.phrase}</p>
		<button></button>
		// <button>{this.props.phrase}</button>
		</div>;
	}
});

module.exports = Counter;
