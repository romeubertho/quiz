import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import * as serviceWorker from './serviceWorker';

// import environment from "./relay/Enviroment";
// import {graphql, QueryRenderer} from 'react-relay';
//
//
// class Questions extends React.Component {
//     render() {
//         return (
//             <QueryRenderer
//                 environment={environment}
//                 query={graphql`
//                     query indexQuery {
//                         allQuestions{
//                             title
//                         }
//                     }
//         `}
//                 variables={{}}
//                 render={({error, props}) => {
//                     if (error) {
//                         return <div>Error!</div>;
//                     }
//                     if (!props) {
//                         return <div>Loading...</div>;
//                     }
//                     return <div>User ID: {props.title}</div>;
//                 }}
//             />
//         );
//     }
// }


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
