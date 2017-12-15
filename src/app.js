const app = {
  title: 'Indecision App',
  subtitle: 'Making React do cool stuff',
  options: [],
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }

  renderApp();
};

const onBtnClick = e => {
  if (app.options.length > 0) {
    app.options = [];
  }

  renderApp();
};

const numbers = [13, 200, 956];

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={onBtnClick}>Remove All</button>
      <ol>
        {app.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  const appRoot = document.getElementById('app');

  ReactDOM.render(template, appRoot);
};

renderApp();
