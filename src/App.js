import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
	return (

		<div>
			<Router>
				<Switch>
					<Route path ="/" component={Login} exact></Route>
                    <Route component={Home}></Route>
				</Switch>
			</Router>
		</div>

	);
}

export default App;
