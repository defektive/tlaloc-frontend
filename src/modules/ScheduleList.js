var React = require("react/lib/reactWithAddons");


var Schedule = React.createFactory(React.createClass({
  render: function() {
    return (
      <tr>
        <td>
          {this.props.schedule.id}
        </td>
        <td>
          {this.props.schedule.name}
        </td>
        <td>
          {this.props.schedule.programName}
        </td>
        <td>
          {this.props.schedule.description}
        </td>
        <td>
          {this.props.schedule.enabled ? "Enabled" : "Disabled"}
        </td>
      </tr>
    );
  }
}));

export default React.createFactory(React.createClass({
  render: function() {

      var createItem = function(scheduleObj) {
        return <Schedule key={scheduleObj.id} schedule={scheduleObj} />;
      };

    return (
      <div className="shedule-list">
        <h1>Schedule</h1>
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Program Name</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map(createItem)}
          </tbody>
        </table>
      </div>
    );
  }
}));
