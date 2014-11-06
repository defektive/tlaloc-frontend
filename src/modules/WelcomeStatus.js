var React = require("react/lib/reactWithAddons");

export default  React.createFactory(React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>{this.props.currentStatus.greeting}</h1>
        <p>
          There is a {this.props.currentStatus.chanceOfRain}% chance of rain today.
          Your sprinklers are scheduled to run in {this.props.currentStatus.nextProgram}.
          Would you like to adjust the schedule?
        </p>
        <p>
          <a className="btn btn-primary btn-lg">Skip Today</a>
          <a className="btn btn-lg">Delay Indefinitely</a>
        </p>
      </div>
    );
  }
}));
