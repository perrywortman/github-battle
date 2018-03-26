import React from 'react';
import { Link } from 'react-router';
import MainContainer from './MainContainer';

class Home extends React.Component {
  render() {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className="lead">Two man enter, one man(or woman) leave!</p>
        <Link to="/playerOne">
          <button type="button" className="btn btn-lg btn-success">
            Get Started
          </button>
        </Link>
      </MainContainer>
    );
  }
}

export default Home;
