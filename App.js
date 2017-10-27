import React from 'react';

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = { Hello: null };
    this.onClick = this.onClick.bind(this);
  }
  async onClick() {
    const Hello = await import('./Hello');
    this.setState({ Hello: Hello.default || Hello });
  }
  render() {
    const { Hello } = this.state;
    return (
      <div>
        {Hello && <Hello />}
        <button onClick={this.onClick}>Hello</button>
      </div>
    );
  }
}

export default App;
