class Header extends React.Component {
  render() {
    return <p>Header Component</p>;
  }
}

const jsx = (
  <div>
    <h1>Title</h1>
    <Header />
  </div>
);
ReactDOM.render(jsx, document.getElementById('app'));
