import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Houses from './pages/Houses';
import About from './pages/About';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
			{/* <Header /> */}
			<main>
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/logement/:id" element={<Houses />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</Router>

			</main>
			{/* <Footer /> */}
		</div>
  );
}

export default App;
