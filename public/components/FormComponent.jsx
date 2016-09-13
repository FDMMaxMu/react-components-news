var React = require('react');
var ReactDOM = require('react-dom');

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Debounce } from 'react-throttle';

// FromComponent is for collecting users' input. Clicking the button will 
// pass it to Container to make Async call. 

const style = {
  margin: 20,
};

var FormComponent = React.createClass({
  handleSubmission: function(e) {
    e.preventDefault();
    // TODO: Add input verification here.
    this.props.handleSearch(this.refs.queryString.value);
  },
  render: function() {
    var self = this;
    return (
        <form style={style}>
          <div>
            <Debounce time="400" handler="onChange">
              <TextField type="text" floatingLabelText="Search" ref="queryString" onChange={self.handleSubmission} />
            </Debounce>
          </div>
          <RaisedButton type="submit" onClick={self.handleSubmission}>Go</RaisedButton>
        </form>
    );
  }
});

module.exports = FormComponent;