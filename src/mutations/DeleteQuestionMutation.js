import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from "../relay/Enviroment";

const mutation = graphql`
    mutation DeleteQuestionMutation($_id: ID!){
        deleteQuestion(_id: $_id){
            _id
            title
            answers{
                answer
            }
        }
    }
`;

export function deleteQuestion(_id,) {
    const variables = {
        _id
    };
    return new Promise((resolve, reject) => {
        commitMutation(
            environment,
            {
                mutation,
                variables,
                onCompleted: (response, errors) => {
                    console.log(response);
                    resolve(response)
                },
                onError: err => {
                    console.log(err);
                    reject(err)
                }
            }
        );
    });
}

export default {deleteQuestion};