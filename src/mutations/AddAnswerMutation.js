import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from "../relay/Enviroment";

const mutation = graphql`
    mutation AddAnswerMutation($_qid:ID!,$input: AnswerInput){
        addAnswer(_qid: $_qid,input: $input){
            _id
            answer
        }
    }
`;

export async function addAnswer(qid, answer) {
    const variables = {
        _qid: qid,
        input: {
            answer
        }
    }
    return new Promise((resolve, reject) => {
        commitMutation(
            environment,
            {
                mutation,
                variables,
                onCompleted: (response, errors) => {
                    console.log(response);
                    resolve(response);
                },
                onError: err => {
                    console.log(err);
                    reject(err)
                }
            }
        );
    });
}

export default {addAnswer};