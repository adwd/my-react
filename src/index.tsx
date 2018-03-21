import React from 'react';
import { render } from 'react-dom';

class App extends React.Component<{ name: string }> {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}

render(<App name="yooo" />, document.getElementById('root'));
