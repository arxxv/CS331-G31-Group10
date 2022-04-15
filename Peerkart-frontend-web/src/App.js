import "./App.css";
import Sidebar from "./compnents/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import { Provider, useSelector } from "react-redux";

function App() {
	const token=useSelector(state=>state.auth.userData.token);
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path="/register" element={<Register/>}/>
				</Routes>
				{token && <div className='app'>
					<div className='app-left'>
						<Sidebar />
					</div>

					<div className='app-right'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/dashboard' element={<Dashboard />} />
						</Routes>
					</div>
				</div>}
			</Router>
		</div>
	);
}

export default App;
