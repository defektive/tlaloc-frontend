var React = require("react/lib/reactWithAddons");


var Station = React.createFactory(React.createClass({
  render: function() {
    return (
      <li className="station-control-item">
        {this.props.station.name}
        <div className="btn-group  pull-right" data-toggle="buttons">
          <label className="btn btn-primary btn-xs active">
            <input type="radio" name="options-{this.props.station.id}" id="option1" autocomplete="off" checked="true" /> Off
          </label>
          <label className="btn btn-primary btn-xs">
            <input type="radio" name="options-{this.props.station.id}" id="option2" autocomplete="off" />On
          </label>
        </div>
      </li>
    );
  }
}));

export default React.createFactory(React.createClass({
  render: function() {

    var createItem = function(stationObj) {
      return <Station key={stationObj.id} station={stationObj} />;
    };

    return (
      <div className="station-control-list">
        <h1>Stations</h1>
        <ul className="nav nav-sidebar">
          {this.props.data.map(createItem)}
        </ul>
      </div>
    );
  }
}));
