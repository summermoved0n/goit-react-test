import { Component, Fragment } from 'react';

export class App extends Component {
  handleClick = () => {
    console.log('hello');
  };

  render() {
    return (
      <Fragment>
        <div>React homework test</div>
        <button onClick={this.handleClick}>Click</button>
        <ul>
          <li>Dima</li>
          <li>Valya</li>
          <li>Artur</li>
          <li>Denchik</li>
        </ul>
      </Fragment>
    );
  }
}
