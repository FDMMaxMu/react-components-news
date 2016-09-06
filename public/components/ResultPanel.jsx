var React = require('react');
var ReactDOM = require('react-dom');

var ResultComponent = require('./ResultComponent');

// ResultPanel is for displaying the result returned from the users' input. 
var ResultPanel = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.queryResult.map(function(result) {
          if(result.title !== ""){
            return <ResultComponent title={result.title} content={result.text} linkage={result.url}/>;
          }
          })
        }
      </div>
    );
  }
});

module.exports = ResultPanel;