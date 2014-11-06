var React = require("react/lib/reactWithAddons");


var Program = React.createFactory(React.createClass({
  render: function() {
    return (
      <tr>
        <td>
          {this.props.program.id}
        </td>
        <td>
          {this.props.program.name}
        </td>
        <td>
          {this.props.program.description}
        </td>
        <td>
          {this.props.program.running ? "Running" : "Off"}
        </td>
      </tr>
    );
  }
}));

export default React.createFactory(React.createClass({
  render: function() {

      var createItem = function(programObj) {
        return <Program key={programObj.id} program={programObj} />;
      };

    return (
      <div className="program-list">
        <h1>Programs</h1>
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
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
