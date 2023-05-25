import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Orders from './components/Orders'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/orders" component={Orders} />
  </Switch>
)

export default App
