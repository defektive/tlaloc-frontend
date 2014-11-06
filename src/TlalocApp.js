var React = require("react/lib/reactWithAddons");
var Dispatcher = require('flux').Dispatcher;
var Amygdala = require('Amygdala');
var Q = require('q');


import WelcomeStatus from "./modules/WelcomeStatus";
import StationControlList from "./modules/StationControlList";
import ProgramList from "./modules/ProgramList";
import ScheduleList from "./modules/ScheduleList";

var TlalocStore = new Amygdala({
    'config': {
      'apiUrl': 'http://api.tlaloc.dev',
      'idAttribute': 'url'
    },
    'schema': {
      'stations': {
        'url': '/stations/'
      },
      'programs': {
        'url': '/programs/',
        'oneToMany': {
          'stations': 'stations'
        },
        'foreignKey': {
          'stations': 'stations'
        }
      },
      'schedules': {
        'url': '/schedules/',
        'oneToOne': {
          'program': 'programs'
        },
        'foreignKey': {
          'program': 'programs'
        }
      },
      'status': {
        'url': '/status/'
      }
    }
  }
);

Q.all([
  TlalocStore.get("stations"),
  TlalocStore.get("programs"),
  TlalocStore.get("schedules"),
  TlalocStore.get("status")
]).done(makeArgFriendly(function (stationList, programList, scheduleList, status) {
  stationList = stationList || [];
  programList = programList || [];
  scheduleList = scheduleList || [];
  status = status || [];

  var currentStatus = {
    greeting: "Good Evening!!",
    chanceOfRain: status.chance_of_rain,
    nextProgram: "19 hours and 17 minutes"
  };

  var TlalocApp = React.createFactory(React.createClass({
    render: function() {
      return (
        <div id="tlaloc-main">
          <div className="navbar navbar-default">
            <div className="navbar-header">
              <a className="navbar-brand" href="./">Tlaloc</a>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3 col-md-2 sidebar">
                <StationControlList data={stationList} />
              </div>
              <div className="col-sm-9  col-md-10 main">
                <WelcomeStatus currentStatus={currentStatus} />
                <ProgramList data={programList} />
                <ScheduleList data={scheduleList} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }));

  React.render(
    <TlalocApp />,
    document.body
  );
}));

function makeArgFriendly(fn) {
  return function (a) {
    fn.apply(fn, a)
  }
}
