var React = require('react');
var ReactDOM = require('react-dom');

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

// ResultComponent is for single query result, it will be populated in ResultPanel

const style = {
  margin: 20,
};

var ResultComponent = React.createClass({
  render: function () {
    return (
      <Card style={style}>
        <CardTitle title={this.props.title} subtitle={this.props.linkage} />
        <CardText>
          {this.props.content}
        </CardText>
      </Card>
    );
  }
});

module.exports = ResultComponent;