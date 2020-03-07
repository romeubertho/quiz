import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './App.css';
import Questions from "./components/Questions";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar App-header" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <Link to="/" className="navbar-item">
                                Questions Manager
                            </Link>
                        </div>
                        <div className="navbar-end">
                            <Link to="/questions" className="navbar-item">
                                All Questions
                            </Link>
                            <Link to="/questions" className="navbar-item">
                                New Question
                            </Link>
                        </div>
                    </nav>
                    <Route exact path="/" component={Questions}/>
                    <Route path="/test" component={Questions}/>
                    <Route path="/questions/" component={Questions}/>
                </div>
            </Router>
        );
    }
};

// function App2() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo"/>
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

export default App;
