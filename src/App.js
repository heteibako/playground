import { Router, Route, Link, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Start } from './query/Start';
import Main from './hoc/Main';
import { Hooks } from './hooks/Hooks';
import MainWrapper from './context/Main';
import RecoilApp from './recoil/RecoilApp';
const hist = createBrowserHistory();
function App() {
  return (
    <Router history={hist}>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/hooks'>Custom Hooks</Link>
          </li>
          <li>
            <Link to='/react-query'>React Query</Link>
          </li>
          <li>
            <Link to='/recoil'>Recoil</Link>
          </li>
          <li>
            <Link to='/hoc'>HOC</Link>
          </li>
          <li>
            <Link to='/context'>Context API</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/recoil' component={RecoilApp} />

        <Route exact path='/react-query' component={Start} />
        <Route exact path='/hooks' component={Hooks} />
        <Route exact path='/hoc' component={Main} />
        <Route exact path='/context' component={MainWrapper} />
      </Switch>
    </Router>
  );
}

export default App;
