var React = require('react');
var ReactDOM = require('react-dom');

var FormComponent = require('./FormComponent');
var ResultPanel = require('./ResultPanel');

// Container is the container for displaying both resultPanel (displaying 
// query results) and FormComponent (collecting users' inputs).
// Also, Container is the place to make Ajax call based on users' inputs.
var Container = React.createClass({
  getInitialState: function () {
    return {
      posts: []
    };
  },
  search: function(queryString) {
    var component = this;
    fetch("https://webhose.io/search?token=3dc128bd-8913-4b76-9386-5b05bdc9a8b5&format=json&q=" + queryString + "%20language%3A(english)")
    .then(function (response, error) {
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
        response.status);  
        return;  
      }
      response.json().then(function(data) {
        component.setState({
          posts: data.posts.slice(0,30)
        });
        console.log(data.posts.slice(0,30));
      });
    })
  },
  render: function() {
    return (
      <div>
        <FormComponent handleSearch={this.search}/>
        <ResultPanel queryResult={this.state.posts}/>
      </div>
    );
  }
});

module.exports = Container;
