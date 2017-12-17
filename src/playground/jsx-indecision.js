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

const onMakeDecsion = () => {
  // generate a random number inclusive (0 or 1)
  // so we can pull item out of array buy it's index
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecsion}>
        What should I do?
      </button>
      <button onClick={onBtnClick}>Remove All</button>
      <ol>{app.options.map(option => <li key={option}>{option}</li>)}</ol>
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
