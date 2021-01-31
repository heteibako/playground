import { Router, Route, Link, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Start } from './query/Start';
import { Hooks } from './hooks/Hooks';
const hist = createBrowserHistory();
function App() {
  return (
    <Router history={hist}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hooks">Custom Hooks</Link>
          </li>
          <li>
            <Link to="/react-query">React Query</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/react-query" component={Start} />
        <Route exact path="/hooks" component={Hooks} />
      </Switch>
    </Router>
  );
}

export default App;
