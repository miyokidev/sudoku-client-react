import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/HomePage/Home'
import Solver from './components/pages/SolverPage/Solver'
import About from './components/pages/AboutPage/About'
import Footer from './components/Footer'
import Grid from './components/Grid'

function App() {
  return (
    <Router>
      <Navbar />
      <Grid />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/solver' exact component={Solver}/>
        <Route path='/about' exact component={About}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;