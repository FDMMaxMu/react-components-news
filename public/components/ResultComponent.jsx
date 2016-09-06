var React = require('react');
var ReactDOM = require('react-dom');

// ResultComponent is for single query result, it will be populated in ResultPanel
var ResultComponent = React.createClass({
  render: function () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.title}</h3><a href={this.props.linkage}>Read more</a>
        </div>
        <div className="panel-body">
          {this.props.content}
        </div>
      </div>
    );
  }
});

module.exports = ResultComponent;