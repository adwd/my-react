import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

class App extends React.Component<{ name: string }> {
  render() {
    return (
      <div>
        {this.props.name}
        <Hello />
      </div>
    );
  }
}

render(<App name="yooo" />, document.getElementById('root'));
