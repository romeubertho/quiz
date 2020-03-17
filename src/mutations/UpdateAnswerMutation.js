import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from "../relay/Enviroment";

const mutation = graphql`
    mutation UpdateAnswerMutation($_id:ID!,$input: AnswerInput){
        updateAnswer(_id: $_id,input: $input){
            _id
            answer
        }
    }
`;

export function updateAnswer(_id, answer) {
    const variables = {
        _id,
        input: {
            answer
        }
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

export default {updateAnswer};