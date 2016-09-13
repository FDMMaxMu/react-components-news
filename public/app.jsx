var React = require('react');
var ReactDOM = require('react-dom');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var Container = require('./components/Container');

const App = () => (
  <MuiThemeProvider>
    <Container />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);