import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from "../relay/Enviroment";


const mutation = graphql`
    mutation DeleteAnswerMutation($_id: ID!,$_qid:ID!){
        deleteAnswer(_id:$_id,_qid:$_qid){
            _id
        }
    }
`;

export function deleteAnswer(_id, _qid) {
    const variables = {
        _id,
        _qid
    };
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
    })
}

export default {deleteAnswer};