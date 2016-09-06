var React = require('react');
var ReactDOM = require('react-dom');

// FromComponent is for collecting users' input. Clicking the button will 
// pass it to Container to make Async call. 

var FormComponent = React.createClass({
  handleSubmission: function(e) {
    e.preventDefault();
    // TODO: Add input verification here.
    this.props.handleSearch(this.refs.queryString.value);
  },
  render: function() {
    return (
        <form onSubmit={this.handleSubmission}>
          <div className="input-group">
            <input type="text" placeholder="Search..." ref="queryString"></input>
          </div>
          <input type="submit"></input>
        </form>
    );
  }
});

module.exports = FormComponent;