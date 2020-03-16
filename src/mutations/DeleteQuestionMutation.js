import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';


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

function deleteQuestion(environment, _id,) {
    const variables = {
        input: {
            _id
        }
    }
    return commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response, errors) => {
                console.log(repsonse)
            },
            onError: err => console.log(err)
        }
    );
}

export default {deleteQuestion};