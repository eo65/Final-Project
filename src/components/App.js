import React from 'react';
import axios from 'axios';

import Home from './Home';
import Luxury from './Luxury';

class App extends React.Component {

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('https://my-json-server.typicode.com/eo65/server/db')
      .then(response => {
        this.props.setTasks(response.data);
      }).catch(error => {
        this.props.tasksError();
      });
  }

  render() {
    return (
      <div className="container">
        <List />
        <Luxury />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.errors.getTasks
  };
}

export default App;