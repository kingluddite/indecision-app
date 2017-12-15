const app = {
  showDetails: false,
  details:
    'Lorem voluptatibus itaque placeat itaque corporis! Numquam velit dolorum expedita in consequuntur molestiae ex quis consequatur. Iure facere voluptatibus iste ipsa esse. Ullam adipisci doloremque saepe error perspiciatis porro? Incidunt',
};

const showHideDetails = () => {
  app.showDetails = !app.showDetails;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Toggle Visability</h1>
      <button onClick={showHideDetails}>
        {app.showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {app.showDetails ? <p>{app.details}</p> : ''}
    </div>
  );

  const appRoot = document.getElementById('app');

  ReactDOM.render(template, appRoot);
};

render();
