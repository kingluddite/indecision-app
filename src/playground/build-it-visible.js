class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      details: 'these are the details',
    };

    this.handleToggleVisability = this.handleToggleVisability.bind(this);
  }

  handleToggleVisability() {
    this.setState(prevState => {
      return {
        visible: !prevState.visible,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Toggle Visability</h1>
        <button onClick={this.handleToggleVisability}>
          {this.state.visible ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visible ? <p>{this.state.details}</p> : ''}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
