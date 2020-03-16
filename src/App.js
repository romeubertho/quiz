import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './App.css';
import Questions from "./components/Questions";
import QuestionInput from "./components/QuestionInput";

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
                            <Link to="/all" className="navbar-item">
                                All Questions
                            </Link>
                            <Link to="/new" className="navbar-item">
                                New Question
                            </Link>
                        </div>
                    </nav>
                    <Route exact path="/" component={Questions}/>
                    <Route path="/test" component={Questions}/>
                    <Route path="/new" component={QuestionInput}/>
                </div>
            </Router>
        );
    }
};
export default App;
