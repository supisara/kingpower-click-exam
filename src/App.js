import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ApplicationPage from './page/application/ApplicationPage';

export default class App extends Component {
  render() {
    return (
      <Container>
        <ApplicationPage />
      </Container>
    )
  }
}




